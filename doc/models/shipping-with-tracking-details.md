
# Shipping With Tracking Details

The order shipping details.

## Structure

`ShippingWithTrackingDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`ShippingName \| undefined`](../../doc/models/shipping-name.md) | Optional | The name of the party. |
| `type` | [`FullfillmentType \| undefined`](../../doc/models/fullfillment-type.md) | Optional | A classification for the method of purchase fulfillment (e.g shipping, in-store pickup, etc). Either `type` or `options` may be present, but not both.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `options` | [`ShippingOption[] \| undefined`](../../doc/models/shipping-option.md) | Optional | An array of shipping options that the payee or merchant offers to the payer to ship or pick up their items.<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `10` |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). |
| `trackers` | [`OrderTrackerResponse[] \| undefined`](../../doc/models/order-tracker-response.md) | Optional | An array of trackers for a transaction. |

## Example (as JSON)

```json
{
  "name": {
    "full_name": "full_name6"
  },
  "type": "SHIPPING",
  "options": [
    {
      "id": "id2",
      "label": "label2",
      "type": "SHIPPING",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "selected": false
    },
    {
      "id": "id2",
      "label": "label2",
      "type": "SHIPPING",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "selected": false
    }
  ],
  "address": {
    "address_line_1": "address_line_16",
    "address_line_2": "address_line_26",
    "admin_area_2": "admin_area_20",
    "admin_area_1": "admin_area_12",
    "postal_code": "postal_code8",
    "country_code": "country_code6"
  },
  "trackers": [
    {
      "id": "id2",
      "status": "CANCELLED",
      "items": [
        {
          "name": "name8",
          "quantity": "quantity4",
          "sku": "sku6",
          "url": "url2",
          "image_url": "image_url4"
        }
      ],
      "links": [
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        },
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        }
      ],
      "create_time": "create_time8"
    },
    {
      "id": "id2",
      "status": "CANCELLED",
      "items": [
        {
          "name": "name8",
          "quantity": "quantity4",
          "sku": "sku6",
          "url": "url2",
          "image_url": "image_url4"
        }
      ],
      "links": [
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        },
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        }
      ],
      "create_time": "create_time8"
    }
  ]
}
```

