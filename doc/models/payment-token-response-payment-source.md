
# Payment Token Response Payment Source

The vaulted payment method details.

## Structure

`PaymentTokenResponsePaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardPaymentTokenEntity \| undefined`](../../doc/models/card-payment-token-entity.md) | Optional | Full representation of a Card Payment Token including network token. |
| `paypal` | [`PaypalPaymentToken \| undefined`](../../doc/models/paypal-payment-token.md) | Optional, Read-only | Full representation of a PayPal Payment Token. |
| `venmo` | [`VenmoPaymentToken \| undefined`](../../doc/models/venmo-payment-token.md) | Optional, Read-only | Full representation of a Venmo Payment Token. |
| `applePay` | [`ApplePayPaymentToken \| undefined`](../../doc/models/apple-pay-payment-token.md) | Optional | A resource representing a response for Apple Pay. |

## Example

```ts
import {
  CardBrand,
  CardType,
  PaymentTokenResponsePaymentSource,
} from '@paypal/paypal-server-sdk';

const paymentTokenResponsePaymentSource: PaymentTokenResponsePaymentSource = {
  card: {
    name: 'name6',
    brand: CardBrand.CbNationale,
    expiry: 'expiry4',
    billingAddress: {
      countryCode: 'country_code8',
      addressLine1: 'address_line_12',
      addressLine2: 'address_line_28',
      adminArea2: 'admin_area_28',
      adminArea1: 'admin_area_14',
      postalCode: 'postal_code0',
    },
  },
  applePay: {
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
  },
};
```

