# Amount Breakdown

The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.

## Structure

`AmountBreakdown`

## Fields

| Name               | Type                                              | Tags     | Description                                                                            |
| ------------------ | ------------------------------------------------- | -------- | -------------------------------------------------------------------------------------- |
| `itemTotal`        | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `shipping`         | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `handling`         | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `taxTotal`         | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `insurance`        | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `shippingDiscount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `discount`         | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example (as JSON)

```json
{
  "itemTotal": {
    "currencyCode": "currencyCode0",
    "value": "value6"
  },
  "shipping": {
    "currencyCode": "currencyCode0",
    "value": "value6"
  },
  "handling": {
    "currencyCode": "currencyCode2",
    "value": "value8"
  },
  "taxTotal": {
    "currencyCode": "currencyCode4",
    "value": "value0"
  },
  "insurance": {
    "currencyCode": "currencyCode2",
    "value": "value8"
  }
}
```
