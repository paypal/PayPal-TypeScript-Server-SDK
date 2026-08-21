
# Subscription Payment Source Response

The payment source used to fund the payment.

## Structure

`SubscriptionPaymentSourceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardResponseWithBillingAddress \| undefined`](../../doc/models/card-response-with-billing-address.md) | Optional | The payment card used to fund the payment. Card can be a credit or debit card. |

## Example

```ts
import { SubscriptionPaymentSourceResponse } from '@paypal/paypal-server-sdk';

const subscriptionPaymentSourceResponse: SubscriptionPaymentSourceResponse = {
  card: {
    name: 'name6',
    billingAddress: {
      countryCode: 'country_code8',
      addressLine1: 'address_line_12',
      addressLine2: 'address_line_28',
      adminArea2: 'admin_area_28',
      adminArea1: 'admin_area_14',
      postalCode: 'postal_code0',
    },
    expiry: 'expiry4',
    currencyCode: 'currency_code2',
  },
};
```

