
# Suspend Subscription

The suspend subscription request details.

## Structure

`SuspendSubscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string` | Required | The reason for suspension of the Subscription.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128`, *Pattern*: `^.*$` |

## Example

```ts
import { SuspendSubscription } from '@paypal/paypal-server-sdk';

const suspendSubscription: SuspendSubscription = {
  reason: 'reason4',
};
```

