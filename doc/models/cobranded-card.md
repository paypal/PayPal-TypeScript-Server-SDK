
# Cobranded Card

Details about the merchant cobranded card used for order purchase.

## Structure

`CobrandedCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `labels` | `string[] \| undefined` | Optional | Array of labels for the cobranded card.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `25`, *Minimum Length*: `1`, *Maximum Length*: `256` |
| `payee` | [`PayeeBase \| undefined`](../../doc/models/payee-base.md) | Optional | The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee. |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example (as JSON)

```json
{
  "labels": [
    "labels2",
    "labels3"
  ],
  "payee": {
    "email_address": "email_address4",
    "merchant_id": "merchant_id6"
  },
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  }
}
```

