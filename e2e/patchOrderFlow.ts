import { test, expect } from '@playwright/test';
import { CheckoutPaymentIntent, OrdersController } from '../src';
import { testClient } from './testClient';
import { makeApiCall } from './testHelper';
import { randomInt } from 'crypto';
import { PatchOp } from '../src/models/patchOp';

let controller: OrdersController;

test.beforeAll(async () => {
  controller = new OrdersController(testClient);
});

export default function patchOrderFlow() {
  test('Patch Order Flow', async () => {
    const orderDetail = await test.step('Create Order', async () => {
      // Create Order
      const CreateOrder = {
        body: {
          intent: CheckoutPaymentIntent.CAPTURE,
          purchaseUnits: [
            {
              amount: {
                currencyCode: 'USD',
                value: '10.00',
                breakdown: {
                  itemTotal: {
                    currencyCode: 'USD',
                    value: '10.0',
                  },
                  shipping: {
                    currencyCode: 'USD',
                    value: '0.0',
                  },
                  taxTotal: {
                    currencyCode: 'USD',
                    value: '0',
                  },
                },
              },
              description: 'Camera Shop',
              items: [
                {
                  name: 'Levis 501 Selvedge STF',
                  unitAmount: {
                    currencyCode: 'USD',
                    value: '5.00',
                  },
                  quantity: '1',
                  tax: {
                    currencyCode: 'USD',
                    value: '0.00',
                  },
                  sku: '5158936',
                },
                {
                  name: 'T-Shirt',
                  unitAmount: {
                    currencyCode: 'USD',
                    value: '5.00',
                  },
                  quantity: '1',
                  tax: {
                    currencyCode: 'USD',
                    value: '0.00',
                  },
                  sku: '1457432',
                },
              ],
              shipping: {
                address: {
                  countryCode: 'US',
                  addressLine1: '123 Main Street',
                  adminArea2: 'San Jose',
                  adminArea1: 'CA',
                  postalCode: '95131',
                },
              },
            },
          ],
          paymentSource: {
            paypal: {
              experienceContext: {
                locale: 'en-US',
                returnUrl: 'https://example.com/returnUrl',
                cancelUrl: 'https://example.com/cancelUrl',
              },
            },
          },
        },
        payPalRequestId: randomInt(99999999999).toString(),
        prefer: 'return=minimal',
      };
      // create order request
      const { result: orderDetail, ...createOrderResponse } = await makeApiCall(
        () => controller.ordersCreate(CreateOrder)
      );
      // verify status 200
      expect(createOrderResponse.statusCode).toBe(200);
      return orderDetail;
    });
    await test.step('Patch Order', async () => {
      // Patch Order
      const PatchOrder = {
        id: orderDetail.id,
        body: [
          {
            op: PatchOp.Replace,
            path: "/purchase_units/@reference_id==d'default'/shipping/address",
            value: {
              'address_line_1': '1234 Main St',
              'address_line_2': 'Floor 6',
              'admin_area_2': 'San Francisco',
              'admin_area_1': 'CA',
              'postal_code': '94107',
              'country_code': 'US',
            },
          },
        ],
      };
      // Patch order request
      const patchOrderResponse = await makeApiCall(() =>
        controller.ordersPatch(PatchOrder)
      );
      // verify status 204
      expect(patchOrderResponse.statusCode).toBe(204);
    });
    await test.step('Get Order Detail', async () => {
      // Get Order Details
      const OrderGet = {
        id: orderDetail.id,
      };
      // Get Order Details Request
      const { result: returnedOrder, ...getOrderDetailsResponse } =
        await makeApiCall(() => controller.ordersGet(OrderGet));
      // verify status 200
      expect(getOrderDetailsResponse.statusCode).toBe(200);
      const shippAddress = returnedOrder.purchaseUnits[0].shipping;
      // verify the shipping address is updated
      expect(shippAddress.address.addressLine1).toBe('1234 Main St');
    });
  });
}
