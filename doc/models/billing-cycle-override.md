
# Billing Cycle Override

The billing cycle details to override at subscription level. The subscription billing cycle definition has to adhere to the plan billing cycle definition.

## Structure

`BillingCycleOverride`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingScheme` | [`SubscriptionPricingScheme \| undefined`](../../doc/models/subscription-pricing-scheme.md) | Optional | The pricing scheme details. |
| `sequence` | `number` | Required | The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle.<br><br>**Constraints**: `>= 1`, `<= 99` |
| `totalCycles` | `number \| undefined` | Optional | The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between 1 and 999 for total_cycles). Regular billing cycles can be executed infinite times (value of 0 for total_cycles) or a finite number of times (value between 1 and 999 for total_cycles).<br><br>**Constraints**: `>= 0`, `<= 999` |

## Example (as JSON)

```json
{
  "pricing_scheme": {
    "version": 10,
    "fixed_price": {
      "currency_code": "currency_code4",
      "value": "value0"
    },
    "pricing_model": "VOLUME",
    "tiers": [
      {
        "starting_quantity": "starting_quantity8",
        "ending_quantity": "ending_quantity6",
        "amount": {
          "currency_code": "currency_code6",
          "value": "value0"
        }
      },
      {
        "starting_quantity": "starting_quantity8",
        "ending_quantity": "ending_quantity6",
        "amount": {
          "currency_code": "currency_code6",
          "value": "value0"
        }
      },
      {
        "starting_quantity": "starting_quantity8",
        "ending_quantity": "ending_quantity6",
        "amount": {
          "currency_code": "currency_code6",
          "value": "value0"
        }
      }
    ],
    "create_time": "create_time4"
  },
  "sequence": 58,
  "total_cycles": 248
}
```

