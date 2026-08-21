
# Capture Status with Details

The status and status details of a captured payment.

## Structure

`CaptureStatusWithDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`CaptureStatus \| undefined`](../../doc/models/capture-status.md) | Optional, Read-only | The status of the captured payment. |
| `statusDetails` | [`CaptureStatusDetails \| undefined`](../../doc/models/capture-status-details.md) | Optional | The details of the captured payment status. |

## Example

```ts
import {
  CaptureIncompleteReason,
  CaptureStatusWithDetails,
} from '@paypal/paypal-server-sdk';

const captureStatusWithDetails: CaptureStatusWithDetails = {
  statusDetails: {
    reason: CaptureIncompleteReason.VerificationRequired,
  },
};
```

