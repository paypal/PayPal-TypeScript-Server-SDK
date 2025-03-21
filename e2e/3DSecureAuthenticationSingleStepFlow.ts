import { test, expect } from '@playwright/test';
import {
  CheckoutPaymentIntent,
  CardVerificationMethod,
  OrdersController,
} from '../src';
import { testClient } from './testClient';
import { completeHeliosVerification } from './playwright';
import { makeApiCall } from './testHelper';
import { randomInt } from 'crypto';

let controller: OrdersController;

test.beforeAll(async () => {
  controller = new OrdersController(testClient);
});

export default function SecureAuthenticationSingleStepFlow() {
  test('3D Secure Authentication Single-Step Flow', async ({ page }) => {
    const orderDetail = await test.step('Create Order', async () => {
      //Create Order
      const createOrderBody = {
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
                    value: '10.00',
                  },
                },
              },
              description: 'Camera Shop',
              customId: 'testcustom_id',
              invoiceId: 'invoice_number_' + randomInt(99999999999).toString(),
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
            },
          ],
          paymentSource: {
            card: {
              name: 'John Doe',
              number: '4868719995056080',
              expiry: '2027-02',
              billingAddress: {
                countryCode: 'US',
                addressLine1: '2211 N First Street',
                adminArea2: 'San Jose',
                adminArea1: 'CA',
                postalCode: '95131',
              },
              attributes: {
                verification: {
                  method: CardVerificationMethod.SCAALWAYS,
                },
              },
              experienceContext: {
                returnUrl: 'https://example.com/returnUrl',
                cancelUrl: 'https://example.com/cancelUrl',
              },
            },
          },
        },
        payPalRequestId: randomInt(99999999999).toString(),
        payPalPartnerAttributionId: 'PayPal-Partner-Attribution-Id',
        payPalClientMetadataId: 'PayPal-Client-Metadata-Id',
        prefer: 'return=representation',
      };
      //Create Order Request
      const { result: orderDetail, ...createOrderResponse } = await makeApiCall(
        () => controller.ordersCreate(createOrderBody)
      );
      // verify status 201
      expect(createOrderResponse.statusCode).toBe(201);
      return orderDetail;
    });
    await test.step('Complete Helios Verification', async () => {
      // Complete Payer Action via Helios
      const heliosVerification = await completeHeliosVerification(
        page,
        orderDetail.links[1].href
      );
      expect(heliosVerification).toBe(true);
    });
    await test.step('Get Order Details', async () => {
      // Get Order
      const getOrder = {
        id: orderDetail.id,
      };
      const { result: getOrderDetails, ...getOrderResponse } =
        await makeApiCall(() => controller.ordersGet(getOrder));
      // verify status 200
      expect(getOrderResponse.statusCode).toBe(200);
      // verify the payment source is not null
      expect(getOrderDetails).toHaveProperty('paymentSource');
    });
    await test.step('Capture Order', async () => {
      // Capture Order
      const captureData = {
        id: orderDetail.id,
        payPalRequestId: randomInt(99999999999).toString(),
        prefer: 'return=representation',
      };
      // capture order request
      const { result: captureDetail, ...captureOrderResponse } =
        await makeApiCall(() => controller.ordersCapture(captureData));
      // verify status 201
      expect(captureOrderResponse.statusCode).toBe(201);
      // verify the status is completed
      expect(captureDetail.status).toBe('COMPLETED');
    });
  });
}
