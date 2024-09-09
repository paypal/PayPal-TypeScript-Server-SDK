
# Custom Error

The error details.

## Structure

`CustomError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The human-readable, unique name of the error. |
| `message` | `string` | Required | The message that describes the error. |
| `debugId` | `string` | Required | The PayPal internal ID. Used for correlation purposes. |
| `details` | [`ErrorDetails[] \| undefined`](../../doc/models/error-details.md) | Optional | An array of additional details about the error. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links). |

## Example (as JSON)

```json
{
  "name": "name4",
  "message": "message4",
  "debug_id": "debug_id0",
  "details": [
    {
      "field": "field4",
      "value": "value2",
      "location": "location4",
      "issue": "issue6",
      "links": [
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        },
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        }
      ],
      "description": "description0"
    },
    {
      "field": "field4",
      "value": "value2",
      "location": "location4",
      "issue": "issue6",
      "links": [
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        },
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        }
      ],
      "description": "description0"
    }
  ],
  "links": [
    {
      "href": "href6",
      "rel": "rel0",
      "method": "HEAD"
    },
    {
      "href": "href6",
      "rel": "rel0",
      "method": "HEAD"
    }
  ]
}
```

