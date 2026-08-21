
# Setup Token Response Payment Source

The setup payment method details.

## Structure

`SetupTokenResponsePaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`SetupTokenResponseCard \| undefined`](../../doc/models/setup-token-response-card.md) | Optional | - |
| `paypal` | [`PaypalPaymentToken \| undefined`](../../doc/models/paypal-payment-token.md) | Optional, Read-only | Full representation of a PayPal Payment Token. |
| `venmo` | [`VenmoPaymentToken \| undefined`](../../doc/models/venmo-payment-token.md) | Optional, Read-only | Full representation of a Venmo Payment Token. |

## Example

```ts
import {
  CardBrand,
  SetupTokenResponsePaymentSource,
} from '@paypal/paypal-server-sdk';

const setupTokenResponsePaymentSource: SetupTokenResponsePaymentSource = {
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
};
```

