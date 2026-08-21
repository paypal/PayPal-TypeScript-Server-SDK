
# Order Request

The order request details.

## Structure

`OrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `intent` | [`CheckoutPaymentIntent`](../../doc/models/checkout-payment-intent.md) | Required | The intent to either capture payment immediately or authorize a payment for an order after order creation. |
| `processingInstruction` | [`ProcessingInstruction \| undefined`](../../doc/models/processing-instruction.md) | Optional | The instruction to process an order. |
| `payer` | [`Payer \| undefined`](../../doc/models/payer.md) | Optional | DEPRECATED. The customer is also known as the payer. The Payer object was intended to only be used with the `payment_source.paypal` object. In order to make this design more clear, the details in the `payer` object are now available under `payment_source.paypal`. Please use `payment_source.paypal`. |
| `purchaseUnits` | [`PurchaseUnitRequest[]`](../../doc/models/purchase-unit-request.md) | Required | An array of purchase units. Each purchase unit establishes a contract between a payer and the payee. Each purchase unit represents either a full or partial order that the payer intends to purchase from the payee.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |
| `paymentSource` | [`PaymentSource \| undefined`](../../doc/models/payment-source.md) | Optional | The payment source definition. |
| `applicationContext` | [`OrderApplicationContext \| undefined`](../../doc/models/order-application-context.md) | Optional | Customizes the payer experience during the approval process for the payment with PayPal. Note: Partners and Marketplaces might configure brand_name and shipping_preference during partner account setup, which overrides the request values. |

## Example

```ts
import {
  CheckoutPaymentIntent,
  DisbursementMode,
  ExperienceContextShippingPreference,
  OrderApplicationContextLandingPage,
  OrderApplicationContextShippingPreference,
  OrderApplicationContextUserAction,
  OrderRequest,
  PhoneType,
  ProcessingInstruction,
  TokenType,
} from '@paypal/paypal-server-sdk';

const orderRequest: OrderRequest = {
  intent: CheckoutPaymentIntent.Capture,
  purchaseUnits: [
    {
      amount: {
        currencyCode: 'currency_code6',
        value: 'value0',
        breakdown: {
          itemTotal: {
            currencyCode: 'currency_code0',
            value: 'value6',
          },
          shipping: {
            currencyCode: 'currency_code0',
            value: 'value6',
          },
          handling: {
            currencyCode: 'currency_code2',
            value: 'value8',
          },
          taxTotal: {
            currencyCode: 'currency_code4',
            value: 'value0',
          },
          insurance: {
            currencyCode: 'currency_code2',
            value: 'value8',
          },
        },
      },
      referenceId: 'reference_id4',
      payee: {
        emailAddress: 'email_address4',
        merchantId: 'merchant_id6',
      },
      paymentInstruction: {
        platformFees: [
          {
            amount: {
              currencyCode: 'currency_code6',
              value: 'value0',
            },
            payee: {
              emailAddress: 'email_address4',
              merchantId: 'merchant_id6',
            },
          },
          {
            amount: {
              currencyCode: 'currency_code6',
              value: 'value0',
            },
            payee: {
              emailAddress: 'email_address4',
              merchantId: 'merchant_id6',
            },
          },
          {
            amount: {
              currencyCode: 'currency_code6',
              value: 'value0',
            },
            payee: {
              emailAddress: 'email_address4',
              merchantId: 'merchant_id6',
            },
          }
        ],
        disbursementMode: DisbursementMode.Instant,
        payeePricingTierId: 'payee_pricing_tier_id2',
        payeeReceivableFxRateId: 'payee_receivable_fx_rate_id0',
      },
      description: 'description6',
      customId: 'custom_id4',
    }
  ],
  processingInstruction: ProcessingInstruction.OrderCompleteOnPaymentApproval,
  payer: {
    emailAddress: 'email_address6',
    payerId: 'payer_id6',
    name: {
      givenName: 'given_name2',
      surname: 'surname8',
    },
    phone: {
      phoneNumber: {
        nationalNumber: 'national_number6',
      },
      phoneType: PhoneType.Other,
    },
    birthDate: 'birth_date4',
  },
  paymentSource: {
    card: {
      name: 'name6',
      number: 'number6',
      expiry: 'expiry4',
      securityCode: 'security_code8',
      billingAddress: {
        countryCode: 'country_code8',
        addressLine1: 'address_line_12',
        addressLine2: 'address_line_28',
        adminArea2: 'admin_area_28',
        adminArea1: 'admin_area_14',
        postalCode: 'postal_code0',
      },
    },
    token: {
      id: 'id6',
      type: TokenType.BillingAgreement,
    },
    paypal: {
      vaultId: 'vault_id0',
      emailAddress: 'email_address0',
      name: {
        givenName: 'given_name2',
        surname: 'surname8',
      },
      phone: {
        phoneNumber: {
          nationalNumber: 'national_number6',
        },
        phoneType: PhoneType.Other,
      },
      birthDate: 'birth_date8',
    },
    bancontact: {
      name: 'name0',
      countryCode: 'country_code0',
      experienceContext: {
        brandName: 'brand_name2',
        locale: 'locale6',
        shippingPreference: ExperienceContextShippingPreference.NoShipping,
        returnUrl: 'return_url4',
        cancelUrl: 'cancel_url6',
      },
    },
    blik: {
      name: 'name2',
      countryCode: 'country_code2',
      email: 'email4',
      experienceContext: {
        brandName: 'brand_name2',
        locale: 'locale6',
        shippingPreference: ExperienceContextShippingPreference.NoShipping,
        returnUrl: 'return_url4',
        cancelUrl: 'cancel_url6',
      },
      level0: {
        authCode: 'auth_code8',
      },
      oneClick: {
        consumerReference: 'consumer_reference2',
        authCode: 'auth_code0',
        aliasLabel: 'alias_label6',
        aliasKey: 'alias_key4',
      },
    },
  },
  applicationContext: {
    brandName: 'brand_name8',
    locale: 'locale2',
    landingPage: OrderApplicationContextLandingPage.Billing,
    shippingPreference: OrderApplicationContextShippingPreference.SetProvidedAddress,
    userAction: OrderApplicationContextUserAction.Continue,
  },
};
```

