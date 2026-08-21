
# O Auth Provider Error

OAuth 2 Authorization endpoint exception.

## Structure

`OAuthProviderError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | [`OAuthProviderError`](../../doc/models/o-auth-provider-error-1.md) | Required | Gets or sets error code. |
| `errorDescription` | `string \| undefined` | Optional | Gets or sets human-readable text providing additional information on error.<br>Used to assist the client developer in understanding the error that occurred. |
| `errorUri` | `string \| undefined` | Optional | Gets or sets a URI identifying a human-readable web page with information about the error, used to provide the client developer with additional information about the error. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof OAuthProviderError) {
    console.log(error.result);
  }
}
```

