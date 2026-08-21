
# Payment Source Response

The payment source used to fund the payment.

## Structure

`PaymentSourceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardResponse \| undefined`](../../doc/models/card-response.md) | Optional | The payment card to use to fund a payment. Card can be a credit or debit card. |
| `paypal` | [`PaypalWalletResponse \| undefined`](../../doc/models/paypal-wallet-response.md) | Optional | The PayPal Wallet response. |
| `bancontact` | [`BancontactPaymentObject \| undefined`](../../doc/models/bancontact-payment-object.md) | Optional | Information used to pay Bancontact. |
| `blik` | [`BlikPaymentObject \| undefined`](../../doc/models/blik-payment-object.md) | Optional | Information used to pay using BLIK. |
| `eps` | [`EpsPaymentObject \| undefined`](../../doc/models/eps-payment-object.md) | Optional | Information used to pay using eps. |
| `giropay` | [`GiropayPaymentObject \| undefined`](../../doc/models/giropay-payment-object.md) | Optional | Information needed to pay using giropay. |
| `ideal` | [`IdealPaymentObject \| undefined`](../../doc/models/ideal-payment-object.md) | Optional | Information used to pay using iDEAL. |
| `mybank` | [`MybankPaymentObject \| undefined`](../../doc/models/mybank-payment-object.md) | Optional | Information used to pay using MyBank. |
| `p24` | [`P24PaymentObject \| undefined`](../../doc/models/p24-payment-object.md) | Optional | Information used to pay using P24(Przelewy24). |
| `sofort` | [`SofortPaymentObject \| undefined`](../../doc/models/sofort-payment-object.md) | Optional | Information used to pay using Sofort. |
| `trustly` | [`TrustlyPaymentObject \| undefined`](../../doc/models/trustly-payment-object.md) | Optional | Information needed to pay using Trustly. |
| `applePay` | [`ApplePayPaymentObject \| undefined`](../../doc/models/apple-pay-payment-object.md) | Optional | Information needed to pay using ApplePay. |
| `googlePay` | [`GooglePayWalletResponse \| undefined`](../../doc/models/google-pay-wallet-response.md) | Optional | Google Pay Wallet payment data. |
| `venmo` | [`VenmoWalletResponse \| undefined`](../../doc/models/venmo-wallet-response.md) | Optional | Venmo wallet response. |

## Example

```ts
import {
  CardBrand,
  CardType,
  PaymentSourceResponse,
  PhoneType,
} from '@paypal/paypal-server-sdk';

const paymentSourceResponse: PaymentSourceResponse = {
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
  bancontact: {
    name: 'name0',
    countryCode: 'country_code0',
    bic: 'bic2',
    ibanLastChars: 'iban_last_chars8',
    cardLastDigits: 'card_last_digits4',
  },
  blik: {
    name: 'name2',
    countryCode: 'country_code2',
    email: 'email4',
    oneClick: {
      consumerReference: 'consumer_reference2',
    },
  },
  eps: {
    name: 'name6',
    countryCode: 'country_code6',
    bic: 'bic8',
  },
};
```

