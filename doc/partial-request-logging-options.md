
# PartialRequestLoggingOptions

Represents the request logging configurations for API calls.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| logBody | `boolean` | Enable request body to log. <br> *Default*: `false` |
| logHeaders | `boolean` | Enable request headers to log. <br> *Default*: `false` |
| headerToInclude | `string[]` | Headers to include in logging <br> *Default*: `[]` |
| headerToExclude | `string[]` | Headers to exclude in logging <br> *Default*: `[]` |
| headerToWhitelist | `string[]` | Array of headers which values are non-senstive to display in logging. <br> *Default*: `[]` |
| includeQueryInPath | `boolean` | Include query params in logging <br> *Default*: `false` |

