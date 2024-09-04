
# Authorization Status With Details

The status fields and status details for an authorized payment.

## Structure

`AuthorizationStatusWithDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`AuthorizationStatus \| undefined`](../../doc/models/authorization-status.md) | Optional | The status for the authorized payment. |
| `statusDetails` | [`AuthorizationStatusDetails \| undefined`](../../doc/models/authorization-status-details.md) | Optional | The details of the authorized payment status. |

## Example (as JSON)

```json
{
  "status": "VOIDED",
  "status_details": {
    "reason": "PENDING_REVIEW"
  }
}
```

