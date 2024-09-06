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

export default function refundFlow() {
  test('Refund Flow', async ({ page }) => {
    const orderDetail = await test.step('Create Order', async () => {
      // Create Order
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
    await test.step('Complete Payment', async () => {
      // refirect to the payer action link using playwright
      const result = await completePayment(page, orderDetail.links[1].href);
      // verify the payment completion
      expect(result).toBe(true);
    });
    const captureDetail = await test.step('Capture Order', async () => {
      //Capture Order
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
      return captureDetail;
    });
    const refund = await test.step('Refund', async () => {
      // Refund
      const refundRequest = {
        captureId: captureDetail.purchaseUnits[0].payments.captures[0].id,
        prefer: 'return=representation',
      };
      // refund request
      const { result: refund, ...refundResponse } = await makeApiCall(() =>
        paymentsController.capturesRefund(refundRequest)
      );
      // verify status 200
      expect(refundResponse.statusCode).toBe(201);
      return refund;
    });
    await test.step('Get Refund', async () => {
      const refundId = refund.id!;
      const { result: getRefund, ...getRefundefundResponse } =
        await makeApiCall(() => paymentsController.refundsGet(refundId));
      // verify status 200
      expect(getRefundefundResponse.statusCode).toBe(200);
      expect(getRefund.status).toBe('COMPLETED');
    });
  });
}
