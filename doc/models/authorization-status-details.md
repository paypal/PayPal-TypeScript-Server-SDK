
# Authorization Status Details

The details of the authorized payment status.

## Structure

`AuthorizationStatusDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`AuthorizationIncompleteReason \| undefined`](../../doc/models/authorization-incomplete-reason.md) | Optional | The reason why the authorized status is `PENDING`.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[A-Z_]+$` |

## Example (as JSON)

```json
{
  "reason": "PENDING_REVIEW"
}
```

