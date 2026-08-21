
# Authorization Status with Details

The status fields and status details for an authorized payment.

## Structure

`AuthorizationStatusWithDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`AuthorizationStatus \| undefined`](../../doc/models/authorization-status.md) | Optional, Read-only | The status for the authorized payment. |
| `statusDetails` | [`AuthorizationStatusDetails \| undefined`](../../doc/models/authorization-status-details.md) | Optional | The details of the authorized payment status. |

## Example

```ts
import {
  AuthorizationIncompleteReason,
  AuthorizationStatusWithDetails,
} from '@paypal/paypal-server-sdk';

const authorizationStatusWithDetails: AuthorizationStatusWithDetails = {
  statusDetails: {
    reason: AuthorizationIncompleteReason.PendingReview,
  },
};
```

