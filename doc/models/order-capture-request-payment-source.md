
# Order Capture Request Payment Source

The payment source definition.

## Structure

`OrderCaptureRequestPaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardRequest \| undefined`](../../doc/models/card-request.md) | Optional | The payment card to use to fund a payment. Can be a credit or debit card.<blockquote><strong>Note:</strong> Passing card number, cvv and expiry directly via the API requires <a href="https://www.pcisecuritystandards.org/pci_security/completing_self_assessment"> PCI SAQ D compliance</a>. <br>*PayPal offers a mechanism by which you do not have to take on the <strong>PCI SAQ D</strong> burden by using hosted fields - refer to <a href="https://developer.paypal.com/docs/checkout/advanced/integrate/">this Integration Guide</a>*.</blockquote> |
| `token` | [`Token \| undefined`](../../doc/models/token.md) | Optional | The tokenized payment source to fund a payment. |
| `paypal` | [`PayPalWallet \| undefined`](../../doc/models/pay-pal-wallet.md) | Optional | A resource that identifies a PayPal Wallet is used for payment. |
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
  "apple_pay": {
    "id": "id0",
    "name": "name0",
    "email_address": "email_address8",
    "phone_number": {
      "national_number": "national_number6"
    },
    "decrypted_token": {
      "transaction_amount": {
        "currency_code": "currency_code6",
        "value": "value2"
      },
      "tokenized_card": {
        "name": "name4",
        "number": "number2",
        "expiry": "expiry2",
        "card_type": "HIPER",
        "type": "UNKNOWN"
      },
      "device_manufacturer_id": "device_manufacturer_id6",
      "payment_data_type": "3DSECURE",
      "payment_data": {
        "cryptogram": "cryptogram6",
        "eci_indicator": "eci_indicator0",
        "emv_data": "emv_data0",
        "pin": "pin4"
      }
    }
  },
  "google_pay": {
    "name": "name8",
    "email_address": "email_address6",
    "phone_number": {
      "country_code": "country_code2",
      "national_number": "national_number6"
    },
    "card": {
      "key1": "val1",
      "key2": "val2"
    },
    "decrypted_token": {
      "message_id": "message_id0",
      "message_expiration": "message_expiration2",
      "payment_method": "CARD",
      "authentication_method": "PAN_ONLY",
      "cryptogram": "cryptogram6",
      "eci_indicator": "eci_indicator0"
    }
  }
}
```

