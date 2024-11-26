import { test, expect } from '@playwright/test';
import {
  CheckoutPaymentIntent,
  OrdersController,
  TokenRequestType,
  VaultController,
} from '../src';
import { testClient } from './testClient';
import { savePaymentMethod } from './playwright';
import { makeApiCall } from './testHelper';
import { randomInt } from 'crypto';

let controller: OrdersController;
let vaultController: VaultController;

test.beforeAll(async () => {
  controller = new OrdersController(testClient);
  vaultController = new VaultController(testClient);
});

export default function paymentMethodWithoutPurchaseFlow() {
  test('Payment Method Without Purchase Flow', async ({ page }) => {
    const setupTokenDetails =
      await test.step('Create Setup Token', async () => {
        // Create Setup Token
        const collect = {
          payPalRequestId: randomInt(99999999999).toString(),
          body: {
            paymentSource: {
              paypal: {
                description:
                  'Description for PayPal to be shown to PayPal payer',
                permitMultiplePaymentTokens: true,
                usageType: 'MERCHANT',
                customerType: 'CONSUMER',
                experienceContext: {
                  returnUrl: 'https://example.com/returnUrl',
                  cancelUrl: 'https://example.com/cancelUrl',
                },
              },
            },
          },
        };
        // create Setup token request
        const { result: setupTokenDetails, ...setupTokenResponse } =
          await makeApiCall(() => vaultController.setupTokensCreate(collect));
        // verify success status 201
        expect(setupTokenResponse.statusCode).toBe(201);
        return setupTokenDetails;
      });
    await test.step('Save Payment Method', async () => {
      // redirect to approve link using playwright
      const result = await savePaymentMethod(
        page,
        setupTokenDetails.links[1].href
      );
      // verify the payment completion
      expect(result).toBe(true);
    });
    const PMTDetails = await test.step('Create Payment Token', async () => {
      // Create Payment Token
      const PMTData = {
        payPalRequestId: randomInt(99999999999).toString(),
        body: {
          paymentSource: {
            token: {
              id: setupTokenDetails.id,
              type: TokenRequestType.SETUPTOKEN,
            },
          },
        },
      };
      // Create Payment Token request
      const { result: PMTDetails, ...PMTResponse } = await makeApiCall(() =>
        vaultController.paymentTokensCreate(PMTData)
      );
      // verify status 201
      expect(PMTResponse.statusCode).toBe(201);
      return PMTDetails;
    });
    await test.step('Create Order For Returning Buyer', async () => {
      // Returning Buyer Flow
      // Create Order
      const OrderData = {
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
              vaultId: PMTDetails.id,
            },
          },
        },
        payPalRequestId: randomInt(99999999999).toString(),
        prefer: 'return=representation',
      };
      // Create Order request
      const orderResponse = await makeApiCall(() =>
        controller.ordersCreate(OrderData)
      );
      // verify status 201
      expect(orderResponse.statusCode).toBe(201);
    });
    await test.step('Get Setup Token', async () => {
      const { result: getSetupToken, ...getSetupTokenResponse } =
        await makeApiCall(() =>
          vaultController.setupTokensGet(setupTokenDetails.id)
        );
      // verify status 200
      expect(getSetupTokenResponse.statusCode).toBe(200);
      // verify the status is vaulted
      expect(getSetupToken.status).toBe('VAULTED');
    });
    await test.step('Get Payment TOken', async () => {
      const { result: getPaymentToken, ...getPaymentTokenResponse } =
        await makeApiCall(() =>
          vaultController.paymentTokensGet(PMTDetails.id)
        );
      // verify status 200
      expect(getPaymentTokenResponse.statusCode).toBe(200);
      // verify the payment token response to not be empty
      expect(getPaymentToken).toBeTruthy();
    });
  });
}
