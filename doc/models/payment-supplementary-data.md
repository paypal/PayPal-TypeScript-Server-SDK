
# Payment Supplementary Data

The supplementary data.

## Structure

`PaymentSupplementaryData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `relatedIds` | [`RelatedIdentifiers \| undefined`](../../doc/models/related-identifiers.md) | Optional | Identifiers related to a specific resource. |

## Example

```ts
import { PaymentSupplementaryData } from '@paypal/paypal-server-sdk';

const paymentSupplementaryData: PaymentSupplementaryData = {
  relatedIds: {
    orderId: 'order_id2',
    authorizationId: 'authorization_id0',
    captureId: 'capture_id0',
  },
};
```

