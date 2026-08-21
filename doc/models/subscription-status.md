
# Subscription Status

The status of the subscription.

## Enumeration

`SubscriptionStatus`

## Fields

| Name | Description |
|  --- | --- |
| `ApprovalPending` | The subscription is created but not yet approved by the buyer. |
| `Approved` | The buyer has approved the subscription. |
| `Active` | The subscription is active. |
| `Suspended` | The subscription is suspended. |
| `Cancelled` | The subscription is cancelled. |
| `Expired` | The subscription is expired. |

## Example

```ts
import { SubscriptionStatus } from '@paypal/paypal-server-sdk';

const subscriptionStatus = SubscriptionStatus.Cancelled;
```

