
# Plan Collection

The list of plans with details.

## Structure

`PlanCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `plans` | [`BillingPlan[] \| undefined`](../../doc/models/billing-plan.md) | Optional | An array of plans.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `32767` |
| `totalItems` | `number \| undefined` | Optional | The total number of items.<br><br>**Constraints**: `>= 0`, `<= 500000000` |
| `totalPages` | `number \| undefined` | Optional | The total number of pages.<br><br>**Constraints**: `>= 0`, `<= 100000000` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |

## Example

```ts
import {
  PlanCollection,
  SubscriptionPlanStatus,
} from '@paypal/paypal-server-sdk';

const planCollection: PlanCollection = {
  plans: [
    {
      productId: 'product_id0',
      name: 'name4',
      status: SubscriptionPlanStatus.Inactive,
      description: 'description4',
    },
    {
      productId: 'product_id0',
      name: 'name4',
      status: SubscriptionPlanStatus.Inactive,
      description: 'description4',
    },
    {
      productId: 'product_id0',
      name: 'name4',
      status: SubscriptionPlanStatus.Inactive,
      description: 'description4',
    }
  ],
  totalItems: 244,
  totalPages: 24,
};
```

