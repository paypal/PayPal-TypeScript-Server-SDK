
# Exchange Rate

The exchange rate that determines the amount to convert from one currency to another currency.

## Structure

`ExchangeRate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sourceCurrency` | `string \| undefined` | Optional | The [three-character ISO-4217 currency code](https://developer.paypal.com/api/rest/reference/currency-codes/) that identifies the currency.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `targetCurrency` | `string \| undefined` | Optional | The [three-character ISO-4217 currency code](https://developer.paypal.com/api/rest/reference/currency-codes/) that identifies the currency.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `string \| undefined` | Optional | The target currency amount. Equivalent to one unit of the source currency. Formatted as integer or decimal value with one to 15 digits to the right of the decimal point. |

## Example

```ts
import { ExchangeRate } from '@paypal/paypal-server-sdk';

const exchangeRate: ExchangeRate = {
  sourceCurrency: 'source_currency6',
  targetCurrency: 'target_currency8',
  value: 'value8',
};
```

