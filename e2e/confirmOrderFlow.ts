import { test, expect } from '@playwright/test';
import {
  CheckoutPaymentIntent,
  OrdersController,
  PayPalExperienceLandingPage,
  ShippingPreference,
  PayPalExperienceUserAction,
  PayeePaymentMethodPreference,
} from '../src';
import { testClient } from './testClient';
import { completePayment } from './playwright';
import { makeApiCall } from './testHelper';
import { randomInt } from 'crypto';

let controller: OrdersController;

test.beforeAll(async () => {
  controller = new OrdersController(testClient);
});

export default function confirmOrderFlow() {
  test('Confirm Order Flow', async ({ page }) => {
    const createOrder = await test.step('Create Order', async () => {
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
        payPalRequestId: randomInt(99999999999).toString(),
        prefer: 'return=representation',
      };
      // create order request
      const { result: createOrder, ...createOrderResponse } = await makeApiCall(
        () => controller.ordersCreate(createOrderBody)
      );
      // verify status 200
      expect(createOrderResponse.statusCode).toBe(200);
      return createOrder;
    });
    const confirmOrder = await test.step('Confirm Order', async () => {
      // confirm order request paramters and body
      const collect = {
        id: createOrder.id,
        prefer: 'return=representation',
        body: {
          paymentSource: {
            paypal: {
              emailAddress: 'customer@example.com',
              name: {
                givenName: 'John',
                surname: 'Doe',
              },
              experienceContext: {
                brandName: 'EXAMPLE INC',
                locale: 'en-US',
                shippingPreference: ShippingPreference.SETPROVIDEDADDRESS,
                returnUrl: 'https://example.com/returnUrl',
                cancelUrl: 'https://example.com/cancelUrl',
                landingPage: PayPalExperienceLandingPage.LOGIN,
                userAction: PayPalExperienceUserAction.PAYNOW,
                paymentMethodPreference:
                  PayeePaymentMethodPreference.IMMEDIATEPAYMENTREQUIRED,
              },
            },
          },
        },
      };
      // confirm order request
      const { result: confirmOrder, ...confirmOrderResponse } =
        await makeApiCall(() => controller.ordersConfirm(collect));
      // verify status 200
      expect(confirmOrderResponse.statusCode).toBe(200);
      return confirmOrder;
    });
    await test.step('Complete Payment', async () => {
      // complete payment using the payer action url
      const completePaymentResult = await completePayment(
        page,
        confirmOrder?.links[1]?.href
      );
      expect(completePaymentResult).toBe(true);
    });
    await test.step('Capture Order', async () => {
      // Capture Order Request body
      const captureData = {
        id: createOrder.id,
        payPalRequestId: randomInt(99999999999).toString(),
        prefer: 'return=representation',
      };
      // capture order request
      const { result: captureResult, ...captureOrderResponse } =
        await makeApiCall(() => controller.ordersCapture(captureData));
      // verify status 201
      expect(captureOrderResponse.statusCode).toBe(201);
      expect(captureResult.status).toBe('COMPLETED');
    });
  });
}
