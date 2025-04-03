
# Plan

The merchant level Recurring Billing plan metadata for the Billing Agreement.

## Structure

`Plan`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingCycles` | [`BillingCycle[]`](../../doc/models/billing-cycle.md) | Required | An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `3` |
| `product` | `unknown \| undefined` | Optional | Product details associated with any one-time product purchase. |
| `oneTimeCharges` | [`OneTimeCharge`](../../doc/models/one-time-charge.md) | Required | The one-time charge info at the time of checkout. |
| `name` | `string \| undefined` | Optional | Name of the recurring plan.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^[A-Za-z0-9() +',.:-]+$` |

## Example (as JSON)

```json
{
  "billing_cycles": [
    {
      "tenure_type": "REGULAR",
      "total_cycles": 1,
      "sequence": 1,
      "pricing_scheme": {
        "price": {
          "currency_code": "currency_code8",
          "value": "value4"
        },
        "pricing_model": "AUTO_RELOAD",
        "reload_threshold_amount": {
          "currency_code": "currency_code0",
          "value": "value6"
        }
      },
      "frequency": {
        "key1": "val1",
        "key2": "val2"
      },
      "start_date": "start_date6"
    }
  ],
  "one_time_charges": {
    "setup_fee": {
      "currency_code": "currency_code8",
      "value": "value4"
    },
    "shipping_amount": {
      "currency_code": "currency_code0",
      "value": "value6"
    },
    "taxes": {
      "currency_code": "currency_code6",
      "value": "value2"
    },
    "product_price": {
      "currency_code": "currency_code6",
      "value": "value2"
    },
    "subtotal": {
      "currency_code": "currency_code2",
      "value": "value8"
    },
    "total_amount": {
      "currency_code": "currency_code2",
      "value": "value8"
    }
  },
  "product": {
    "key1": "val1",
    "key2": "val2"
  },
  "name": "name8"
}
```

