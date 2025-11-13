
# Subscription Amount With Breakdown

The breakdown details for the amount. Includes the gross, tax, fee, and shipping amounts.

## Structure

`SubscriptionAmountWithBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grossAmount` | [`Money`](../../doc/models/money.md) | Required | The currency and amount for a financial transaction, such as a balance or payment due. |
| `totalItemAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `feeAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `shippingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `taxAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `netAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example (as JSON)

```json
{
  "gross_amount": {
    "currency_code": "currency_code4",
    "value": "value0"
  },
  "total_item_amount": {
    "currency_code": "currency_code8",
    "value": "value4"
  },
  "fee_amount": {
    "currency_code": "currency_code2",
    "value": "value4"
  },
  "shipping_amount": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "tax_amount": {
    "currency_code": "currency_code2",
    "value": "value8"
  },
  "net_amount": {
    "currency_code": "currency_code6",
    "value": "value2"
  }
}
```

