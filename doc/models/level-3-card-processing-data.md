
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
| `shipsFromPostalCode` | `string \| undefined` | Optional | Use this field to specify the postal code of the shipping location.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `60`, *Pattern*: `^[a-zA-Z0-9_'.-]*$` |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | A list of the items that were purchased with this payment. If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `100` |

## Example (as JSON)

```json
{
  "shipping_amount": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "duty_amount": {
    "currency_code": "currency_code6",
    "value": "value2"
  },
  "discount_amount": {
    "currency_code": "currency_code2",
    "value": "value8"
  },
  "shipping_address": {
    "address_line_1": "address_line_10",
    "address_line_2": "address_line_20",
    "admin_area_2": "admin_area_24",
    "admin_area_1": "admin_area_16",
    "postal_code": "postal_code2",
    "country_code": "country_code0"
  },
  "ships_from_postal_code": "ships_from_postal_code6"
}
```

