
# ApiResponse

Represents the result of an API call, including response metadata and the returned data of type `T`.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | [`HttpRequest`](../doc/http-request.md) | Original request that resulted in this response. |
| statusCode | `number` | Response status codee. |
| headers | `Record<string, string>` | Response headers. |
| result | `T` | Response data. |
| body | `string \| Blob \| NodeJS.ReadableStream` | Original body from the response. |

## Usage Example

```ts
try {
  const exampleController = new ExampleController(client);
  const response = exampleController.getExampleType(body);
  console.log('Success! Result:', response.result);
  console.log('Status Code:', response.statusCode);
} catch (error) {
  if (error instanceof ApiError) {
    console.log('Error:', error.message);
    console.log('Result:', error.body);
    console.log('Status Code:', error.statusCode);
  }
}
```

