# Subscriptions

Use the `/subscriptions` resource to create, update, retrieve, and cancel subscriptions and their associated plans.

```ts
const subscriptionsController = new SubscriptionsController(client);
```

## Class Name

`SubscriptionsController`

## Methods

* [Create Billing Plan](../../doc/controllers/subscriptions.md#create-billing-plan)
* [List Billing Plans](../../doc/controllers/subscriptions.md#list-billing-plans)
* [Get Billing Plan](../../doc/controllers/subscriptions.md#get-billing-plan)
* [Patch Billing Plan](../../doc/controllers/subscriptions.md#patch-billing-plan)
* [Activate Billing Plan](../../doc/controllers/subscriptions.md#activate-billing-plan)
* [Deactivate Billing Plan](../../doc/controllers/subscriptions.md#deactivate-billing-plan)
* [Update Billing Plan Pricing Schemes](../../doc/controllers/subscriptions.md#update-billing-plan-pricing-schemes)
* [Create Subscription](../../doc/controllers/subscriptions.md#create-subscription)
* [List Subscriptions](../../doc/controllers/subscriptions.md#list-subscriptions)
* [Get Subscription](../../doc/controllers/subscriptions.md#get-subscription)
* [Patch Subscription](../../doc/controllers/subscriptions.md#patch-subscription)
* [Revise Subscription](../../doc/controllers/subscriptions.md#revise-subscription)
* [Suspend Subscription](../../doc/controllers/subscriptions.md#suspend-subscription)
* [Cancel Subscription](../../doc/controllers/subscriptions.md#cancel-subscription)
* [Activate Subscription](../../doc/controllers/subscriptions.md#activate-subscription)
* [Capture Subscription](../../doc/controllers/subscriptions.md#capture-subscription)
* [List Subscription Transactions](../../doc/controllers/subscriptions.md#list-subscription-transactions)


# Create Billing Plan

Creates a plan that defines pricing and billing cycle details for subscriptions.

```ts
async createBillingPlan(
  {
    prefer,
    paypalRequestId,
    body,
  }: {
    prefer?: string;
    paypalRequestId?: string;
    body?: PlanRequest;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<BillingPlan>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br><br>**Default**: `'return=minimal'` |
| `paypalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 72 hours. |
| `body` | [`PlanRequest \| undefined`](../../doc/models/plan-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BillingPlan`](../../doc/models/billing-plan.md).

## Example Usage

```ts
const collect = {
  prefer: 'return=minimal',
  body: {
    productId: 'product_id2',
    name: 'name6',
    billingCycles: [
      {
        frequency: {
          intervalUnit: IntervalUnit.Day,
          intervalCount: 1,
        },
        tenureType: TenureType.Regular,
        sequence: 8,
        totalCycles: 1,
      }
    ],
    paymentPreferences: {
      autoBillOutstanding: true,
      setupFeeFailureAction: SetupFeeFailureAction.Cancel,
      paymentFailureThreshold: 0,
    },
    status: PlanRequestStatus.Active,
    quantitySupported: false,
  }
}

try {
  const { result, ...httpResponse } = await subscriptionsController.createBillingPlan(collect);
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
| 400 | Bad Request. Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# List Billing Plans

Lists billing plans.

```ts
async listBillingPlans(
  {
    prefer,
    productId,
    pageSize,
    page,
    totalRequired,
  }: {
    prefer?: string;
    productId?: string;
    pageSize?: number;
    page?: number;
    totalRequired?: boolean;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<PlanCollection>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, name, description and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br><br>**Default**: `'return=minimal'` |
| `productId` | `string \| undefined` | Query, Optional | Filters the response by a Product ID.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `50` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to return in the response.<br><br>**Default**: `10`<br><br>**Constraints**: `>= 1`, `<= 20` |
| `page` | `number \| undefined` | Query, Optional | A non-zero integer which is the start index of the entire list of items to return in the response. The combination of `page=1` and `page_size=20` returns the first 20 items. The combination of `page=2` and `page_size=20` returns the next 20 items.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1`, `<= 100000` |
| `totalRequired` | `boolean \| undefined` | Query, Optional | Indicates whether to show the total count in the response.<br><br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PlanCollection`](../../doc/models/plan-collection.md).

## Example Usage

```ts
const collect = {
  prefer: 'return=minimal',
  pageSize: 10,
  page: 1,
  totalRequired: false
}

try {
  const { result, ...httpResponse } = await subscriptionsController.listBillingPlans(collect);
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
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Get Billing Plan

Shows details for a plan, by ID.

```ts
async getBillingPlan(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BillingPlan>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the plan. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BillingPlan`](../../doc/models/billing-plan.md).

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.getBillingPlan(id);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Patch Billing Plan

Updates a plan with the `CREATED` or `ACTIVE` status. For an `INACTIVE` plan, you can make only status updates. You can patch these attributes and objects: Attribute or object Operations description replace payment_preferences.auto_bill_outstanding replace taxes.percentage replace payment_preferences.payment_failure_threshold replace payment_preferences.setup_fee replace payment_preferences.setup_fee_failure_action replace name replace

```ts
async patchBillingPlan(
  {
    id,
    body,
  }: {
    id: string;
    body?: Patch[];
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the plan. |
| `body` | [`Patch[] \| undefined`](../../doc/models/patch.md) | Body, Optional | - |
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
  const { result, ...httpResponse } = await subscriptionsController.patchBillingPlan(collect);
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
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Activate Billing Plan

Activates a plan, by ID.

```ts
async activateBillingPlan(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the plan. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.activateBillingPlan(id);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Deactivate Billing Plan

Deactivates a plan, by ID.

```ts
async deactivateBillingPlan(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the plan. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.deactivateBillingPlan(id);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Update Billing Plan Pricing Schemes

Updates pricing for a plan. For example, you can update a regular billing cycle from $5 per month to $7 per month.

```ts
async updateBillingPlanPricingSchemes(
  {
    id,
    body,
  }: {
    id: string;
    body?: UpdatePricingSchemesRequest;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID for the plan. |
| `body` | [`UpdatePricingSchemesRequest \| undefined`](../../doc/models/update-pricing-schemes-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const collect = {
  id: 'id0',
  body: {
    pricingSchemes: [
      {
        billingCycleSequence: 34,
        pricingScheme: {
        },
      }
    ],
  }
}

try {
  const { result, ...httpResponse } = await subscriptionsController.updateBillingPlanPricingSchemes(collect);
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
| 400 | Bad Request. Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Create Subscription

Creates a subscription.

```ts
async createSubscription(
  {
    prefer,
    paypalRequestId,
    paypalClientMetadataId,
    body,
  }: {
    prefer?: string;
    paypalRequestId?: string;
    paypalClientMetadataId?: string;
    body?: CreateSubscriptionRequest;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<Subscription>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is: return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links. return=representation. The server returns a complete resource representation, including the current state of the resource.<br><br>**Default**: `'return=minimal'` |
| `paypalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 72 hours. |
| `paypalClientMetadataId` | `string \| undefined` | Header, Optional | The PayPal Client Metadata Id(CMID) is used to provide device-specific information to PayPal's risk engine. This is crucial for transactions that require device-specific risk assessments. Merchants typically use the Paypal SDK that automatically submits the CMID or they use tools like Fraudnet JS for web or Magnes JS for mobile to generate the CMID on the frontend and then pass it to the API as part of the request headers.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `body` | [`CreateSubscriptionRequest \| undefined`](../../doc/models/create-subscription-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Subscription`](../../doc/models/subscription.md).

## Example Usage

```ts
const collect = {
  prefer: 'return=minimal',
  body: {
    planId: 'plan_id8',
    autoRenewal: false,
  }
}

try {
  const { result, ...httpResponse } = await subscriptionsController.createSubscription(collect);
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
| 400 | Bad Request. Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# List Subscriptions

List all subscriptions for merchant account.

```ts
async listSubscriptions(
  {
    planIds,
    statuses,
    createdAfter,
    createdBefore,
    statusUpdatedBefore,
    statusUpdatedAfter,
    filter,
    pageSize,
    page,
    customerIds,
  }: {
    planIds?: string;
    statuses?: string;
    createdAfter?: string;
    createdBefore?: string;
    statusUpdatedBefore?: string;
    statusUpdatedAfter?: string;
    filter?: string;
    pageSize?: number;
    page?: number;
    customerIds?: string[];
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionCollection>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planIds` | `string \| undefined` | Query, Optional | Filters the response by list of plan IDs. Filter supports upto 70 plan IDs. URLs should not exceed a length of 2000 characters. |
| `statuses` | `string \| undefined` | Query, Optional | Filters the response by list of subscription statuses.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `70`, *Pattern*: `^[A-Z_,]+$` |
| `createdAfter` | `string \| undefined` | Query, Optional | Filters the response by subscription creation start time for a range of subscriptions.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `createdBefore` | `string \| undefined` | Query, Optional | Filters the response by subscription creation end time for a range of subscriptions.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `statusUpdatedBefore` | `string \| undefined` | Query, Optional | Filters the response by status update start time for a range of subscriptions.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `statusUpdatedAfter` | `string \| undefined` | Query, Optional | Filters the response by status update end time for a range of subscriptions.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `filter` | `string \| undefined` | Query, Optional | Filter the response using complex expressions that could use comparison operators like ge, gt, le, lt and logical operators such as 'and' and 'or'.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `100` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to return in the response.<br><br>**Default**: `10`<br><br>**Constraints**: `>= 1`, `<= 20` |
| `page` | `number \| undefined` | Query, Optional | A non-zero integer which is the start index of the entire list of items to return in the response. The combination of `page=1` and `page_size=20` returns the first 20 items. The combination of `page=2` and `page_size=20` returns the next 20 items.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1`, `<= 10000000` |
| `customerIds` | `string[] \| undefined` | Query, Optional | Filters the response by comma separated vault customer IDs (FSS subscriptions only).<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10`, *Minimum Length*: `1`, *Maximum Length*: `22`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubscriptionCollection`](../../doc/models/subscription-collection.md).

## Example Usage

```ts
const collect = {
  pageSize: 10,
  page: 1
}

try {
  const { result, ...httpResponse } = await subscriptionsController.listSubscriptions(collect);
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
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Get Subscription

Shows details for a subscription, by ID.

```ts
async getSubscription(
  {
    id,
    fields,
  }: {
    id: string;
    fields?: string;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<Subscription>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the subscription. |
| `fields` | `string \| undefined` | Query, Optional | List of fields that are to be returned in the response. Possible value for fields are last_failed_payment and plan.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Subscription`](../../doc/models/subscription.md).

## Example Usage

```ts
const collect = {
  id: 'id0'
}

try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscription(collect);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Patch Subscription

Updates a subscription which could be in ACTIVE or SUSPENDED status. You can override plan level default attributes by providing customised values for plan path in the patch request. You cannot update attributes that have already completed (Example - trial cycles can’t be updated if completed). Once overridden, changes to plan resource will not impact subscription. Any price update will not impact billing cycles within next 10 days (Applicable only for subscriptions funded by PayPal account). Following are the fields eligible for patch. Attribute or object Operations billing_info.outstanding_balance replace custom_id add,replace plan.billing_cycles[@sequence==n]. pricing_scheme.fixed_price add,replace plan.billing_cycles[@sequence==n]. pricing_scheme.tiers replace plan.billing_cycles[@sequence==n]. total_cycles replace plan.payment_preferences. auto_bill_outstanding replace plan.payment_preferences. payment_failure_threshold replace plan.taxes.inclusive add,replace plan.taxes.percentage add,replace shipping_amount add,replace start_time replace subscriber.shipping_address add,replace subscriber.payment_source (for subscriptions funded by card payments) replace

```ts
async patchSubscription(
  {
    id,
    body,
  }: {
    id: string;
    body?: Patch[];
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID for the subscription. |
| `body` | [`Patch[] \| undefined`](../../doc/models/patch.md) | Body, Optional | - |
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
  const { result, ...httpResponse } = await subscriptionsController.patchSubscription(collect);
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
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Revise Subscription

Updates the quantity of the product or service in a subscription. You can also use this method to switch the plan and update the `shipping_amount`, `shipping_address` values for the subscription. This type of update requires the buyer's consent.

```ts
async reviseSubscription(
  {
    id,
    body,
  }: {
    id: string;
    body?: ModifySubscriptionRequest;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<ModifySubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the subscription. |
| `body` | [`ModifySubscriptionRequest \| undefined`](../../doc/models/modify-subscription-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ModifySubscriptionResponse`](../../doc/models/modify-subscription-response.md).

## Example Usage

```ts
const collect = {
  id: 'id0'
}

try {
  const { result, ...httpResponse } = await subscriptionsController.reviseSubscription(collect);
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
| 400 | Bad Request. Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Suspend Subscription

Suspends the subscription.

```ts
async suspendSubscription(
  {
    id,
    body,
  }: {
    id: string;
    body?: SuspendSubscription;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the subscription. |
| `body` | [`SuspendSubscription \| undefined`](../../doc/models/suspend-subscription.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const collect = {
  id: 'id0'
}

try {
  const { result, ...httpResponse } = await subscriptionsController.suspendSubscription(collect);
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
| 400 | Bad Request. Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Cancel Subscription

Cancels the subscription.

```ts
async cancelSubscription(
  {
    id,
    body,
  }: {
    id: string;
    body?: CancelSubscriptionRequest;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the subscription. |
| `body` | [`CancelSubscriptionRequest \| undefined`](../../doc/models/cancel-subscription-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const collect = {
  id: 'id0'
}

try {
  const { result, ...httpResponse } = await subscriptionsController.cancelSubscription(collect);
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
| 400 | Bad Request. Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Activate Subscription

Activates the subscription.

```ts
async activateSubscription(
  {
    id,
    body,
  }: {
    id: string;
    body?: ActivateSubscriptionRequest;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the subscription. |
| `body` | [`ActivateSubscriptionRequest \| undefined`](../../doc/models/activate-subscription-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const collect = {
  id: 'id0'
}

try {
  const { result, ...httpResponse } = await subscriptionsController.activateSubscription(collect);
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
| 400 | Bad Request. Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# Capture Subscription

Captures an authorized payment from the subscriber on the subscription.

```ts
async captureSubscription(
  {
    id,
    paypalRequestId,
    body,
  }: {
    id: string;
    paypalRequestId?: string;
    body?: CaptureSubscriptionRequest;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionTransactionDetails | null>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the subscription. |
| `paypalRequestId` | `string \| undefined` | Header, Optional | The server stores keys for 72 hours. |
| `body` | [`CaptureSubscriptionRequest \| undefined`](../../doc/models/capture-subscription-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubscriptionTransactionDetails | null`](../../doc/models/subscription-transaction-details.md).

## Example Usage

```ts
const collect = {
  id: 'id0'
}

try {
  const { result, ...httpResponse } = await subscriptionsController.captureSubscription(collect);
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
| 400 | Bad Request. Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |


# List Subscription Transactions

Lists transactions for a subscription.

```ts
async listSubscriptionTransactions(
  {
    id,
    startTime,
    endTime,
  }: {
    id: string;
    startTime: string;
    endTime: string;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionsList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the subscription. |
| `startTime` | `string` | Query, Required | The start time of the range of transactions to list.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `endTime` | `string` | Query, Required | The end time of the range of transactions to list.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransactionsList`](../../doc/models/transactions-list.md).

## Example Usage

```ts
const collect = {
  id: 'id0',
  startTime: 'start_time6',
  endTime: 'end_time2'
}

try {
  const { result, ...httpResponse } = await subscriptionsController.listSubscriptionTransactions(collect);
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
| 400 | Bad Request. Request is not well-formed, syntactically incorrect, or violates schema. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 404 | The specified resource does not exist. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| 500 | An internal server error has occurred. | [`SubscriptionError`](../../doc/models/subscription-error.md) |
| Default | The error response. | [`SubscriptionError`](../../doc/models/subscription-error.md) |

