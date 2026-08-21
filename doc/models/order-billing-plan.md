
# Order Billing Plan

Metadata for merchant-managed recurring billing plans. Valid only during the saved payment method token or billing agreement creation.

## Structure

`OrderBillingPlan`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingCycles` | [`BillingCycle[]`](../../doc/models/billing-cycle.md) | Required | An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `3` |
| `setupFee` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `name` | `string \| undefined` | Optional | Name of the recurring plan.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^[A-Za-z0-9() +',.:-]+$` |

## Example

```ts
import {
  FrequencyIntervalUnit,
  OrderBillingPlan,
  PricingModel,
  TenureType,
} from '@paypal/paypal-server-sdk';

const orderBillingPlan: OrderBillingPlan = {
  billingCycles: [
    {
      tenureType: TenureType.Regular,
      pricingScheme: {
        pricingModel: PricingModel.AutoReload,
        price: {
          currencyCode: 'currency_code8',
          value: 'value4',
        },
        reloadThresholdAmount: {
          currencyCode: 'currency_code0',
          value: 'value6',
        },
      },
      totalCycles: 1,
      sequence: 1,
      startDate: 'start_date6',
      frequency: {
        intervalUnit: FrequencyIntervalUnit.Lifetime,
        intervalCount: 94,
      },
    }
  ],
  setupFee: {
    currencyCode: 'currency_code8',
    value: 'value4',
  },
  name: 'name6',
};
```

