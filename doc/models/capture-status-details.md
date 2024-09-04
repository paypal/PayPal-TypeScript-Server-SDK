
# Capture Status Details

The details of the captured payment status.

## Structure

`CaptureStatusDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`CaptureIncompleteReason \| undefined`](../../doc/models/capture-incomplete-reason.md) | Optional | The reason why the captured payment status is `PENDING` or `DENIED`.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[A-Z_]+$` |

## Example (as JSON)

```json
{
  "reason": "BUYER_COMPLAINT"
}
```

