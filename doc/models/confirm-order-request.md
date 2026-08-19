
# Confirm Order Request

Payer confirms the intent to pay for the Order using the provided payment source.

## Structure

`ConfirmOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentSource` | [`PaymentSource`](../../doc/models/payment-source.md) | Required | The payment source definition. |
| `processingInstruction` | [`ProcessingInstruction \| undefined`](../../doc/models/processing-instruction.md) | Optional | The instruction to process an order. |
| `applicationContext` | [`OrderConfirmApplicationContext \| undefined`](../../doc/models/order-confirm-application-context.md) | Optional | Customizes the payer confirmation experience. |

## Example

```ts
import {
  CardBrand,
  ConfirmOrderRequest,
  ExperienceContextShippingPreference,
  PaymentInitiator,
  PhoneType,
  ProcessingInstruction,
  StoredPaymentSourcePaymentType,
  StoredPaymentSourceUsageType,
  TokenType,
} from '@paypal/paypal-server-sdk';

const confirmOrderRequest: ConfirmOrderRequest = {
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
  processingInstruction: ProcessingInstruction.OrderCompleteOnPaymentApproval,
  applicationContext: {
    brandName: 'brand_name8',
    locale: 'locale2',
    returnUrl: 'return_url0',
    cancelUrl: 'cancel_url2',
    storedPaymentSource: {
      paymentInitiator: PaymentInitiator.Customer,
      paymentType: StoredPaymentSourcePaymentType.Recurring,
      usage: StoredPaymentSourceUsageType.First,
      previousNetworkTransactionReference: {
        id: 'id6',
        date: 'date2',
        network: CardBrand.Confidis,
        acquirerReferenceNumber: 'acquirer_reference_number8',
      },
    },
  },
};
```

