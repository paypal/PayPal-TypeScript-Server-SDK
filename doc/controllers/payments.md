# Payments

Use the `/payments` resource to authorize, capture, void authorizations, and retrieve captures.

```ts
const paymentsController = new PaymentsController(client);
```

## Class Name

`PaymentsController`

## Methods

* [Get Authorized Payment](../../doc/controllers/payments.md#get-authorized-payment)
* [Capture Authorized Payment](../../doc/controllers/payments.md#capture-authorized-payment)
* [Reauthorize Payment](../../doc/controllers/payments.md#reauthorize-payment)
* [Void Payment](../../doc/controllers/payments.md#void-payment)
* [Get Captured Payment](../../doc/controllers/payments.md#get-captured-payment)
* [Refund Captured Payment](../../doc/controllers/payments.md#refund-captured-payment)
* [Get Refund](../../doc/controllers/payments.md#get-refund)


# Get Authorized Payment

Shows details for an authorized payment, by ID.

```ts
async getAuthorizedPayment(
  authorizationId: string,
  paypalMockResponse?: string,
  paypalAuthAssertion?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentAuthorization>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationId` | `string` | Template, Required | The ID of the authorized payment for which to show details. |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion). Note:For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [PaymentAuthorization](../../doc/models/payment-authorization.md).

## Example Usage

```ts
const collect = {
  authorizationId: 'authorization_id8'
}

try {
  const { result, ...httpResponse } = await paymentsController.getAuthorizedPayment(collect);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The request failed because the resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Capture Authorized Payment

Captures an authorized payment, by ID.

```ts
async captureAuthorizedPayment(
  authorizationId: string,
  paypalMockResponse?: string,
  paypalRequestId?: string,
  prefer?: string,
  paypalAuthAssertion?: string,
  body?: CaptureRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CapturedPayment>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationId` | `string` | Template, Required | The PayPal-generated ID for the authorized payment to capture. |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `paypalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 45 days. |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br>**Default**: `'return=minimal'` |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion). Note:For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject. |
| `body` | [`CaptureRequest \| undefined`](../../doc/models/capture-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [CapturedPayment](../../doc/models/captured-payment.md).

## Example Usage

```ts
const collect = {
  authorizationId: 'authorization_id8',
  prefer: 'return=minimal',
  body: {
    finalCapture: false,
  }
}

try {
  const { result, ...httpResponse } = await paymentsController.captureAuthorizedPayment(collect);
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
| 400 | The request failed because it is not well-formed or is syntactically incorrect or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The request failed because the resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 409 | The server has detected a conflict while processing this request. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The request failed because it is semantically incorrect or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Reauthorize Payment

Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize a payment after its initial three-day honor period expires. Within the 29-day authorization period, you can issue multiple re-authorizations after the honor period expires. If 30 days have transpired since the date of the original authorization, you must create an authorized payment instead of reauthorizing the original authorized payment. A reauthorized payment itself has a new honor period of three days. You can reauthorize an authorized payment from 4 to 29 days after the 3-day honor period. The allowed amount depends on context and geography, for example in US it is up to 115% of the original authorized amount, not to exceed an increase of $75 USD. Supports only the `amount` request parameter. Note: This request is currently not supported for Partner use cases.

```ts
async reauthorizePayment(
  authorizationId: string,
  paypalRequestId?: string,
  prefer?: string,
  paypalAuthAssertion?: string,
  body?: ReauthorizeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentAuthorization>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationId` | `string` | Template, Required | The PayPal-generated ID for the authorized payment to reauthorize. |
| `paypalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 45 days. |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br>**Default**: `'return=minimal'` |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion). Note:For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject. |
| `body` | [`ReauthorizeRequest \| undefined`](../../doc/models/reauthorize-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [PaymentAuthorization](../../doc/models/payment-authorization.md).

## Example Usage

```ts
const collect = {
  authorizationId: 'authorization_id8',
  prefer: 'return=minimal'
}

try {
  const { result, ...httpResponse } = await paymentsController.reauthorizePayment(collect);
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
| 400 | The request failed because it is not well-formed or is syntactically incorrect or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The request failed because the resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The request failed because it either is semantically incorrect or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Void Payment

Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.

```ts
async voidPayment(
  authorizationId: string,
  paypalMockResponse?: string,
  paypalAuthAssertion?: string,
  paypalRequestId?: string,
  prefer?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentAuthorization | null>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationId` | `string` | Template, Required | The PayPal-generated ID for the authorized payment to void. |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion). Note:For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject. |
| `paypalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 45 days. |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br>**Default**: `'return=minimal'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [PaymentAuthorization | null](../../doc/models/payment-authorization.md).

## Example Usage

```ts
const collect = {
  authorizationId: 'authorization_id8',
  prefer: 'return=minimal'
}

try {
  const { result, ...httpResponse } = await paymentsController.voidPayment(collect);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The request failed because the resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 409 | The request failed because a previous call for the given resource is in progress. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The request failed because it either is semantically incorrect or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Get Captured Payment

Shows details for a captured payment, by ID.

```ts
async getCapturedPayment(
  captureId: string,
  paypalMockResponse?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CapturedPayment>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `captureId` | `string` | Template, Required | The PayPal-generated ID for the captured payment for which to show details. |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [CapturedPayment](../../doc/models/captured-payment.md).

## Example Usage

```ts
const collect = {
  captureId: 'capture_id2'
}

try {
  const { result, ...httpResponse } = await paymentsController.getCapturedPayment(collect);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The request failed because the resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Refund Captured Payment

Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an amount object in the JSON request body.

```ts
async refundCapturedPayment(
  captureId: string,
  paypalMockResponse?: string,
  paypalRequestId?: string,
  prefer?: string,
  paypalAuthAssertion?: string,
  body?: RefundRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Refund>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `captureId` | `string` | Template, Required | The PayPal-generated ID for the captured payment to refund. |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `paypalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 45 days. |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br>**Default**: `'return=minimal'` |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion). Note:For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject. |
| `body` | [`RefundRequest \| undefined`](../../doc/models/refund-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [Refund](../../doc/models/refund.md).

## Example Usage

```ts
const collect = {
  captureId: 'capture_id2',
  prefer: 'return=minimal'
}

try {
  const { result, ...httpResponse } = await paymentsController.refundCapturedPayment(collect);
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
| 400 | The request failed because it is not well-formed or is syntactically incorrect or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The request failed because the resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 409 | The request failed because a previous call for the given resource is in progress. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The request failed because it either is semantically incorrect or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Get Refund

Shows details for a refund, by ID.

```ts
async getRefund(
  refundId: string,
  paypalMockResponse?: string,
  paypalAuthAssertion?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Refund>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refundId` | `string` | Template, Required | The PayPal-generated ID for the refund for which to show details. |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion). Note:For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [Refund](../../doc/models/refund.md).

## Example Usage

```ts
const collect = {
  refundId: 'refund_id4'
}

try {
  const { result, ...httpResponse } = await paymentsController.getRefund(collect);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The request failed because the resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |

