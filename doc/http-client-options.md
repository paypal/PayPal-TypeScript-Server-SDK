
# HttpClientOptions

Represents the HTTP client configurations for API calls.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| timeout | `number` | Timeout in milliseconds. |
| httpAgent | `any` | Custom http agent to be used when performing http requests. |
| httpsAgent | `any` | Custom https agent to be used when performing http requests. |
| retryConfig | [`Partial<RetryConfiguration>`](../doc/retry-configuration.md) | Configurations to retry requests. |

