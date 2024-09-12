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

export default function voidAuthorizationFlow() {
  test('Void Authorization Flow', async ({ page }) => {
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
      const result = await completePayment(page, orderDetail.links[1].href);
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
    await test.step('Void Authorization', async () => {
      // Void Authorization
      const voidAuthRequest = {
        authorizationId:
          authorizeDetail.purchaseUnits[0].payments.authorizations[0].id,
        prefer: 'return=representation',
      };
      // Capture Authorization
      const voidAuthResponse = await makeApiCall(() =>
        paymentsController.authorizationsCapture(voidAuthRequest)
      );
      // verify Successfull response status 201
      expect(voidAuthResponse.statusCode).toBe(201);
    });
  });
}
