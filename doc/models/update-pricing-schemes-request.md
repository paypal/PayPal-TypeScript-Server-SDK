
# Update Pricing Schemes Request

The update pricing scheme request details.

## Structure

`UpdatePricingSchemesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingSchemes` | [`UpdatePricingScheme[]`](../../doc/models/update-pricing-scheme.md) | Required | An array of pricing schemes.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `99` |

## Example

```ts
import {
  SubscriptionPricingModel,
  UpdatePricingSchemesRequest,
} from '@paypal/paypal-server-sdk';

const updatePricingSchemesRequest: UpdatePricingSchemesRequest = {
  pricingSchemes: [
    {
      billingCycleSequence: 34,
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
    }
  ],
};
```

