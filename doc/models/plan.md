
# Plan

The merchant level Recurring Billing plan metadata for the Billing Agreement.

## Structure

`Plan`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingCycles` | [`BillingCycle[]`](../../doc/models/billing-cycle.md) | Required | An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `3` |
| `oneTimeCharges` | [`OneTimeCharge`](../../doc/models/one-time-charge.md) | Required | The one-time charge info at the time of checkout. |
| `name` | `string \| undefined` | Optional | Name of the recurring plan.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^[A-Za-z0-9() +',.:-]+$` |

## Example

```ts
import {
  FrequencyIntervalUnit,
  Plan,
  PricingModel,
  TenureType,
} from '@paypal/paypal-server-sdk';

const plan: Plan = {
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
  oneTimeCharges: {
    totalAmount: {
      currencyCode: 'currency_code2',
      value: 'value8',
    },
    setupFee: {
      currencyCode: 'currency_code8',
      value: 'value4',
    },
    shippingAmount: {
      currencyCode: 'currency_code0',
      value: 'value6',
    },
    taxes: {
      currencyCode: 'currency_code6',
      value: 'value2',
    },
    productPrice: {
      currencyCode: 'currency_code6',
      value: 'value2',
    },
    subtotal: {
      currencyCode: 'currency_code2',
      value: 'value8',
    },
  },
  name: 'name4',
};
```

