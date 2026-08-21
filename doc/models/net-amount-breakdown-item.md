
# Net Amount Breakdown Item

The net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the merchant holds their funds.

## Structure

`NetAmountBreakdownItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payableAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `convertedAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `exchangeRate` | [`ExchangeRate \| undefined`](../../doc/models/exchange-rate.md) | Optional, Read-only | The exchange rate that determines the amount to convert from one currency to another currency. |

## Example

```ts
import { NetAmountBreakdownItem } from '@paypal/paypal-server-sdk';

const netAmountBreakdownItem: NetAmountBreakdownItem = {
  payableAmount: {
    currencyCode: 'currency_code8',
    value: 'value4',
  },
  convertedAmount: {
    currencyCode: 'currency_code0',
    value: 'value6',
  },
};
```

