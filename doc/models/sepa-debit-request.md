
# Sepa Debit Request

An API resource denoting a request to securely store a SEPA Debit.

## Structure

`SepaDebitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `experienceContext` | [`SepaDebitExperienceContext \| undefined`](../../doc/models/sepa-debit-experience-context.md) | Optional | Customizes the payer experience during the approval process for the SEPA Debit payment. |

## Example

```ts
import { SepaDebitRequest } from '@paypal/paypal-server-sdk';

const sepaDebitRequest: SepaDebitRequest = {
  experienceContext: {
    returnUrl: 'return_url4',
    cancelUrl: 'cancel_url6',
    locale: 'locale6',
  },
};
```

