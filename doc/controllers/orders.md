# Orders

Use the `/orders` resource to create, update, retrieve, authorize, capture and track orders.

```ts
const ordersController = new OrdersController(client);
```

## Class Name

`OrdersController`

## Methods

* [Create Order](../../doc/controllers/orders.md#create-order)
* [Get Order](../../doc/controllers/orders.md#get-order)
* [Patch Order](../../doc/controllers/orders.md#patch-order)
* [Confirm Order](../../doc/controllers/orders.md#confirm-order)
* [Authorize Order](../../doc/controllers/orders.md#authorize-order)
* [Capture Order](../../doc/controllers/orders.md#capture-order)
* [Create Order Tracking](../../doc/controllers/orders.md#create-order-tracking)
* [Update Order Tracking](../../doc/controllers/orders.md#update-order-tracking)


# Create Order

Creates an order. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see checkout or multiparty checkout. Note: For error handling and troubleshooting, see Orders v2 errors.

```ts
async createOrder(
  {
    body,
    paypalMockResponse,
    paypalRequestId,
    paypalPartnerAttributionId,
    paypalClientMetadataId,
    prefer,
    paypalAuthAssertion,
  }: {
    body: OrderRequest;
    paypalMockResponse?: string;
    paypalRequestId?: string;
    paypalPartnerAttributionId?: string;
    paypalClientMetadataId?: string;
    prefer?: string;
    paypalAuthAssertion?: string;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`OrderRequest`](../../doc/models/order-request.md) | Body, Required | - |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `paypalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager. It is mandatory for all single-step create order calls (E.g. Create Order Request with payment source information like Card, PayPal.vault_id, PayPal.billing_agreement_id, etc).<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `108` |
| `paypalPartnerAttributionId` | `string \| undefined` | Header, Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `paypalClientMetadataId` | `string \| undefined` | Header, Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br><br>**Default**: `'return=minimal'`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^[a-zA-Z=,-]*$` |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see PayPal-Auth-Assertion. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Order`](../../doc/models/order.md).

## Example Usage

```ts
const collect = {
  body: {
    intent: CheckoutPaymentIntent.Capture,
    purchaseUnits: [
      {
        amount: {
          currencyCode: 'currency_code6',
          value: 'value0',
        },
      }
    ],
  },
  prefer: 'return=minimal'
}

try {
  const response = await ordersController.createOrder(collect);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Get Order

Shows details for an order, by ID. Note: For error handling and troubleshooting, see Orders v2 errors.

```ts
async getOrder(
  {
    id,
    paypalMockResponse,
    paypalAuthAssertion,
    fields,
  }: {
    id: string;
    paypalMockResponse?: string;
    paypalAuthAssertion?: string;
    fields?: string;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order for which to show details.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see PayPal-Auth-Assertion. |
| `fields` | `string \| undefined` | Query, Optional | A comma-separated list of fields that should be returned for the order. Valid filter field is `payment_source`.<br><br>**Constraints**: *Pattern*: `^[a-z_]*$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Order`](../../doc/models/order.md).

## Example Usage

```ts
const collect = {
  id: 'id0'
}

try {
  const response = await ordersController.getOrder(collect);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Patch Order

Updates an order with a `CREATED` or `APPROVED` status. You cannot update an order with the `COMPLETED` status.<br/><br/>To make an update, you must provide a `reference_id`. If you omit this value with an order that contains only one purchase unit, PayPal sets the value to `default` which enables you to use the path: <code>\"/purchase_units/@reference_id=='default'/{attribute-or-object}\"</code>. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#patch-order">Orders v2 errors</a>.</blockquote>Patchable attributes or objects:<br/><br/><table><thead><th>Attribute</th><th>Op</th><th>Notes</th></thead><tbody><tr><td><code>intent</code></td><td>replace</td><td></td></tr><tr><td><code>payer</code></td><td>replace, add</td><td>Using replace op for <code>payer</code> will replace the whole <code>payer</code> object with the value sent in request.</td></tr><tr><td><code>purchase_units</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].custom_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].description</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payee.email</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].shipping.name</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.email_address</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.phone_number</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.options</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.address</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.type</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].soft_descriptor</code></td><td>replace, remove</td><td></td></tr><tr><td><code>purchase_units[].amount</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].items</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].invoice_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction.disbursement_mode</code></td><td>replace</td><td>By default, <code>disbursement_mode</code> is <code>INSTANT</code>.</td></tr><tr><td><code>purchase_units[].payment_instruction.payee_receivable_fx_rate_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction.platform_fees</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].supplementary_data.airline</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].supplementary_data.card</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>application_context.client_configuration</code></td><td>replace, add</td><td></td></tr></tbody></table>

```ts
async patchOrder(
  {
    id,
    paypalMockResponse,
    paypalAuthAssertion,
    body,
  }: {
    id: string;
    paypalMockResponse?: string;
    paypalAuthAssertion?: string;
    body?: Patch[];
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order to update.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see PayPal-Auth-Assertion. |
| `body` | [`Patch[] \| undefined`](../../doc/models/patch.md) | Body, Optional | **Constraints**: *Minimum Items*: `0`, *Maximum Items*: `32767` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const collect = {
  id: 'id0',
  body: [
    {
      op: PatchOp.Add,
    }
  ]
}

try {
  const response = await ordersController.patchOrder(collect);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Confirm Order

Payer confirms their intent to pay for the the Order with the given payment source.

```ts
async confirmOrder(
  {
    id,
    paypalClientMetadataId,
    paypalAuthAssertion,
    prefer,
    body,
  }: {
    id: string;
    paypalClientMetadataId?: string;
    paypalAuthAssertion?: string;
    prefer?: string;
    body?: ConfirmOrderRequest;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order for which the payer confirms their intent to pay.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `paypalClientMetadataId` | `string \| undefined` | Header, Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see PayPal-Auth-Assertion. |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br><br>**Default**: `'return=minimal'`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^[a-zA-Z=]*$` |
| `body` | [`ConfirmOrderRequest \| undefined`](../../doc/models/confirm-order-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Order`](../../doc/models/order.md).

## Example Usage

```ts
const collect = {
  id: 'id0',
  prefer: 'return=minimal'
}

try {
  const response = await ordersController.confirmOrder(collect);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
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
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Authorize Order

Authorizes payment for an order. To successfully authorize payment for an order, the buyer must first approve the order or a valid payment_source must be provided in the request. A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response. Note: For error handling and troubleshooting, see Orders v2 errors.

```ts
async authorizeOrder(
  {
    id,
    paypalMockResponse,
    paypalRequestId,
    prefer,
    paypalClientMetadataId,
    paypalAuthAssertion,
    body,
  }: {
    id: string;
    paypalMockResponse?: string;
    paypalRequestId?: string;
    prefer?: string;
    paypalClientMetadataId?: string;
    paypalAuthAssertion?: string;
    body?: OrderAuthorizeRequest;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrderAuthorizeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order for which to authorize.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `paypalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager. It is mandatory for all single-step create order calls (E.g. Create Order Request with payment source information like Card, PayPal.vault_id, PayPal.billing_agreement_id, etc).<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `108` |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br><br>**Default**: `'return=minimal'`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^[a-zA-Z=,-]*$` |
| `paypalClientMetadataId` | `string \| undefined` | Header, Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see PayPal-Auth-Assertion. |
| `body` | [`OrderAuthorizeRequest \| undefined`](../../doc/models/order-authorize-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`OrderAuthorizeResponse`](../../doc/models/order-authorize-response.md).

## Example Usage

```ts
const collect = {
  id: 'id0',
  prefer: 'return=minimal'
}

try {
  const response = await ordersController.authorizeOrder(collect);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | The authorized payment failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Capture Order

Captures payment for an order. To successfully capture payment for an order, the buyer must first approve the order or a valid payment_source must be provided in the request. A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response. Note: For error handling and troubleshooting, see Orders v2 errors.

```ts
async captureOrder(
  {
    id,
    paypalMockResponse,
    paypalRequestId,
    prefer,
    paypalClientMetadataId,
    paypalAuthAssertion,
    body,
  }: {
    id: string;
    paypalMockResponse?: string;
    paypalRequestId?: string;
    prefer?: string;
    paypalClientMetadataId?: string;
    paypalAuthAssertion?: string;
    body?: OrderCaptureRequest;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order for which to capture a payment.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `paypalMockResponse` | `string \| undefined` | Header, Optional | PayPal's REST API uses a request header to invoke negative testing in the sandbox. This header configures the sandbox into a negative testing state for transactions that include the merchant. |
| `paypalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager. It is mandatory for all single-step create order calls (E.g. Create Order Request with payment source information like Card, PayPal.vault_id, PayPal.billing_agreement_id, etc).<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `108` |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br><br>**Default**: `'return=minimal'`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^[a-zA-Z=,-]*$` |
| `paypalClientMetadataId` | `string \| undefined` | Header, Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see PayPal-Auth-Assertion. |
| `body` | [`OrderCaptureRequest \| undefined`](../../doc/models/order-capture-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Order`](../../doc/models/order.md).

## Example Usage

```ts
const collect = {
  id: 'id0',
  prefer: 'return=minimal'
}

try {
  const response = await ordersController.captureOrder(collect);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | The authorized payment failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Create Order Tracking

Adds tracking information for an Order.

```ts
async createOrderTracking(
  {
    id,
    body,
    paypalAuthAssertion,
  }: {
    id: string;
    body: OrderTrackerRequest;
    paypalAuthAssertion?: string;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order that the tracking information is associated with.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `body` | [`OrderTrackerRequest`](../../doc/models/order-tracker-request.md) | Body, Required | - |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see PayPal-Auth-Assertion. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Order`](../../doc/models/order.md).

## Example Usage

```ts
const collect = {
  id: 'id0',
  body: {
    captureId: 'capture_id8',
    notifyPayer: false,
  }
}

try {
  const response = await ordersController.createOrderTracking(collect);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Update Order Tracking

Updates or cancels the tracking information for a PayPal order, by ID. Updatable attributes or objects: Attribute Op Notes items replace Using replace op for items will replace the entire items object with the value sent in request. notify_payer replace, add status replace Only patching status to CANCELLED is currently supported.

```ts
async updateOrderTracking(
  {
    id,
    trackerId,
    paypalAuthAssertion,
    body,
  }: {
    id: string;
    trackerId: string;
    paypalAuthAssertion?: string;
    body?: Patch[];
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order that the tracking information is associated with.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `trackerId` | `string` | Template, Required | The order tracking ID.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `paypalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see PayPal-Auth-Assertion. |
| `body` | [`Patch[] \| undefined`](../../doc/models/patch.md) | Body, Optional | **Constraints**: *Minimum Items*: `0`, *Maximum Items*: `32767` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const collect = {
  id: 'id0',
  trackerId: 'tracker_id2',
  body: [
    {
      op: PatchOp.Add,
    }
  ]
}

try {
  const response = await ordersController.updateOrderTracking(collect);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |

