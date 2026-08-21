
# Payment Collection

The collection of payments, or transactions, for a purchase unit in an order. For example, authorized payments, captured payments, and refunds.

## Structure

`PaymentCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizations` | [`AuthorizationWithAdditionalData[] \| undefined`](../../doc/models/authorization-with-additional-data.md) | Optional | An array of authorized payments for a purchase unit. A purchase unit can have zero or more authorized payments. |
| `captures` | [`OrdersCapture[] \| undefined`](../../doc/models/orders-capture.md) | Optional | An array of captured payments for a purchase unit. A purchase unit can have zero or more captured payments. |
| `refunds` | [`Refund[] \| undefined`](../../doc/models/refund.md) | Optional | An array of refunds for a purchase unit. A purchase unit can have zero or more refunds. |

## Example

```ts
import {
  AuthorizationIncompleteReason,
  CaptureIncompleteReason,
  PaymentCollection,
  RefundIncompleteReason,
} from '@paypal/paypal-server-sdk';

const paymentCollection: PaymentCollection = {
  authorizations: [
    {
      statusDetails: {
        reason: AuthorizationIncompleteReason.PendingReview,
      },
      amount: {
        currencyCode: 'currency_code6',
        value: 'value0',
      },
    }
  ],
  captures: [
    {
      statusDetails: {
        reason: CaptureIncompleteReason.VerificationRequired,
      },
      amount: {
        currencyCode: 'currency_code6',
        value: 'value0',
      },
    },
    {
      statusDetails: {
        reason: CaptureIncompleteReason.VerificationRequired,
      },
      amount: {
        currencyCode: 'currency_code6',
        value: 'value0',
      },
    },
    {
      statusDetails: {
        reason: CaptureIncompleteReason.VerificationRequired,
      },
      amount: {
        currencyCode: 'currency_code6',
        value: 'value0',
      },
    }
  ],
  refunds: [
    {
      statusDetails: {
        reason: RefundIncompleteReason.Echeck,
      },
      amount: {
        currencyCode: 'currency_code6',
        value: 'value0',
      },
    }
  ],
};
```

