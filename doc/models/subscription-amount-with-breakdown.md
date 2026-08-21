
# Subscription Amount with Breakdown

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

## Example

```ts
import { SubscriptionAmountWithBreakdown } from '@paypal/paypal-server-sdk';

const subscriptionAmountWithBreakdown: SubscriptionAmountWithBreakdown = {
  grossAmount: {
    currencyCode: 'currency_code4',
    value: 'value0',
  },
  totalItemAmount: {
    currencyCode: 'currency_code8',
    value: 'value4',
  },
  feeAmount: {
    currencyCode: 'currency_code2',
    value: 'value4',
  },
  shippingAmount: {
    currencyCode: 'currency_code0',
    value: 'value6',
  },
  taxAmount: {
    currencyCode: 'currency_code2',
    value: 'value8',
  },
  netAmount: {
    currencyCode: 'currency_code6',
    value: 'value2',
  },
};
```

