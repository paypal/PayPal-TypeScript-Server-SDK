
# Apple Pay Request Card

The payment card to be used to fund a payment. Can be a credit or debit card.

## Structure

`ApplePayRequestCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`CardType \| undefined`](../../doc/models/card-type.md) | Optional | Type of card. i.e Credit, Debit and so on.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `brand` | [`CardBrand \| undefined`](../../doc/models/card-brand.md) | Optional | The card network or brand. Applies to credit, debit, gift, and payment cards.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `billingAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). |

## Example

```ts
import {
  ApplePayRequestCard,
  CardBrand,
  CardType,
} from '@paypal/paypal-server-sdk';

const applePayRequestCard: ApplePayRequestCard = {
  type: CardType.Debit,
  brand: CardBrand.Rupay,
  billingAddress: {
    countryCode: 'country_code8',
    addressLine1: 'address_line_12',
    addressLine2: 'address_line_28',
    adminArea2: 'admin_area_28',
    adminArea1: 'admin_area_14',
    postalCode: 'postal_code0',
  },
};
```

