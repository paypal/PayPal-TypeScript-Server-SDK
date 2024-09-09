
# Net Amount Breakdown Item

The net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the merchant holds their funds.

## Structure

`NetAmountBreakdownItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payableAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `convertedAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `exchangeRate` | [`ExchangeRate \| undefined`](../../doc/models/exchange-rate.md) | Optional | The exchange rate that determines the amount to convert from one currency to another currency. |

## Example (as JSON)

```json
{
  "payable_amount": {
    "currency_code": "currency_code8",
    "value": "value4"
  },
  "converted_amount": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "exchange_rate": {
    "source_currency": "source_currency4",
    "target_currency": "target_currency6",
    "value": "value6"
  }
}
```

