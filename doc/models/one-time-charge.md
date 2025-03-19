
# One Time Charge

The one-time charge info at the time of checkout.

## Structure

`OneTimeCharge`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `setupFee` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `shippingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `taxes` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `productPrice` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `subtotal` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `totalAmount` | [`Money`](../../doc/models/money.md) | Required | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example (as JSON)

```json
{
  "setup_fee": {
    "currency_code": "currency_code8",
    "value": "value4"
  },
  "shipping_amount": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "taxes": {
    "currency_code": "currency_code6",
    "value": "value2"
  },
  "product_price": {
    "currency_code": "currency_code6",
    "value": "value2"
  },
  "subtotal": {
    "currency_code": "currency_code2",
    "value": "value8"
  },
  "total_amount": {
    "currency_code": "currency_code2",
    "value": "value8"
  }
}
```

