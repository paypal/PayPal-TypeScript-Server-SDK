
# Plan Request

The create plan request details.

## Structure

`PlanRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string` | Required | The ID of the product created through Catalog Products API.<br><br>**Constraints**: *Minimum Length*: `22`, *Maximum Length*: `22`, *Pattern*: `^PROD-[A-Z0-9]*$` |
| `name` | `string` | Required | The plan name.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.*$` |
| `status` | [`PlanRequestStatus \| undefined`](../../doc/models/plan-request-status.md) | Optional | The initial state of the plan. Allowed input values are CREATED and ACTIVE.<br><br>**Default**: `PlanRequestStatus.Active`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `description` | `string \| undefined` | Optional | The detailed description of the plan.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.*$` |
| `billingCycles` | [`SubscriptionBillingCycle[]`](../../doc/models/subscription-billing-cycle.md) | Required | An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `12` |
| `paymentPreferences` | [`PaymentPreferences`](../../doc/models/payment-preferences.md) | Required | The payment preferences for a subscription. |
| `merchantPreferences` | [`MerchantPreferences \| undefined`](../../doc/models/merchant-preferences.md) | Optional | The merchant preferences for a subscription. |
| `taxes` | [`Taxes \| undefined`](../../doc/models/taxes.md) | Optional | The tax details. |
| `quantitySupported` | `boolean \| undefined` | Optional | Indicates whether you can subscribe to this plan by providing a quantity for the goods or service.<br><br>**Default**: `false` |

## Example

```ts
import {
  IntervalUnit,
  PlanRequest,
  PlanRequestStatus,
  SetupFeeFailureAction,
  SubscriptionPricingModel,
  TenureType,
} from '@paypal/paypal-server-sdk';

const planRequest: PlanRequest = {
  productId: 'product_id4',
  name: 'name0',
  billingCycles: [
    {
      frequency: {
        intervalUnit: IntervalUnit.Day,
        intervalCount: 1,
      },
      tenureType: TenureType.Regular,
      sequence: 8,
      pricingScheme: {
        fixedPrice: {
          currencyCode: 'currency_code4',
          value: 'value0',
        },
        pricingModel: SubscriptionPricingModel.Volume,
        tiers: [
          {
            startingQuantity: 'starting_quantity8',
            amount: {
              currencyCode: 'currency_code6',
              value: 'value0',
            },
            endingQuantity: 'ending_quantity6',
          },
          {
            startingQuantity: 'starting_quantity8',
            amount: {
              currencyCode: 'currency_code6',
              value: 'value0',
            },
            endingQuantity: 'ending_quantity6',
          },
          {
            startingQuantity: 'starting_quantity8',
            amount: {
              currencyCode: 'currency_code6',
              value: 'value0',
            },
            endingQuantity: 'ending_quantity6',
          }
        ],
        createTime: 'create_time4',
      },
      totalCycles: 1,
    }
  ],
  paymentPreferences: {
    autoBillOutstanding: true,
    setupFee: {
      currencyCode: 'currency_code8',
      value: 'value4',
    },
    setupFeeFailureAction: SetupFeeFailureAction.Cancel,
    paymentFailureThreshold: 0,
  },
  status: PlanRequestStatus.Active,
  description: 'description0',
  merchantPreferences: {
    returnUrl: 'return_url4',
    cancelUrl: 'cancel_url6',
  },
  taxes: {
    percentage: 'percentage8',
    inclusive: false,
  },
  quantitySupported: false,
};
```

