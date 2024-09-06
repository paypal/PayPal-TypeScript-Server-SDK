import { test, expect } from '@playwright/test';
import {
  CheckoutPaymentIntent,
  OrdersController,
  PayPalPaymentTokenUsageType,
  ShippingPreference,
  StoreInVaultInstruction,
} from '../src';
import { testClient } from './testClient';
import { completePayment } from './playwright';
import { makeApiCall } from './testHelper';
import { randomInt } from 'crypto';

let controller: OrdersController;

test.beforeAll(async () => {
  controller = new OrdersController(testClient);
});

export default function paymentMethodWithPurchaseFlow() {
  test('Payment Method With Purchase Flow', async ({ page }) => {
    const orderDetail = await test.step('Create Order', async () => {
      // Create Order
      const collect = {
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
              items: [
                {
                  name: 'Camera',
                  unitAmount: {
                    currencyCode: 'USD',
                    value: '10.00',
                  },
                  quantity: '1',
                },
              ],
              shipping: {
                address: {
                  countryCode: 'US',
                  addressLine1: '500 Main Street',
                  addressLine2: '#1000',
                  adminArea2: 'San Jose',
                  adminArea1: 'CA',
                  postalCode: '95131',
                },
              },
            },
          ],
          paymentSource: {
            paypal: {
              attributes: {
                vault: {
                  usageType: PayPalPaymentTokenUsageType.MERCHANT,
                  storeInVault: StoreInVaultInstruction.ONSUCCESS,
                },
              },
              experienceContext: {
                shippingPreference: ShippingPreference.SETPROVIDEDADDRESS,
                returnUrl: 'https://example.com/returnUrl',
                cancelUrl: 'https://example.com/cancel',
              },
            },
          },
        },
        payPalRequestId: randomInt(99999999999).toString(),
        prefer: 'return=representation',
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
    await test.step('Capture Order', async () => {
      // Capture Order
      const captureData = {
        id: orderDetail.id,
        prefer: 'return=representation',
      };
      // capture order request
      const captureOrderResponse = await makeApiCall(() =>
        controller.ordersCapture(captureData)
      );
      // verify status 201
      expect(captureOrderResponse.statusCode).toBe(201);
    });
  });
}
