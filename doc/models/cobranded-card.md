
# Cobranded Card

Details about the merchant cobranded card used for order purchase.

## Structure

`CobrandedCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `labels` | `string[] \| undefined` | Optional | Array of labels for the cobranded card.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `25`, *Minimum Length*: `1`, *Maximum Length*: `256` |
| `payee` | [`PayeeBase \| undefined`](../../doc/models/payee-base.md) | Optional | The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee. |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example

```ts
import { CobrandedCard } from '@paypal/paypal-server-sdk';

const cobrandedCard: CobrandedCard = {
  labels: [
    'labels2'
  ],
  payee: {
    emailAddress: 'email_address4',
    merchantId: 'merchant_id6',
  },
  amount: {
    currencyCode: 'currency_code6',
    value: 'value0',
  },
};
```

