
# Order Update Callback Error Response

The error details.

## Structure

`OrderUpdateCallbackErrorResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The human-readable, unique name of the error.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `256`, *Pattern*: `^.*$` |
| `message` | `string \| undefined` | Optional | The message that describes the error.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048`, *Pattern*: `^.*$` |
| `details` | [`OrderUpdateCallbackErrorResponseDetails[] \| undefined`](../../doc/models/order-update-callback-error-response-details.md) | Optional | An array of additional details about the error.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `100` |

## Example (as JSON)

```json
{
  "name": "name2",
  "message": "message8",
  "details": [
    {
      "field": "field4",
      "value": "value2",
      "issue": "issue6"
    },
    {
      "field": "field4",
      "value": "value2",
      "issue": "issue6"
    }
  ]
}
```

