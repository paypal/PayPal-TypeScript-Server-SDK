
# Refund Request

Refunds a captured payment, by ID. For a full refund, include an empty request body. For a partial refund, include an amount object in the request body.

## Structure

`RefundRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `customId` | `string \| undefined` | Optional | The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. The pattern is defined by an external party and supports Unicode.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.*$` |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice ID for this order. The pattern is defined by an external party and supports Unicode.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.*$` |
| `noteToPayer` | `string \| undefined` | Optional | The reason for the refund. Appears in both the payer's transaction history and the emails that the payer receives. The pattern is defined by an external party and supports Unicode.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^.*$` |
| `paymentInstruction` | [`RefundPaymentInstruction \| undefined`](../../doc/models/refund-payment-instruction.md) | Optional | Any additional payments instructions during refund payment processing. This object is only applicable to merchants that have been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability. Please speak to your account manager if you want to use this capability. |

## Example

```ts
import { RefundRequest } from '@paypal/paypal-server-sdk';

const refundRequest: RefundRequest = {
  amount: {
    currencyCode: 'currency_code6',
    value: 'value0',
  },
  customId: 'custom_id2',
  invoiceId: 'invoice_id4',
  noteToPayer: 'note_to_payer6',
  paymentInstruction: {
    platformFees: [
      {
        amount: {
          currencyCode: 'currency_code6',
          value: 'value0',
        },
      },
      {
        amount: {
          currencyCode: 'currency_code6',
          value: 'value0',
        },
      },
      {
        amount: {
          currencyCode: 'currency_code6',
          value: 'value0',
        },
      }
    ],
  },
};
```

