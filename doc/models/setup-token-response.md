
# Setup Token Response

Minimal representation of a cached setup token.

## Structure

`SetupTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the vaulted payment source. This ID should be stored on the merchant's server so the saved payment source can be used for future transactions.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `customer` | [`Customer \| undefined`](../../doc/models/customer.md) | Optional | This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details. |
| `status` | [`PaymentTokenStatus \| undefined`](../../doc/models/payment-token-status.md) | Optional | The status of the payment token.<br><br>**Default**: `PaymentTokenStatus.Created`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `paymentSource` | [`SetupTokenResponsePaymentSource \| undefined`](../../doc/models/setup-token-response-payment-source.md) | Optional | The setup payment method details. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of related [HATEOAS links](https://developer.paypal.com/api/rest/responses/#hateoas).<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `32` |

## Example

```ts
import {
  CardBrand,
  PaymentTokenStatus,
  SetupTokenResponse,
} from '@paypal/paypal-server-sdk';

const setupTokenResponse: SetupTokenResponse = {
  id: 'id2',
  customer: {
    id: 'id0',
    merchantCustomerId: 'merchant_customer_id2',
  },
  status: PaymentTokenStatus.Created,
  paymentSource: {
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
  },
};
```

