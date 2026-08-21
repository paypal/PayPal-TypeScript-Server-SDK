
# Level 3 Card Processing Data

The level 3 card processing data collections, If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 3 data for your business.

## Structure

`Level3CardProcessingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shippingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `dutyAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `discountAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `shippingAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). |
| `shipsFromPostalCode` | `string \| undefined` | Optional | Use this field to specify the postal code of the shipping location.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `60`, *Pattern*: `^[a-zA-Z0-9_'.-]*$` |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | A list of the items that were purchased with this payment. If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `100` |

## Example

```ts
import { Level3CardProcessingData } from '@paypal/paypal-server-sdk';

const level3CardProcessingData: Level3CardProcessingData = {
  shippingAmount: {
    currencyCode: 'currency_code0',
    value: 'value6',
  },
  dutyAmount: {
    currencyCode: 'currency_code6',
    value: 'value2',
  },
  discountAmount: {
    currencyCode: 'currency_code2',
    value: 'value8',
  },
  shippingAddress: {
    countryCode: 'country_code0',
    addressLine1: 'address_line_10',
    addressLine2: 'address_line_20',
    adminArea2: 'admin_area_24',
    adminArea1: 'admin_area_16',
    postalCode: 'postal_code2',
  },
  shipsFromPostalCode: 'ships_from_postal_code8',
};
```

