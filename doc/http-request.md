
# HttpRequest

Represents an HTTP request.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| method | `GET \| DELETE \| HEAD \| OPTIONS \| POST \| PUT \| PATCH \| LINK \| UNLINK` | HTTP method. |
| headers | `Record<string, string>` | HTTP headers. |
| url | `string` | Request URL including the query part. |
| body | `HttpRequestBody` | HTTP request body. |
| responseType | `text \| stream` | Expected response type. |

## HttpRequestBody

Represents the HTTP request body, which can be of different types.

| Type | Description |
|  --- | --- |
| `HttpRequestTextBody` | Text-based body. |
| `HttpRequestUrlEncodedFormBody` | URL-encoded form data. |
| `HttpRequestMultipartFormBody` | Multipart form data. |
| `HttpRequestStreamBody` | Stream-based body. |

### HttpRequestTextBody

| Name | Type | Description |
|  --- | --- | --- |
| type | `text` | Type identifier. |
| content | `string` | Text content. |

### HttpRequestUrlEncodedFormBody

| Name | Type | Description |
|  --- | --- | --- |
| type | `form` | Type identifier. |
| content | `Array<{ key: string; value: string; }>` | Form data. |

### HttpRequestMultipartFormBody

| Name | Type | Description |
|  --- | --- | --- |
| type | `form-data` | Type identifier. |
| content | `Array<{ key: string; value: string \| FileWrapper; }>` | Multipart form data. |

### HttpRequestStreamBody

| Name | Type | Description |
|  --- | --- | --- |
| type | `stream` | Type identifier. |
| content | `FileWrapper` | Stream content. |

