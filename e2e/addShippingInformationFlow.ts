import { test, expect } from '@playwright/test';
import {
  CheckoutPaymentIntent,
  OrdersController,
  PayPalExperienceLandingPage,
  ShipmentCarrier,
  UPCType,
} from '../src';
import { testClient } from './testClient';
import { completePayment } from './playwright';
import { makeApiCall } from './testHelper';
import { randomInt } from 'crypto';
import { PatchOp } from '../src/models/patchOp';

let controller: OrdersController;

test.beforeAll(async () => {
  controller = new OrdersController(testClient);
});

export default function AddShippingTrackerInformationToOrderFlow() {
  test('Add Shipping Tracker Information To Order Flow', async ({ page }) => {
    const createdOrder = await test.step('Create Order', async () => {
      // Create Order
      const createOrderBody = {
        body: {
          intent: CheckoutPaymentIntent.CAPTURE,
          purchaseUnits: [
            {
              amount: {
                currencyCode: 'USD',
                value: '100.00',
              },
              referenceId: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
            },
          ],
          paymentSource: {
            paypal: {
              experienceContext: {
                locale: 'en-US',
                returnUrl: 'https://example.com/returnUrl',
                cancelUrl: 'https://example.com/cancelUrl',
                landingPage: PayPalExperienceLandingPage.LOGIN,
              },
            },
          },
        },
      };
      // create order request
      const { result: createdOrder, ...createOrderResponse } =
        await makeApiCall(() => controller.ordersCreate(createOrderBody));
      // verify status 200
      expect(createOrderResponse.statusCode).toBe(200);
      return createdOrder;
    });
    await test.step('Complete Payment', async () => {
      // payment completion using browser
      const result = await completePayment(page, createdOrder.links[1]?.href);
      expect(result).toBe(true);
    });
    const capturedOrder = await test.step('Capture Order', async () => {
      //Capture Order
      const captureData = {
        id: createdOrder.id,
        payPalRequestId: randomInt(99999999999).toString(),
        prefer: 'return=representation',
      };
      // capture order request
      const { result: capturedOrder, ...captureOrderResponse } =
        await makeApiCall(() => controller.ordersCapture(captureData));
      // verify status 201
      expect(captureOrderResponse.statusCode).toBe(201);
      return capturedOrder;
    });
    const shippingorder = await test.step('Create Order Track', async () => {
      // create order track
      const addShippingInformation = {
        id: createdOrder.id,
        body: {
          captureId:
            capturedOrder?.purchaseUnits?.[0]?.payments?.captures?.[0]?.id,
          trackingNumber: '443844607820',
          carrier: ShipmentCarrier.FEDEX,
          notifyPayer: false,
          items: [
            {
              name: 'T-Shirt',
              quantity: '1',
              sku: 'sku02',
              url: 'https://www.example.com/example',
              imageUrl: 'https://www.example.com/example.jpg',
              upc: {
                type: UPCType.UPCA,
                code: 'upc001',
              },
            },
          ],
        },
      };
      // order track create request
      const { result: shippingorder, ...addShippingInformationResponse } =
        await makeApiCall(() =>
          controller.ordersTrackCreate(addShippingInformation)
        );
      // verify status 201
      expect(addShippingInformationResponse.statusCode).toBe(201);
      return shippingorder;
    });
    await test.step('Update Order Track', async () => {
      // update order track
      const UpdateShippingInformation = {
        id: createdOrder.id,
        trackerId:
          shippingorder.purchaseUnits?.[0]?.shipping?.trackers?.[0]?.id,
        body: [
          {
            op: PatchOp.Replace,
            path: '/notify_payer',
            value: true,
          },
        ],
      };
      // update order track request
      const updateShippingInformationResponse = await makeApiCall(() =>
        controller.ordersTrackersPatch(UpdateShippingInformation)
      );
      // verify status 204
      expect(updateShippingInformationResponse.statusCode).toBe(204);
    });
  });
}
