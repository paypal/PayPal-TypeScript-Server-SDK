
# Subscription Billing Cycle

The billing cycle details.

## Structure

`SubscriptionBillingCycle`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingScheme` | [`SubscriptionPricingScheme \| undefined`](../../doc/models/subscription-pricing-scheme.md) | Optional | The pricing scheme details. |
| `frequency` | [`Frequency`](../../doc/models/frequency.md) | Required | The frequency of the billing cycle. |
| `tenureType` | [`TenureType`](../../doc/models/tenure-type.md) | Required | The tenure type of the billing cycle. In case of a plan having trial cycle, only 2 trial cycles are allowed per plan.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `sequence` | `number` | Required | The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle.<br><br>**Constraints**: `>= 1`, `<= 99` |
| `totalCycles` | `number \| undefined` | Optional | The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between 1 and 999 for total_cycles). Regular billing cycles can be executed infinite times (value of 0 for total_cycles) or a finite number of times (value between 1 and 999 for total_cycles).<br><br>**Default**: `1`<br><br>**Constraints**: `>= 0`, `<= 999` |

## Example

```ts
import {
  IntervalUnit,
  SubscriptionBillingCycle,
  SubscriptionPricingModel,
  TenureType,
} from '@paypal/paypal-server-sdk';

const subscriptionBillingCycle: SubscriptionBillingCycle = {
  frequency: {
    intervalUnit: IntervalUnit.Day,
    intervalCount: 1,
  },
  tenureType: TenureType.Regular,
  sequence: 99,
  pricingScheme: {
    fixedPrice: {
      currencyCode: 'currency_code4',
      value: 'value0',
    },
    pricingModel: SubscriptionPricingModel.Volume,
    tiers: [
      {
        startingQuantity: 'starting_quantity8',
        amount: {
          currencyCode: 'currency_code6',
          value: 'value0',
        },
        endingQuantity: 'ending_quantity6',
      },
      {
        startingQuantity: 'starting_quantity8',
        amount: {
          currencyCode: 'currency_code6',
          value: 'value0',
        },
        endingQuantity: 'ending_quantity6',
      },
      {
        startingQuantity: 'starting_quantity8',
        amount: {
          currencyCode: 'currency_code6',
          value: 'value0',
        },
        endingQuantity: 'ending_quantity6',
      }
    ],
    createTime: 'create_time4',
  },
  totalCycles: 1,
};
```

