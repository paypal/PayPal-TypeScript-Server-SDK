
# Getting Started with PayPal Server SDK

## Introduction

### Important Notes

- **Available Features:** This SDK currently contains only 3 of PayPal's API endpoints. Additional endpoints and functionality will be added in the future.

### Information

The PayPal Server SDK provides integration access to the PayPal REST APIs. The API endpoints are divided into distinct controllers:

- Orders Controller: [Orders API v2](https://developer.paypal.com/docs/api/orders/v2/)
- Payments Controller: [Payments API v2](https://developer.paypal.com/docs/api/payments/v2
- Vault Controller: [Payment Method Tokens API v3](https://developer.paypal.com/docs/api/payment-tokens/v3/) *Available in the US only.*

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install @paypal/paypal-server-sdk@1.1.0
```

For additional package details, see the [Npm page for the @paypal/paypal-server-sdk@1.1.0 npm](https://www.npmjs.com/package/@paypal/paypal-server-sdk/v/1.1.0).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Sandbox`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/partial-logging-options.md) | Logging Configuration to enable logging |
| clientCredentialsAuthCredentials | [`ClientCredentialsAuthCredentials`](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/auth/oauth-2-client-credentials-grant.md) | The credential object for clientCredentialsAuth |

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

* [`Oauth2 (OAuth 2 Client Credentials Grant)`](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/auth/oauth-2-client-credentials-grant.md)

## List of APIs

* [Orders](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/controllers/orders.md)
* [Payments](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/controllers/payments.md)
* [Vault](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/controllers/vault.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/retry-configuration.md)
* [PartialLoggingOptions](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/partial-logging-options.md)
* [PartialRequestLoggingOptions](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/partial-request-logging-options.md)
* [PartialResponseLoggingOptions](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/partial-response-logging-options.md)
* [LoggerInterface](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/logger-interface.md)

### HTTP

* [HttpRequest](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/api-response.md)
* [ApiError](https://www.github.com/paypal/PayPal-TypeScript-Server-SDK/tree/1.1.0/doc/api-error.md)

