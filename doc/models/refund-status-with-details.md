
# Refund Status With Details

The refund status with details.

## Structure

`RefundStatusWithDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`RefundStatus \| undefined`](../../doc/models/refund-status.md) | Optional | The status of the refund. |
| `statusDetails` | [`RefundStatusDetails \| undefined`](../../doc/models/refund-status-details.md) | Optional | The details of the refund status. |

## Example (as JSON)

```json
{
  "status": "PENDING",
  "status_details": {
    "reason": "ECHECK"
  }
}
```

