
# Payment Preferences

The payment preferences for a subscription.

## Structure

`PaymentPreferences`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoBillOutstanding` | `boolean \| undefined` | Optional | Indicates whether to automatically bill the outstanding amount in the next billing cycle.<br><br>**Default**: `true` |
| `setupFee` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `setupFeeFailureAction` | [`SetupFeeFailureAction \| undefined`](../../doc/models/setup-fee-failure-action.md) | Optional | The action to take on the subscription if the initial payment for the setup fails.<br><br>**Default**: `SetupFeeFailureAction.Cancel`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `paymentFailureThreshold` | `number \| undefined` | Optional | The maximum number of payment failures before a subscription is suspended. For example, if `payment_failure_threshold` is `2`, the subscription automatically updates to the `SUSPEND` state if two consecutive payments fail.<br><br>**Default**: `0`<br><br>**Constraints**: `>= 0`, `<= 999` |

## Example (as JSON)

```json
{
  "auto_bill_outstanding": true,
  "setup_fee_failure_action": "CANCEL",
  "payment_failure_threshold": 0,
  "setup_fee": {
    "currency_code": "currency_code8",
    "value": "value4"
  }
}
```

