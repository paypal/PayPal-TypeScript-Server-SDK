
# Balance Information

The Balance information.

## Structure

`BalanceInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `primary` | `boolean \| undefined` | Optional | Optional field representing if the currency is primary currency or not. |
| `totalBalance` | [`Money`](../../doc/models/money.md) | Required | The currency and amount for a financial transaction, such as a balance or payment due. |
| `availableBalance` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `withheldBalance` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example

```ts
import { BalanceInformation } from '@paypal/paypal-server-sdk';

const balanceInformation: BalanceInformation = {
  currency: 'currency2',
  totalBalance: {
    currencyCode: 'currency_code6',
    value: 'value2',
  },
  primary: false,
  availableBalance: {
    currencyCode: 'currency_code8',
    value: 'value4',
  },
  withheldBalance: {
    currencyCode: 'currency_code2',
    value: 'value8',
  },
};
```

