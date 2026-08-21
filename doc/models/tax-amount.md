
# Tax Amount

The tax levied by a government on the purchase of goods or services.

## Structure

`TaxAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example

```ts
import { TaxAmount } from '@paypal/paypal-server-sdk';

const taxAmount: TaxAmount = {
  taxAmount: {
    currencyCode: 'currency_code2',
    value: 'value8',
  },
};
```

