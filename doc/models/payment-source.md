
# Payment Source

The payment source definition.

## Structure

`PaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardRequest \| undefined`](../../doc/models/card-request.md) | Optional | The payment card to use to fund a payment. Can be a credit or debit card. Note: Passing card number, cvv and expiry directly via the API requires PCI SAQ D compliance. *PayPal offers a mechanism by which you do not have to take on the PCI SAQ D burden by using hosted fields - refer to this Integration Guide*. |
| `token` | [`Token \| undefined`](../../doc/models/token.md) | Optional | The tokenized payment source to fund a payment. |
| `paypal` | [`PaypalWallet \| undefined`](../../doc/models/paypal-wallet.md) | Optional | A resource that identifies a PayPal Wallet is used for payment. |
| `bancontact` | [`BancontactPaymentRequest \| undefined`](../../doc/models/bancontact-payment-request.md) | Optional | Information needed to pay using Bancontact. |
| `blik` | [`BlikPaymentRequest \| undefined`](../../doc/models/blik-payment-request.md) | Optional | Information needed to pay using BLIK. |
| `eps` | [`EpsPaymentRequest \| undefined`](../../doc/models/eps-payment-request.md) | Optional | Information needed to pay using eps. |
| `giropay` | [`GiropayPaymentRequest \| undefined`](../../doc/models/giropay-payment-request.md) | Optional | Information needed to pay using giropay. |
| `ideal` | [`IdealPaymentRequest \| undefined`](../../doc/models/ideal-payment-request.md) | Optional | Information needed to pay using iDEAL. |
| `mybank` | [`MybankPaymentRequest \| undefined`](../../doc/models/mybank-payment-request.md) | Optional | Information needed to pay using MyBank. |
| `p24` | [`P24PaymentRequest \| undefined`](../../doc/models/p24-payment-request.md) | Optional | Information needed to pay using P24 (Przelewy24). |
| `sofort` | [`SofortPaymentRequest \| undefined`](../../doc/models/sofort-payment-request.md) | Optional | Information needed to pay using Sofort. |
| `trustly` | [`TrustlyPaymentRequest \| undefined`](../../doc/models/trustly-payment-request.md) | Optional | Information needed to pay using Trustly. |
| `applePay` | [`ApplePayRequest \| undefined`](../../doc/models/apple-pay-request.md) | Optional | Information needed to pay using ApplePay. |
| `googlePay` | [`GooglePayRequest \| undefined`](../../doc/models/google-pay-request.md) | Optional | Information needed to pay using Google Pay. |
| `venmo` | [`VenmoWalletRequest \| undefined`](../../doc/models/venmo-wallet-request.md) | Optional | Information needed to pay using Venmo. |

## Example

```ts
import {
  ExperienceContextShippingPreference,
  PaymentSource,
  PhoneType,
  TokenType,
} from '@paypal/paypal-server-sdk';

const paymentSource: PaymentSource = {
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
};
```

