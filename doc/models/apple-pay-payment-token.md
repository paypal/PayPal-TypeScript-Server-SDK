
# Apple Pay Payment Token

A resource representing a response for Apple Pay.

## Structure

`ApplePayPaymentToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`ApplePayCard \| undefined`](../../doc/models/apple-pay-card.md) | Optional | The payment card to be used to fund a payment. Can be a credit or debit card. |

## Example

```ts
import {
  ApplePayPaymentToken,
  CardBrand,
  CardType,
} from '@paypal/paypal-server-sdk';

const applePayPaymentToken: ApplePayPaymentToken = {
  card: {
    name: 'name6',
    type: CardType.Unknown,
    brand: CardBrand.CbNationale,
    billingAddress: {
      countryCode: 'country_code8',
      addressLine1: 'address_line_12',
      addressLine2: 'address_line_28',
      adminArea2: 'admin_area_28',
      adminArea1: 'admin_area_14',
      postalCode: 'postal_code0',
    },
  },
};
```

