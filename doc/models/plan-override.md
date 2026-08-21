
# Plan Override

An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object.

## Structure

`PlanOverride`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingCycles` | [`BillingCycleOverride[] \| undefined`](../../doc/models/billing-cycle-override.md) | Optional | An array of billing cycles for trial billing and regular billing. The subscription billing cycle definition has to adhere to the plan billing cycle definition.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `12` |
| `paymentPreferences` | [`PaymentPreferencesOverride \| undefined`](../../doc/models/payment-preferences-override.md) | Optional | The payment preferences to override at subscription level. |
| `taxes` | [`TaxesOverride \| undefined`](../../doc/models/taxes-override.md) | Optional | The tax details. |

## Example

```ts
import {
  PlanOverride,
  SetupFeeFailureAction,
  SubscriptionPricingModel,
} from '@paypal/paypal-server-sdk';

const planOverride: PlanOverride = {
  billingCycles: [
    {
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
      totalCycles: 198,
    },
    {
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
      totalCycles: 198,
    },
    {
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
      totalCycles: 198,
    }
  ],
  paymentPreferences: {
    autoBillOutstanding: false,
    setupFee: {
      currencyCode: 'currency_code8',
      value: 'value4',
    },
    setupFeeFailureAction: SetupFeeFailureAction.Continue,
    paymentFailureThreshold: 104,
  },
  taxes: {
    percentage: 'percentage8',
    inclusive: false,
  },
};
```

