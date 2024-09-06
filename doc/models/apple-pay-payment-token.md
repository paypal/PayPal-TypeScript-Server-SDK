
# Apple Pay Payment Token

A resource representing a response for Apple Pay.

## Structure

`ApplePayPaymentToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`ApplePayCard \| undefined`](../../doc/models/apple-pay-card.md) | Optional | The payment card to be used to fund a payment. Can be a credit or debit card. |

## Example (as JSON)

```json
{
  "card": {
    "name": "name6",
    "last_digits": "last_digits0",
    "type": "UNKNOWN",
    "brand": "SYNCHRONY",
    "billing_address": {
      "address_line_1": "address_line_12",
      "address_line_2": "address_line_28",
      "admin_area_2": "admin_area_28",
      "admin_area_1": "admin_area_14",
      "postal_code": "postal_code0",
      "country_code": "country_code8"
    }
  }
}
```

