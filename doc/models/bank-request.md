
# Bank Request

A Resource representing a request to vault a Bank used for ACH Debit.

## Structure

`BankRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `achDebit` | `unknown \| undefined` | Optional | A Resource representing a request to vault a ACH Debit. |
| `sepaDebit` | [`SepaDebitRequest \| undefined`](../../doc/models/sepa-debit-request.md) | Optional | An API resource denoting a request to securely store a SEPA Debit. |

## Example

```ts
import { BankRequest } from '@paypal/paypal-server-sdk';

const bankRequest: BankRequest = {
  achDebit: { 'key1': 'val1', 'key2': 'val2' },
  sepaDebit: {
    experienceContext: {
      returnUrl: 'return_url4',
      cancelUrl: 'cancel_url6',
      locale: 'locale6',
    },
  },
};
```

