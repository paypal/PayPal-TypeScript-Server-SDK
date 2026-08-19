
# Order Authorize Response Payment Source

The payment source used to fund the payment.

## Structure

`OrderAuthorizeResponsePaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardResponse \| undefined`](../../doc/models/card-response.md) | Optional | The payment card to use to fund a payment. Card can be a credit or debit card. |
| `paypal` | [`PaypalWalletResponse \| undefined`](../../doc/models/paypal-wallet-response.md) | Optional | The PayPal Wallet response. |
| `applePay` | [`ApplePayPaymentObject \| undefined`](../../doc/models/apple-pay-payment-object.md) | Optional | Information needed to pay using ApplePay. |
| `googlePay` | [`GooglePayWalletResponse \| undefined`](../../doc/models/google-pay-wallet-response.md) | Optional | Google Pay Wallet payment data. |
| `venmo` | [`VenmoWalletResponse \| undefined`](../../doc/models/venmo-wallet-response.md) | Optional | Venmo wallet response. |

## Example

```ts
import {
  CardBrand,
  CardType,
  OrderAuthorizeResponsePaymentSource,
  PhoneType,
} from '@paypal/paypal-server-sdk';

const orderAuthorizeResponsePaymentSource: OrderAuthorizeResponsePaymentSource = {
  card: {
    name: 'name6',
    brand: CardBrand.CbNationale,
    type: CardType.Unknown,
  },
  paypal: {
    emailAddress: 'email_address0',
    accountId: 'account_id4',
    name: {
      givenName: 'given_name2',
      surname: 'surname8',
    },
    phoneType: PhoneType.Fax,
  },
  applePay: {
    id: 'id0',
    token: 'token6',
    name: 'name0',
    emailAddress: 'email_address8',
    phoneNumber: {
      nationalNumber: 'national_number6',
    },
  },
  googlePay: {
    name: 'name8',
    emailAddress: 'email_address6',
    phoneNumber: {
      countryCode: 'country_code2',
      nationalNumber: 'national_number6',
    },
    card: {
      name: 'name6',
      type: CardType.Unknown,
      brand: CardBrand.CbNationale,
      billingAddress: {
        countryCode: 'country_code8',
        addressLine1: 'address_line_12',
        addressLine2: 'address_line_28',
        adminArea2: 'admin_area_28',
        adminArea1: 'admin_area_14',
        postalCode: 'postal_code0',
      },
    },
  },
  venmo: {
    emailAddress: 'email_address4',
    accountId: 'account_id8',
    userName: 'user_name2',
    name: {
      givenName: 'given_name2',
      surname: 'surname8',
    },
    phoneNumber: {
      nationalNumber: 'national_number6',
    },
  },
};
```

