
# Platform Fee

The platform or partner fee, commission, or brokerage fee that is associated with the transaction. Not a separate or isolated transaction leg from the external perspective. The platform fee is limited in scope and is always associated with the original payment for the purchase unit.

## Structure

`PlatformFee`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Money`](../../doc/models/money.md) | Required | The currency and amount for a financial transaction, such as a balance or payment due. |
| `payee` | [`PayeeBase \| undefined`](../../doc/models/payee-base.md) | Optional | The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee. |

## Example

```ts
import { PlatformFee } from '@paypal/paypal-server-sdk';

const platformFee: PlatformFee = {
  amount: {
    currencyCode: 'currency_code6',
    value: 'value0',
  },
  payee: {
    emailAddress: 'email_address4',
    merchantId: 'merchant_id6',
  },
};
```

