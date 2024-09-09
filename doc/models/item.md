
# Item

The details for the items to be purchased.

## Structure

`Item`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The item name or title.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `unitAmount` | [`Money`](../../doc/models/money.md) | Required | The currency and amount for a financial transaction, such as a balance or payment due. |
| `tax` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `quantity` | `string` | Required | The item quantity. Must be a whole number.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[1-9][0-9]{0,9}$` |
| `description` | `string \| undefined` | Optional | The detailed item description.<br>**Constraints**: *Maximum Length*: `127` |
| `sku` | `string \| undefined` | Optional | The stock keeping unit (SKU) for the item.<br>**Constraints**: *Maximum Length*: `127` |
| `url` | `string \| undefined` | Optional | The URL to the item being purchased. Visible to buyer and used in buyer experiences.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048` |
| `category` | [`ItemCategory \| undefined`](../../doc/models/item-category.md) | Optional | The item category type.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `imageUrl` | `string \| undefined` | Optional | The URL of the item's image. File type and size restrictions apply. An image that violates these restrictions will not be honored.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048`, *Pattern*: `^(https:)([/\|.\|\w\|\s\|-])*\.(?:jpg\|gif\|png\|jpeg\|JPG\|GIF\|PNG\|JPEG)` |
| `upc` | [`UniversalProductCode \| undefined`](../../doc/models/universal-product-code.md) | Optional | The Universal Product Code of the item. |

## Example (as JSON)

```json
{
  "name": "name2",
  "unit_amount": {
    "currency_code": "currency_code2",
    "value": "value8"
  },
  "tax": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "quantity": "quantity8",
  "description": "description2",
  "sku": "sku8",
  "url": "url6",
  "category": "DIGITAL_GOODS"
}
```

