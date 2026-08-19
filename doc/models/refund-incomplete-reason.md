
# Refund Incomplete Reason

The reason why the refund has the `PENDING` or `FAILED` status.

## Enumeration

`RefundIncompleteReason`

## Fields

| Name | Description |
|  --- | --- |
| `Echeck` | The customer's account is funded through an eCheck, which has not yet cleared. |

## Example

```ts
import { RefundIncompleteReason } from '@paypal/paypal-server-sdk';

const refundIncompleteReason = RefundIncompleteReason.Echeck;
```

