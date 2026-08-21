
# Subscription Pricing Model

The pricing model for tiered plan. The `tiers` parameter is required.

## Enumeration

`SubscriptionPricingModel`

## Fields

| Name | Description |
|  --- | --- |
| `Volume` | A volume pricing model. |
| `Tiered` | A tiered pricing model. |

## Example

```ts
import { SubscriptionPricingModel } from '@paypal/paypal-server-sdk';

const subscriptionPricingModel = SubscriptionPricingModel.Volume;
```

