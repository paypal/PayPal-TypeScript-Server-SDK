import { test, expect } from '@playwright/test';
import {
  CheckoutPaymentIntent,
  OrdersController,
  PayPalExperienceLandingPage,
} from '../src';
import { testClient } from './testClient';
import { completePayment } from './playwright';
import { makeApiCall } from './testHelper';
import { randomInt } from 'crypto';

let controller: OrdersController;
test.beforeAll(async () => {
  controller = new OrdersController(testClient);
});

export default function standardCheckoutFlow() {
  test('Standard Checkout Flow', async ({ page }) => {
    // Create Order
    const orderDetail = await test.step('Create Order', async () => {
      const collect = {
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
      const { result: orderDetail, ...createOrderResponse } = await makeApiCall(
        () => controller.ordersCreate(collect)
      );
      // verify status 200
      expect(createOrderResponse.statusCode).toBe(200);
      return orderDetail;
    });
    // refirect to the payer action link using playwright
    await test.step('Complete Payment', async () => {
      const result = await completePayment(page, orderDetail?.links[1]?.href);
      // verify the payment completion
      expect(result).toBe(true);
    });
    await test.step('Capture Order', async () => {
      // Capture Order
      const captureData = {
        id: orderDetail?.id,
        payPalRequestId: randomInt(99999999999).toString(),
        prefer: 'return=representation',
      };
      // capture order request
      const captureOrderResponse = await makeApiCall(() =>
        controller.ordersCapture(captureData)
      );
      // verify status 201
      expect(captureOrderResponse.statusCode).toBe(201);
    });
    await test.step('Get Order Details', async () => {
      // Get Order Details
      const getOrderDetailsRequest = {
        id: orderDetail?.id,
      };
      // get order details request
      const orderDetailsResponse = await makeApiCall(() =>
        controller.ordersGet(getOrderDetailsRequest)
      );
      // verify status 200
      expect(orderDetailsResponse.statusCode).toBe(200);
    });
  });
}
