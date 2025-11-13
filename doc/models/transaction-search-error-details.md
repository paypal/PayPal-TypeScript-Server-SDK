
# Transaction Search Error Details

The error details. Required for client-side `4XX` errors.

## Structure

`TransactionSearchErrorDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors. |
| `value` | `string \| undefined` | Optional | The value of the field that caused the error. |
| `location` | `string \| undefined` | Optional | The location of the field that caused the error. Value is `body`, `path`, or `query`.<br><br>**Default**: `'body'` |
| `issue` | `string` | Required | The unique, fine-grained application-level error code. |
| `description` | `string \| undefined` | Optional | The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value. |

## Example (as JSON)

```json
{
  "location": "body",
  "issue": "issue2",
  "field": "field0",
  "value": "value8",
  "description": "description6"
}
```

