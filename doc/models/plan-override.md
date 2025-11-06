
# Plan Override

An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object.

## Structure

`PlanOverride`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingCycles` | [`BillingCycleOverride[] \| undefined`](../../doc/models/billing-cycle-override.md) | Optional | An array of billing cycles for trial billing and regular billing. The subscription billing cycle definition has to adhere to the plan billing cycle definition.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `12` |
| `paymentPreferences` | [`PaymentPreferencesOverride \| undefined`](../../doc/models/payment-preferences-override.md) | Optional | The payment preferences to override at subscription level. |
| `taxes` | [`TaxesOverride \| undefined`](../../doc/models/taxes-override.md) | Optional | The tax details. |

## Example (as JSON)

```json
{
  "billing_cycles": [
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
      "sequence": 8,
      "total_cycles": 198
    },
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
      "sequence": 8,
      "total_cycles": 198
    },
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
      "sequence": 8,
      "total_cycles": 198
    }
  ],
  "payment_preferences": {
    "auto_bill_outstanding": false,
    "setup_fee": {
      "currency_code": "currency_code8",
      "value": "value4"
    },
    "setup_fee_failure_action": "CONTINUE",
    "payment_failure_threshold": 104
  },
  "taxes": {
    "percentage": "percentage8",
    "inclusive": false
  }
}
```

