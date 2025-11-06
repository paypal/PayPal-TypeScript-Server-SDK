
# Plan Details

The plan details.

## Structure

`PlanDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string \| undefined` | Optional | The ID for the product.<br><br>**Constraints**: *Minimum Length*: `22`, *Maximum Length*: `22`, *Pattern*: `^PROD-[A-Z0-9]*$` |
| `name` | `string \| undefined` | Optional | The plan name.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.*$` |
| `description` | `string \| undefined` | Optional | The detailed description of the plan.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.*$` |
| `billingCycles` | [`SubscriptionBillingCycle[] \| undefined`](../../doc/models/subscription-billing-cycle.md) | Optional | An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `12` |
| `paymentPreferences` | [`PaymentPreferences \| undefined`](../../doc/models/payment-preferences.md) | Optional | The payment preferences for a subscription. |
| `merchantPreferences` | [`MerchantPreferences \| undefined`](../../doc/models/merchant-preferences.md) | Optional | The merchant preferences for a subscription. |
| `taxes` | [`Taxes \| undefined`](../../doc/models/taxes.md) | Optional | The tax details. |
| `quantitySupported` | `boolean \| undefined` | Optional | Indicates whether you can subscribe to this plan by providing a quantity for the goods or service.<br><br>**Default**: `false` |

## Example (as JSON)

```json
{
  "quantity_supported": false,
  "product_id": "product_id6",
  "name": "name8",
  "description": "description2",
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
      "frequency": {
        "interval_unit": "DAY",
        "interval_count": 94
      },
      "tenure_type": "REGULAR",
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
      "frequency": {
        "interval_unit": "DAY",
        "interval_count": 94
      },
      "tenure_type": "REGULAR",
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
      "frequency": {
        "interval_unit": "DAY",
        "interval_count": 94
      },
      "tenure_type": "REGULAR",
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
  }
}
```

