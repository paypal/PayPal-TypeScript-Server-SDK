
# Payment Source

The payment source definition.

## Structure

`PaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardRequest \| undefined`](../../doc/models/card-request.md) | Optional | The payment card to use to fund a payment. Can be a credit or debit card.<blockquote><strong>Note:</strong> Passing card number, cvv and expiry directly via the API requires <a href="https://www.pcisecuritystandards.org/pci_security/completing_self_assessment"> PCI SAQ D compliance</a>. <br>*PayPal offers a mechanism by which you do not have to take on the <strong>PCI SAQ D</strong> burden by using hosted fields - refer to <a href="https://developer.paypal.com/docs/checkout/advanced/integrate/">this Integration Guide</a>*.</blockquote> |
| `token` | [`Token \| undefined`](../../doc/models/token.md) | Optional | The tokenized payment source to fund a payment. |
| `paypal` | [`PayPalWallet \| undefined`](../../doc/models/pay-pal-wallet.md) | Optional | A resource that identifies a PayPal Wallet is used for payment. |
| `bancontact` | [`BancontactPaymentRequest \| undefined`](../../doc/models/bancontact-payment-request.md) | Optional | Information needed to pay using Bancontact. |
| `blik` | [`BLIKPaymentRequest \| undefined`](../../doc/models/blik-payment-request.md) | Optional | Information needed to pay using BLIK. |
| `eps` | [`EPSPaymentRequest \| undefined`](../../doc/models/eps-payment-request.md) | Optional | Information needed to pay using eps. |
| `giropay` | [`GiropayPaymentRequest \| undefined`](../../doc/models/giropay-payment-request.md) | Optional | Information needed to pay using giropay. |
| `ideal` | [`IDEALPaymentRequest \| undefined`](../../doc/models/ideal-payment-request.md) | Optional | Information needed to pay using iDEAL. |
| `mybank` | [`MyBankPaymentRequest \| undefined`](../../doc/models/my-bank-payment-request.md) | Optional | Information needed to pay using MyBank. |
| `p24` | [`P24PaymentRequest \| undefined`](../../doc/models/p24-payment-request.md) | Optional | Information needed to pay using P24 (Przelewy24). |
| `sofort` | [`SofortPaymentRequest \| undefined`](../../doc/models/sofort-payment-request.md) | Optional | Information needed to pay using Sofort. |
| `trustly` | [`TrustlyPaymentRequest \| undefined`](../../doc/models/trustly-payment-request.md) | Optional | Information needed to pay using Trustly. |
| `applePay` | [`ApplePayRequest \| undefined`](../../doc/models/apple-pay-request.md) | Optional | Information needed to pay using ApplePay. |
| `googlePay` | [`GooglePayRequest \| undefined`](../../doc/models/google-pay-request.md) | Optional | Information needed to pay using Google Pay. |
| `venmo` | [`VenmoWalletRequest \| undefined`](../../doc/models/venmo-wallet-request.md) | Optional | Information needed to pay using Venmo. |

## Example (as JSON)

```json
{
  "card": {
    "name": "name6",
    "number": "number6",
    "expiry": "expiry4",
    "security_code": "security_code8",
    "billing_address": {
      "address_line_1": "address_line_12",
      "address_line_2": "address_line_28",
      "admin_area_2": "admin_area_28",
      "admin_area_1": "admin_area_14",
      "postal_code": "postal_code0",
      "country_code": "country_code8"
    }
  },
  "token": {
    "id": "id6",
    "type": "BILLING_AGREEMENT"
  },
  "paypal": {
    "vault_id": "vault_id0",
    "email_address": "email_address0",
    "name": {
      "given_name": "given_name2",
      "surname": "surname8"
    },
    "phone": {
      "phone_type": "OTHER",
      "phone_number": {
        "national_number": "national_number6"
      }
    },
    "birth_date": "birth_date8"
  },
  "bancontact": {
    "name": "name0",
    "country_code": "country_code0",
    "experience_context": {
      "brand_name": "brand_name2",
      "locale": "locale6",
      "shipping_preference": "NO_SHIPPING",
      "return_url": "return_url4",
      "cancel_url": "cancel_url6"
    }
  },
  "blik": {
    "name": "name2",
    "country_code": "country_code2",
    "email": "email4",
    "experience_context": {
      "brand_name": "brand_name2",
      "locale": "locale6",
      "shipping_preference": "NO_SHIPPING",
      "return_url": "return_url4",
      "cancel_url": "cancel_url6"
    },
    "level_0": {
      "auth_code": "auth_code8"
    },
    "one_click": {
      "auth_code": "auth_code0",
      "consumer_reference": "consumer_reference2",
      "alias_label": "alias_label6",
      "alias_key": "alias_key4"
    }
  }
}
```

