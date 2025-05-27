
# PartialResponseLoggingOptions

Represents the request logging configurations for API calls.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| logBody | `boolean` | Enable response body to log. <br> *Default*: `false` |
| logHeaders | `boolean` | Enable response headers to log. <br> *Default*: `false` |
| headerToInclude | `string[]` | Response Headers to include in logging <br> *Default*: `[]` |
| headerToExclude | `string[]` | Response Headers to exclude in logging <br> *Default*: `[]` |
| headerToWhitelist | `string[]` | Array of headers which values are non-senstive to display in logging. <br> *Default*: `[]` |

