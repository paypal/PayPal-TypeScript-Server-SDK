
# Subscription Collection

The list of subscriptions.

## Structure

`SubscriptionCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptions` | [`Subscription[] \| undefined`](../../doc/models/subscription.md) | Optional | An array of subscriptions.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `32767` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |

## Example

```ts
import { SubscriptionCollection } from '@paypal/paypal-server-sdk';

const subscriptionCollection: SubscriptionCollection = {
  subscriptions: [
    {
      planId: 'plan_id8',
      startTime: 'start_time0',
      quantity: 'quantity2',
      shippingAmount: {
        currencyCode: 'currency_code0',
        value: 'value6',
      },
    },
    {
      planId: 'plan_id8',
      startTime: 'start_time0',
      quantity: 'quantity2',
      shippingAmount: {
        currencyCode: 'currency_code0',
        value: 'value6',
      },
    }
  ],
};
```

