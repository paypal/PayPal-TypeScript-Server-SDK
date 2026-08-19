
# Customer Vault Payment Tokens Response

Collection of payment tokens saved for a given customer.

## Structure

`CustomerVaultPaymentTokensResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalItems` | `number \| undefined` | Optional | Total number of items.<br><br>**Constraints**: `>= 1`, `<= 50` |
| `totalPages` | `number \| undefined` | Optional | Total number of pages.<br><br>**Constraints**: `>= 1`, `<= 10` |
| `customer` | [`VaultResponseCustomer \| undefined`](../../doc/models/vault-response-customer.md) | Optional | This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details. |
| `paymentTokens` | [`PaymentTokenResponse[] \| undefined`](../../doc/models/payment-token-response.md) | Optional | **Constraints**: *Minimum Items*: `0`, *Maximum Items*: `64` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of related [HATEOAS links](https://developer.paypal.com/api/rest/responses/#hateoas).<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `32` |

## Example

```ts
import {
  CardBrand,
  CardType,
  CustomerVaultPaymentTokensResponse,
} from '@paypal/paypal-server-sdk';

const customerVaultPaymentTokensResponse: CustomerVaultPaymentTokensResponse = {
  totalItems: 50,
  totalPages: 10,
  customer: {
    id: 'id0',
    merchantCustomerId: 'merchant_customer_id2',
  },
  paymentTokens: [
    {
      id: 'id4',
      customer: {
        id: 'id0',
        merchantCustomerId: 'merchant_customer_id2',
      },
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
      },
    },
    {
      id: 'id4',
      customer: {
        id: 'id0',
        merchantCustomerId: 'merchant_customer_id2',
      },
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
      },
    }
  ],
};
```

