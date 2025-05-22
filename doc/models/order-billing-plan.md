
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
  "setup_fee": {
    "currency_code": "currency_code8",
    "value": "value4"
  },
  "name": "name4"
}
```

