
# Getting Started with PayPal Server SDK

## Introduction

### ⚠️ Beta Release Notice

This version is considered a **beta release**. While we have done our best to ensure stability and functionality, there may still be bugs, incomplete features, or breaking changes in future updates.

#### Important Notes

- **Available Features:** This SDK currently contains only 3 of PayPal's API endpoints. Additional endpoints and functionality will be added in the future.
- **API Changes:** Expect potential changes in APIs and features as we finalize the product.

### Information

The PayPal Server SDK provides integration access to the PayPal REST APIs. The API endpoints are divided into distinct controllers:

- Orders Controller: <a href="https://developer.paypal.com/docs/api/orders/v2/">Orders API v2</a>
- Payments Controller: <a href="https://developer.paypal.com/docs/api/payments/v2/">Payments API v2</a>
- Vault Controller: <a href="https://developer.paypal.com/docs/api/payment-tokens/v3/">Payment Method Tokens API v3</a> *Available in the US only.*

Find out more here: [https://developer.paypal.com/docs/api/orders/v2/](https://developer.paypal.com/docs/api/orders/v2/)

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install @paypal/paypal-server-sdk@0.6.1
```

For additional package details, see the [Npm page for the @paypal/paypal-server-sdk@0.6.1 npm](https://www.npmjs.com/package/@paypal/paypal-server-sdk/v/0.6.1).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Sandbox`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `logging` | [`PartialLoggingOptions`](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/partial-logging-options.md) | Logging Configuration to enable logging |
| `clientCredentialsAuthCredentials` | [`ClientCredentialsAuthCredentials`](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/auth/oauth-2-client-credentials-grant.md) | The credential object for clientCredentialsAuth |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| Production | PayPal Live Environment |
| Sandbox | **Default** PayPal Sandbox Environment |

## Authorization

This API uses the following authentication schemes.

* [`Oauth2 (OAuth 2 Client Credentials Grant)`](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/auth/oauth-2-client-credentials-grant.md)

## List of APIs

* [Orders](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/controllers/orders.md)
* [Payments](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/controllers/payments.md)
* [Vault](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/controllers/vault.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/api-response.md)
* [ApiError](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/api-error.md)
* [PartialLoggingOptions](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/partial-logging-options.md)
* [PartialRequestLoggingOptions](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/partial-request-logging-options.md)
* [PartialResponseLoggingOptions](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/partial-response-logging-options.md)
* [LoggerInterface](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/0.6.1/doc/logger-interface.md)

