
# Capture Subscription Request

The charge amount from the subscriber.

## Structure

`CaptureSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `note` | `string` | Required | The reason or note for the subscription charge.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128`, *Pattern*: `^.*$` |
| `captureType` | [`CaptureType`](../../doc/models/capture-type.md) | Required | The type of capture.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `amount` | [`Money`](../../doc/models/money.md) | Required | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example (as JSON)

```json
{
  "note": "note4",
  "capture_type": "OUTSTANDING_BALANCE",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  }
}
```

