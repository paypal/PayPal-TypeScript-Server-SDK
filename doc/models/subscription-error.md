
# Subscription Error

The error details.

## Structure

`SubscriptionError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The human-readable, unique name of the error. |
| `message` | `string` | Required | The message that describes the error. |
| `debugId` | `string` | Required | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional, Read-only | The information link, or URI, that shows detailed information about this error for the developer. |
| `details` | [`ErrorDetails[] \| undefined`](../../doc/models/error-details.md) | Optional | An array of additional details about the error. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of request-related [HATEOAS links](https://developer.paypal.com/api/rest/responses/#hateoas-links). |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SubscriptionError) {
    console.log(error.result);
  }
}
```

