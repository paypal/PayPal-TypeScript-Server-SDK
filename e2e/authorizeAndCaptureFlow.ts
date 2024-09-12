import { test, expect } from '@playwright/test';
import {
  CheckoutPaymentIntent,
  OrdersController,
  PaymentsController,
  PayPalExperienceLandingPage,
} from '../src';
import { testClient } from './testClient';
import { completePayment } from './playwright';
import { makeApiCall } from './testHelper';
import { randomInt } from 'crypto';

let controller: OrdersController;
let paymentsController: PaymentsController;

test.beforeAll(async () => {
  controller = new OrdersController(testClient);
  paymentsController = new PaymentsController(testClient);
});

export default function authorizeAndCaptureFlow() {
  test('Authorize and Capture Flow', async ({ page }) => {
    const orderDetail = await test.step('Create Order', async () => {
      // Create Order
      const collect = {
        payPalRequestId: randomInt(99999999999).toString(),
        body: {
          intent: CheckoutPaymentIntent.AUTHORIZE,
          purchaseUnits: [
            {
              amount: {
                currencyCode: 'USD',
                value: '25.00',
                breakdown: {
                  itemTotal: {
                    currencyCode: 'USD',
                    value: '25.00',
                  },
                  shipping: {
                    currencyCode: 'USD',
                    value: '0',
                  },
                  taxTotal: {
                    currencyCode: 'USD',
                    value: '0',
                  },
                },
              },
              description: 'Clothing Shop',
              items: [
                {
                  name: 'Levis 501',
                  unitAmount: {
                    currencyCode: 'USD',
                    value: '25.00',
                  },
                  quantity: '1',
                  tax: {
                    currencyCode: 'USD',
                    value: '0.00',
                  },
                  sku: '5158936',
                },
              ],
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
    await test.step('Complete Payment', async () => {
      // refirect to the payer action link using playwright
      const result = await completePayment(page, orderDetail?.links[1]?.href);
      // verify the payment completion
      expect(result).toBe(true);
    });
    const authorizeDetail = await test.step('Authorize Order', async () => {
      // Authorize Order
      const authorizeData = {
        id: orderDetail.id,
        payPalRequestId: randomInt(99999999999).toString(),
        prefer: 'return=representation',
      };
      // authorize order request
      const { result: authorizeDetail, ...authorizeOrderResponse } =
        await makeApiCall(() => controller.ordersAuthorize(authorizeData));
      // verify status 201
      expect(authorizeOrderResponse.statusCode).toBe(201);
      return authorizeDetail;
    });
    const captureDetail = await test.step('Capture Authorization', async () => {
      // Capture Authorization
      const captureAuthRequest = {
        authorizationId:
          authorizeDetail?.purchaseUnits[0]?.payments?.authorizations[0]?.id,
        prefer: 'return=representation',
      };
      // Capture Authorization Request
      const { result: captureDetail, ...captureAuthResponse } =
        await makeApiCall(() =>
          paymentsController.authorizationsCapture(captureAuthRequest)
        );
      // verify Successfull response status 201
      expect(captureAuthResponse.statusCode).toBe(201);
      return captureDetail;
    });
    await test.step('Get Authorization', async () => {
      // Get Authorization
      const { result: getAuthorization, ...getAuthorizationResponse } =
        await makeApiCall(() =>
          paymentsController.authorizationsGet(
            authorizeDetail?.purchaseUnits[0]?.payments?.authorizations[0]?.id
          )
        );
      // verify status 200
      expect(getAuthorizationResponse.statusCode).toBe(200);
      // verify the status is captured
      expect(getAuthorization.status).toBe('CAPTURED');
    });
    await test.step('Get Capture', async () => {
      const { result: getCapture, ...getCaptureResponse } = await makeApiCall(
        () => paymentsController.capturesGet(captureDetail.id)
      );
      // verify status 200
      expect(getCaptureResponse.statusCode).toBe(200);
      // verify the status is completed
      expect(getCapture.status).toBe('COMPLETED');
    });
  });
}
