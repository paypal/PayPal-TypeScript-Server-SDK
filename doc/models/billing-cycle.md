
# Billing Cycle

The billing cycle providing details of the billing frequency, amount, duration and if the billing cycle is a free, discounted or regular billing cycle. The sequence of the billing cycle will be in the following order - free trial billing cycle(s), discounted trial billing cycle(s), regular billing cycle(s).

## Structure

`BillingCycle`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenureType` | [`TenureType`](../../doc/models/tenure-type.md) | Required | The tenure type of the billing cycle identifies if the billing cycle is a trial(free or discounted) or regular billing cycle.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `pricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | The pricing scheme details. |
| `totalCycles` | `number \| undefined` | Optional | The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between 1 and 999 for total_cycles). Regular billing cycles can be executed infinite times (value of 0 for total_cycles) or a finite number of times (value between 1 and 999 for total_cycles).<br><br>**Default**: `1`<br><br>**Constraints**: `>= 0`, `<= 999` |
| `sequence` | `number \| undefined` | Optional | The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1`, `<= 3` |
| `startDate` | `string \| undefined` | Optional | The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])$` |
| `frequency` | [`CycleFrequency \| undefined`](../../doc/models/cycle-frequency.md) | Optional | The frequency of the terms reset cycle. |

## Example

```ts
import {
  BillingCycle,
  FrequencyIntervalUnit,
  PricingModel,
  TenureType,
} from '@paypal/paypal-server-sdk';

const billingCycle: BillingCycle = {
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
  startDate: 'start_date8',
  frequency: {
    intervalUnit: FrequencyIntervalUnit.Lifetime,
    intervalCount: 94,
  },
};
```

