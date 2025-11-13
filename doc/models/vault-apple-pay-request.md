
# Vault Apple Pay Request

A resource representing a request to vault Apple Pay.

## Structure

`VaultApplePayRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | Encrypted Apple Pay token, containing card information. This token would be base64 encoded.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10000`, *Pattern*: `^.*$` |
| `card` | [`ApplePayRequestCard \| undefined`](../../doc/models/apple-pay-request-card.md) | Optional | The payment card to be used to fund a payment. Can be a credit or debit card. |

## Example (as JSON)

```json
{
  "token": "token4",
  "card": {
    "type": "UNKNOWN",
    "brand": "CB_NATIONALE",
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

