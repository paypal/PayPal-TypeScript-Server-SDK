# Vault

Use the `/vault` resource to create, retrieve, and delete payment and setup tokens.

```ts
const vaultController = new VaultController(client);
```

## Class Name

`VaultController`

## Methods

* [Payment-Tokens Create](../../doc/controllers/vault.md#payment-tokens-create)
* [Customer Payment-Tokens Get](../../doc/controllers/vault.md#customer-payment-tokens-get)
* [Payment-Tokens Get](../../doc/controllers/vault.md#payment-tokens-get)
* [Payment-Tokens Delete](../../doc/controllers/vault.md#payment-tokens-delete)
* [Setup-Tokens Create](../../doc/controllers/vault.md#setup-tokens-create)
* [Setup-Tokens Get](../../doc/controllers/vault.md#setup-tokens-get)


# Payment-Tokens Create

Creates a Payment Token from the given payment source and adds it to the Vault of the associated customer.

```ts
async paymentTokensCreate(  payPalRequestId: string,
  body: PaymentTokenRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<PaymentTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payPalRequestId` | `string` | Header, Required | The server stores keys for 3 hours. |
| `body` | [`PaymentTokenRequest`](../../doc/models/payment-token-request.md) | Body, Required | Payment Token creation with a financial instrument and an optional customer_id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentTokenResponse`](../../doc/models/payment-token-response.md)

## Example Usage

```ts
const collect = {
  payPalRequestId: 'PayPal-Request-Id6',
  body: {
    paymentSource: {},
  }
}

try {
  const { result, ...httpResponse } = await vaultController.paymentTokensCreate(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | Request contains reference to resources that do not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |


# Customer Payment-Tokens Get

Returns all payment tokens for a customer.

```ts
async customerPaymentTokensGet(  customerId: string,
  pageSize?: number,
  page?: number,
  totalRequired?: boolean,
requestOptions?: RequestOptions): Promise<ApiResponse<CustomerVaultPaymentTokensResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Query, Required | A unique identifier representing a specific customer in merchant's/partner's system or records.<br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `36`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `pageSize` | `number \| undefined` | Query, Optional | A non-negative, non-zero integer indicating the maximum number of results to return at one time.<br>**Default**: `5`<br>**Constraints**: `>= 1` |
| `page` | `number \| undefined` | Query, Optional | A non-negative, non-zero integer representing the page of the results.<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `totalRequired` | `boolean \| undefined` | Query, Optional | A boolean indicating total number of items (total_items) and pages (total_pages) are expected to be returned in the response.<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CustomerVaultPaymentTokensResponse`](../../doc/models/customer-vault-payment-tokens-response.md)

## Example Usage

```ts
const collect = {
  customerId: 'customer_id8',
  pageSize: 5,
  page: 1,
  totalRequired: false
}

try {
  const { result, ...httpResponse } = await vaultController.customerPaymentTokensGet(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |


# Payment-Tokens Get

Returns a readable representation of vaulted payment source associated with the payment token id.

```ts
async paymentTokensGet(  id: string,
requestOptions?: RequestOptions): Promise<ApiResponse<PaymentTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | ID of the payment token.<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentTokenResponse`](../../doc/models/payment-token-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await vaultController.paymentTokensGet(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |


# Payment-Tokens Delete

Delete the payment token associated with the payment token id.

```ts
async paymentTokensDelete(  id: string,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | ID of the payment token.<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await vaultController.paymentTokensDelete(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |


# Setup-Tokens Create

Creates a Setup Token from the given payment source and adds it to the Vault of the associated customer.

```ts
async setupTokensCreate(  payPalRequestId: string,
  body: SetupTokenRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<SetupTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payPalRequestId` | `string` | Header, Required | The server stores keys for 3 hours. |
| `body` | [`SetupTokenRequest`](../../doc/models/setup-token-request.md) | Body, Required | Setup Token creation with a instrument type optional financial instrument details and customer_id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SetupTokenResponse`](../../doc/models/setup-token-response.md)

## Example Usage

```ts
const collect = {
  payPalRequestId: 'PayPal-Request-Id6',
  body: {
    paymentSource: {},
  }
}

try {
  const { result, ...httpResponse } = await vaultController.setupTokensCreate(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |


# Setup-Tokens Get

Returns a readable representation of temporarily vaulted payment source associated with the setup token id.

```ts
async setupTokensGet(  id: string,
requestOptions?: RequestOptions): Promise<ApiResponse<SetupTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | ID of the setup token.<br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `36`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SetupTokenResponse`](../../doc/models/setup-token-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await vaultController.setupTokensGet(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |

