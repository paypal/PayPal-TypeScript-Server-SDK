
# Vault Apple Pay Request

A resource representing a request to vault Apple Pay.

## Structure

`VaultApplePayRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | Encrypted Apple Pay token, containing card information. This token would be base64 encoded.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10000`, *Pattern*: `^.*$` |
| `card` | [`ApplePayRequestCard \| undefined`](../../doc/models/apple-pay-request-card.md) | Optional | The payment card to be used to fund a payment. Can be a credit or debit card. |

## Example

```ts
import {
  CardBrand,
  CardType,
  VaultApplePayRequest,
} from '@paypal/paypal-server-sdk';

const vaultApplePayRequest: VaultApplePayRequest = {
  token: 'token8',
  card: {
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

