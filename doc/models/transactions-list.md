
# Transactions List

The list transactions for a subscription request details.

## Structure

`TransactionsList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactions` | [`SubscriptionTransactionDetails[] \| undefined`](../../doc/models/subscription-transaction-details.md) | Optional | An array of transactions.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `32767` |
| `totalItems` | `number \| undefined` | Optional | The total number of items.<br><br>**Constraints**: `>= 0`, `<= 500000000` |
| `totalPages` | `number \| undefined` | Optional | The total number of pages.<br><br>**Constraints**: `>= 0`, `<= 100000000` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |

## Example

```ts
import { TransactionsList } from '@paypal/paypal-server-sdk';

const transactionsList: TransactionsList = {
  transactions: [
    {
      id: '',
      amountWithBreakdown: {
        grossAmount: {
          currencyCode: 'currency_code4',
          value: 'value0',
        },
        totalItemAmount: {
          currencyCode: 'currency_code8',
          value: 'value4',
        },
        feeAmount: {
          currencyCode: 'currency_code2',
          value: 'value4',
        },
        shippingAmount: {
          currencyCode: 'currency_code0',
          value: 'value6',
        },
        taxAmount: {
          currencyCode: 'currency_code2',
          value: 'value8',
        },
        netAmount: {
          currencyCode: 'currency_code6',
          value: 'value2',
        },
      },
      time: 'time8',
      payerName: {
        prefix: 'prefix8',
        givenName: 'given_name2',
        surname: 'surname8',
        middleName: 'middle_name0',
        suffix: 'suffix0',
      },
      payerEmail: 'payer_email6',
    },
    {
      id: '',
      amountWithBreakdown: {
        grossAmount: {
          currencyCode: 'currency_code4',
          value: 'value0',
        },
        totalItemAmount: {
          currencyCode: 'currency_code8',
          value: 'value4',
        },
        feeAmount: {
          currencyCode: 'currency_code2',
          value: 'value4',
        },
        shippingAmount: {
          currencyCode: 'currency_code0',
          value: 'value6',
        },
        taxAmount: {
          currencyCode: 'currency_code2',
          value: 'value8',
        },
        netAmount: {
          currencyCode: 'currency_code6',
          value: 'value2',
        },
      },
      time: 'time8',
      payerName: {
        prefix: 'prefix8',
        givenName: 'given_name2',
        surname: 'surname8',
        middleName: 'middle_name0',
        suffix: 'suffix0',
      },
      payerEmail: 'payer_email6',
    }
  ],
  totalItems: 36,
  totalPages: 72,
};
```

