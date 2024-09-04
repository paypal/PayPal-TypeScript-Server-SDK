
# PartialLoggingOptions

Represents the logging configurations for API calls.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| `logger` | [`LoggerInterface`](logger-interface.md) | logger to be configured. <br> *Default*: `new ConsoleLogger()` |
| `logLevel` | `LogLevel` | Set log level. <br> *Default*: `LogLevel.Info` |
| `maskSensitiveHeaders` | `boolean` | Enable masking senstive headers <br> *Default*: `true` |
| `logRequest` | [`PartialHttpRequestLoggingOptions`](partial-request-logging-options.md) | Set request information options <br> *Default*: `{}` |
| `logResponse` | [`PartialHttpMessageLoggingOptions`](partial-response-logging-options.md) | Set response information options <br> *Default*: `{}` |

