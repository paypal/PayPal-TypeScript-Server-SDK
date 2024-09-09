# Orders

Use the `/orders` resource to create, update, retrieve, authorize, capture and track orders.

```ts
const ordersController = new OrdersController(client);
```

## Class Name

`OrdersController`

## Methods

* [Orders Create](../../doc/controllers/orders.md#orders-create)
* [Orders Get](../../doc/controllers/orders.md#orders-get)
* [Orders Patch](../../doc/controllers/orders.md#orders-patch)
* [Orders Confirm](../../doc/controllers/orders.md#orders-confirm)
* [Orders Authorize](../../doc/controllers/orders.md#orders-authorize)
* [Orders Capture](../../doc/controllers/orders.md#orders-capture)
* [Orders Track Create](../../doc/controllers/orders.md#orders-track-create)
* [Orders Trackers Patch](../../doc/controllers/orders.md#orders-trackers-patch)


# Orders Create

Creates an order. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#create-order">Orders v2 errors</a>.</blockquote>

```ts
async ordersCreate(  body: OrderRequest,
  payPalRequestId?: string,
  payPalPartnerAttributionId?: string,
  payPalClientMetadataId?: string,
  prefer?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`OrderRequest`](../../doc/models/order-request.md) | Body, Required | - |
| `payPalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `108` |
| `payPalPartnerAttributionId` | `string \| undefined` | Header, Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `payPalClientMetadataId` | `string \| undefined` | Header, Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul><br>**Default**: `'return=minimal'`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^[a-zA-Z=,-]*$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Order`](../../doc/models/order.md)

## Example Usage

```ts
const collect = {
  body: {
    intent: CheckoutPaymentIntent.CAPTURE,
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
  const { result, ...httpResponse } = await ordersController.ordersCreate(collect);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Orders Get

Shows details for an order, by ID.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#get-order">Orders v2 errors</a>.</blockquote>

```ts
async ordersGet(  id: string,
  fields?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order for which to show details.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `fields` | `string \| undefined` | Query, Optional | A comma-separated list of fields that should be returned for the order. Valid filter field is `payment_source`.<br>**Constraints**: *Pattern*: `^[a-z_]*$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Order`](../../doc/models/order.md)

## Example Usage

```ts
const collect = {
  id: 'id0'
}

try {
  const { result, ...httpResponse } = await ordersController.ordersGet(collect);
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
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Orders Patch

Updates an order with a `CREATED` or `APPROVED` status. You cannot update an order with the `COMPLETED` status.<br/><br/>To make an update, you must provide a `reference_id`. If you omit this value with an order that contains only one purchase unit, PayPal sets the value to `default` which enables you to use the path: <code>\"/purchase_units/@reference_id=='default'/{attribute-or-object}\"</code>. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#patch-order">Orders v2 errors</a>.</blockquote>Patchable attributes or objects:<br/><br/><table><thead><th>Attribute</th><th>Op</th><th>Notes</th></thead><tbody><tr><td><code>intent</code></td><td>replace</td><td></td></tr><tr><td><code>payer</code></td><td>replace, add</td><td>Using replace op for <code>payer</code> will replace the whole <code>payer</code> object with the value sent in request.</td></tr><tr><td><code>purchase_units</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].custom_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].description</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payee.email</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].shipping.name</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.email_address</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.phone_number</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.options</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.address</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.type</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].soft_descriptor</code></td><td>replace, remove</td><td></td></tr><tr><td><code>purchase_units[].amount</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].items</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].invoice_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction.disbursement_mode</code></td><td>replace</td><td>By default, <code>disbursement_mode</code> is <code>INSTANT</code>.</td></tr><tr><td><code>purchase_units[].payment_instruction.payee_receivable_fx_rate_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction.platform_fees</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].supplementary_data.airline</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].supplementary_data.card</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>application_context.client_configuration</code></td><td>replace, add</td><td></td></tr></tbody></table>

```ts
async ordersPatch(  id: string,
  body?: Patch[],
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order to update.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `body` | [`Patch[] \| undefined`](../../doc/models/patch.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

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
  const { result, ...httpResponse } = await ordersController.ordersPatch(collect);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Orders Confirm

Payer confirms their intent to pay for the the Order with the given payment source.

```ts
async ordersConfirm(  id: string,
  payPalClientMetadataId?: string,
  prefer?: string,
  body?: ConfirmOrderRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order for which the payer confirms their intent to pay.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `payPalClientMetadataId` | `string \| undefined` | Header, Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul><br>**Default**: `'return=minimal'`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^[a-zA-Z=]*$` |
| `body` | [`ConfirmOrderRequest \| undefined`](../../doc/models/confirm-order-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Order`](../../doc/models/order.md)

## Example Usage

```ts
const collect = {
  id: 'id0',
  prefer: 'return=minimal',
  body: {
    paymentSource: {},
    processingInstruction: ProcessingInstruction.NOINSTRUCTION,
  }
}

try {
  const { result, ...httpResponse } = await ordersController.ordersConfirm(collect);
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
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Orders Authorize

Authorizes payment for an order. To successfully authorize payment for an order, the buyer must first approve the order or a valid payment_source must be provided in the request. A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#authorize-order">Orders v2 errors</a>.</blockquote>

```ts
async ordersAuthorize(  id: string,
  payPalRequestId?: string,
  prefer?: string,
  payPalClientMetadataId?: string,
  payPalAuthAssertion?: string,
  body?: OrderAuthorizeRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<OrderAuthorizeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order for which to authorize.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `payPalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `108` |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul><br>**Default**: `'return=minimal'`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^[a-zA-Z=,-]*$` |
| `payPalClientMetadataId` | `string \| undefined` | Header, Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `payPalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see <a href="https://developer.paypal.com/api/rest/requests/#paypal-auth-assertion">PayPal-Auth-Assertion</a>. |
| `body` | [`OrderAuthorizeRequest \| undefined`](../../doc/models/order-authorize-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrderAuthorizeResponse`](../../doc/models/order-authorize-response.md)

## Example Usage

```ts
const collect = {
  id: 'id0',
  prefer: 'return=minimal'
}

try {
  const { result, ...httpResponse } = await ordersController.ordersAuthorize(collect);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | The authorized payment failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Orders Capture

Captures payment for an order. To successfully capture payment for an order, the buyer must first approve the order or a valid payment_source must be provided in the request. A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#capture-order">Orders v2 errors</a>.</blockquote>

```ts
async ordersCapture(  id: string,
  payPalRequestId?: string,
  prefer?: string,
  payPalClientMetadataId?: string,
  payPalAuthAssertion?: string,
  body?: OrderCaptureRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order for which to capture a payment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `payPalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `108` |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul><br>**Default**: `'return=minimal'`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^[a-zA-Z=,-]*$` |
| `payPalClientMetadataId` | `string \| undefined` | Header, Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `payPalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see <a href="https://developer.paypal.com/api/rest/requests/#paypal-auth-assertion">PayPal-Auth-Assertion</a>. |
| `body` | [`OrderCaptureRequest \| undefined`](../../doc/models/order-capture-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Order`](../../doc/models/order.md)

## Example Usage

```ts
const collect = {
  id: 'id0',
  prefer: 'return=minimal'
}

try {
  const { result, ...httpResponse } = await ordersController.ordersCapture(collect);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | The authorized payment failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Orders Track Create

Adds tracking information for an Order.

```ts
async ordersTrackCreate(  id: string,
  body: OrderTrackerRequest,
  payPalAuthAssertion?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order that the tracking information is associated with.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `body` | [`OrderTrackerRequest`](../../doc/models/order-tracker-request.md) | Body, Required | - |
| `payPalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see <a href="https://developer.paypal.com/api/rest/requests/#paypal-auth-assertion">PayPal-Auth-Assertion</a>. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Order`](../../doc/models/order.md)

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
  const { result, ...httpResponse } = await ordersController.ordersTrackCreate(collect);
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
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |


# Orders Trackers Patch

Updates or cancels the tracking information for a PayPal order, by ID. Updatable attributes or objects:<br/><br/><table><thead><th>Attribute</th><th>Op</th><th>Notes</th></thead><tbody></tr><tr><td><code>items</code></td><td>replace</td><td>Using replace op for <code>items</code> will replace the entire <code>items</code> object with the value sent in request.</td></tr><tr><td><code>notify_payer</code></td><td>replace, add</td><td></td></tr><tr><td><code>status</code></td><td>replace</td><td>Only patching status to CANCELLED is currently supported.</td></tr></tbody></table>

```ts
async ordersTrackersPatch(  id: string,
  trackerId: string,
  body?: Patch[],
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the order that the tracking information is associated with.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `trackerId` | `string` | Template, Required | The order tracking ID.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[A-Z0-9]+$` |
| `body` | [`Patch[] \| undefined`](../../doc/models/patch.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

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
  const { result, ...httpResponse } = await ordersController.ordersTrackersPatch(collect);
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
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |
| Default | The error response. | [`CustomError`](../../doc/models/custom-error.md) |

