
# Order Tracker Item

The details of the items in the shipment.

## Structure

`OrderTrackerItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The item name or title.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `quantity` | `string \| undefined` | Optional | The item quantity. Must be a whole number.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10`, *Pattern*: `^[1-9][0-9]{0,9}$` |
| `sku` | `string \| undefined` | Optional | The stock keeping unit (SKU) for the item. This can contain unicode characters.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `url` | `string \| undefined` | Optional | The URL to the item being purchased. Visible to buyer and used in buyer experiences.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048` |
| `imageUrl` | `string \| undefined` | Optional | The URL of the item's image. File type and size restrictions apply. An image that violates these restrictions will not be honored.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048`, *Pattern*: `^(https:)([/\|.\|\w\|\s\|-])*\.(?:jpg\|gif\|png\|jpeg\|JPG\|GIF\|PNG\|JPEG)` |
| `upc` | [`UniversalProductCode \| undefined`](../../doc/models/universal-product-code.md) | Optional | The Universal Product Code of the item. |

## Example (as JSON)

```json
{
  "name": "name6",
  "quantity": "quantity2",
  "sku": "sku2",
  "url": "url0",
  "image_url": "image_url2"
}
```

