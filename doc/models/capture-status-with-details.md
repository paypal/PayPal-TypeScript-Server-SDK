
# Capture Status With Details

The status and status details of a captured payment.

## Structure

`CaptureStatusWithDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`CaptureStatus \| undefined`](../../doc/models/capture-status.md) | Optional | The status of the captured payment. |
| `statusDetails` | [`CaptureStatusDetails \| undefined`](../../doc/models/capture-status-details.md) | Optional | The details of the captured payment status. |

## Example (as JSON)

```json
{
  "status": "COMPLETED",
  "status_details": {
    "reason": "VERIFICATION_REQUIRED"
  }
}
```

