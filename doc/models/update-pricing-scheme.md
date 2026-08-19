
# Update Pricing Scheme

The update pricing scheme request details.

## Structure

`UpdatePricingScheme`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingCycleSequence` | `number` | Required | The billing cycle sequence.<br><br>**Constraints**: `>= 1`, `<= 99` |
| `pricingScheme` | [`SubscriptionPricingScheme`](../../doc/models/subscription-pricing-scheme.md) | Required | The pricing scheme details. |

## Example

```ts
import {
  SubscriptionPricingModel,
  UpdatePricingScheme,
} from '@paypal/paypal-server-sdk';

const updatePricingScheme: UpdatePricingScheme = {
  billingCycleSequence: 99,
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
};
```

