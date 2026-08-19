
# Amount Breakdown

The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.

## Structure

`AmountBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemTotal` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `shipping` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `handling` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `taxTotal` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `insurance` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `shippingDiscount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `discount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The discount amount and currency code. For list of supported currencies and decimal precision, see the PayPal REST APIs Currency Codes. |

## Example

```ts
import { AmountBreakdown } from '@paypal/paypal-server-sdk';

const amountBreakdown: AmountBreakdown = {
  itemTotal: {
    currencyCode: 'currency_code0',
    value: 'value6',
  },
  shipping: {
    currencyCode: 'currency_code0',
    value: 'value6',
  },
  handling: {
    currencyCode: 'currency_code2',
    value: 'value8',
  },
  taxTotal: {
    currencyCode: 'currency_code4',
    value: 'value0',
  },
  insurance: {
    currencyCode: 'currency_code2',
    value: 'value8',
  },
};
```

