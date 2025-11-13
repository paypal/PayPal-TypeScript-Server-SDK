
# Search Error

The error details.

## Structure

`SearchError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The human-readable, unique name of the error. |
| `message` | `string` | Required | The message that describes the error. |
| `debugId` | `string` | Required | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional | The information link, or URI, that shows detailed information about this error for the developer. |
| `details` | [`TransactionSearchErrorDetails[] \| undefined`](../../doc/models/transaction-search-error-details.md) | Optional | An array of additional details about the error. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). |
| `totalItems` | `number \| undefined` | Optional | The total number of transactions. Valid only for `RESULTSET_TOO_LARGE`.<br><br>**Constraints**: `>= 0`, `<= 2147483647` |
| `maximumItems` | `number \| undefined` | Optional | The maximum number of transactions. Valid only for `RESULTSET_TOO_LARGE`.<br><br>**Constraints**: `>= 0`, `<= 2147483647` |

## Example (as JSON)

```json
{
  "name": "name8",
  "message": "message8",
  "debug_id": "debug_id6",
  "information_link": "information_link0",
  "details": [
    {
      "field": "field4",
      "value": "value2",
      "location": "location4",
      "issue": "issue6",
      "description": "description0"
    }
  ],
  "links": [
    {
      "href": "href6",
      "rel": "rel0",
      "method": "HEAD"
    }
  ],
  "total_items": 20,
  "maximum_items": 206
}
```

