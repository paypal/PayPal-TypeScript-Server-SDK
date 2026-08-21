
# Payment Token Request

Payment Token Request where the `source` defines the type of instrument to be stored.

## Structure

`PaymentTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`Customer \| undefined`](../../doc/models/customer.md) | Optional | This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details. |
| `paymentSource` | [`PaymentTokenRequestPaymentSource`](../../doc/models/payment-token-request-payment-source.md) | Required | The payment method to vault with the instrument details. |

## Example

```ts
import {
  CardBrand,
  PaymentTokenRequest,
  VaultTokenRequestType,
} from '@paypal/paypal-server-sdk';

const paymentTokenRequest: PaymentTokenRequest = {
  paymentSource: {
    card: {
      name: 'name6',
      number: 'number6',
      expiry: 'expiry4',
      securityCode: 'security_code8',
      brand: CardBrand.CbNationale,
    },
    token: {
      id: 'id6',
      type: VaultTokenRequestType.SetupToken,
    },
  },
  customer: {
    id: 'id0',
    merchantCustomerId: 'merchant_customer_id2',
  },
};
```

