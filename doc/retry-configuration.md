
# RetryConfiguration

Represents the retry configurations for API calls.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| maxNumberOfRetries | `number` | Maximum number of retries. <br> *Default*: `0` |
| retryOnTimeout | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| retryInterval | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| maximumRetryWaitTime | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| backoffFactor | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| httpStatusCodesToRetry | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| httpMethodsToRetry | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

