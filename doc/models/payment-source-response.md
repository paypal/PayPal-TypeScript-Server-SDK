
# Payment Source Response

The payment source used to fund the payment.

## Structure

`PaymentSourceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardResponse \| undefined`](../../doc/models/card-response.md) | Optional | The payment card to use to fund a payment. Card can be a credit or debit card. |
| `paypal` | [`PayPalWalletResponse \| undefined`](../../doc/models/pay-pal-wallet-response.md) | Optional | The PayPal Wallet response. |
| `bancontact` | [`BancontactPaymentObject \| undefined`](../../doc/models/bancontact-payment-object.md) | Optional | Information used to pay Bancontact. |
| `blik` | [`BLIKPaymentObject \| undefined`](../../doc/models/blik-payment-object.md) | Optional | Information used to pay using BLIK. |
| `eps` | [`EPSPaymentObject \| undefined`](../../doc/models/eps-payment-object.md) | Optional | Information used to pay using eps. |
| `giropay` | [`GiropayPaymentObject \| undefined`](../../doc/models/giropay-payment-object.md) | Optional | Information needed to pay using giropay. |
| `ideal` | [`IDEALPaymentObject \| undefined`](../../doc/models/ideal-payment-object.md) | Optional | Information used to pay using iDEAL. |
| `mybank` | [`MyBankPaymentObject \| undefined`](../../doc/models/my-bank-payment-object.md) | Optional | Information used to pay using MyBank. |
| `p24` | [`P24PaymentObject \| undefined`](../../doc/models/p24-payment-object.md) | Optional | Information used to pay using P24(Przelewy24). |
| `sofort` | [`SofortPaymentObject \| undefined`](../../doc/models/sofort-payment-object.md) | Optional | Information used to pay using Sofort. |
| `trustly` | [`TrustlyPaymentObject \| undefined`](../../doc/models/trustly-payment-object.md) | Optional | Information needed to pay using Trustly. |
| `applePay` | [`ApplePayPaymentObject \| undefined`](../../doc/models/apple-pay-payment-object.md) | Optional | Information needed to pay using ApplePay. |
| `googlePay` | [`GooglePayWalletResponse \| undefined`](../../doc/models/google-pay-wallet-response.md) | Optional | Google Pay Wallet payment data. |
| `venmo` | [`VenmoWalletResponse \| undefined`](../../doc/models/venmo-wallet-response.md) | Optional | Venmo wallet response. |

## Example (as JSON)

```json
{
  "card": {
    "name": "name6",
    "last_digits": "last_digits0",
    "brand": "SYNCHRONY",
    "available_networks": [
      "DELTA"
    ],
    "type": "UNKNOWN"
  },
  "paypal": {
    "email_address": "email_address0",
    "account_id": "account_id4",
    "account_status": "VERIFIED",
    "name": {
      "given_name": "given_name2",
      "surname": "surname8"
    },
    "phone_type": "FAX"
  },
  "bancontact": {
    "name": "name0",
    "country_code": "country_code0",
    "bic": "bic2",
    "iban_last_chars": "iban_last_chars8",
    "card_last_digits": "card_last_digits4"
  },
  "blik": {
    "name": "name2",
    "country_code": "country_code2",
    "email": "email4",
    "one_click": {
      "consumer_reference": "consumer_reference2"
    }
  },
  "eps": {
    "name": "name6",
    "country_code": "country_code6",
    "bic": "bic8"
  }
}
```

