
# Fulfillment Type

A classification for the method of purchase fulfillment (e.g shipping, in-store pickup, etc). Either `type` or `options` may be present, but not both.

## Enumeration

`FulfillmentType`

## Fields

| Name | Description |
|  --- | --- |
| `Shipping` | The payer intends to receive the items at a specified address. |
| `PickupInPerson` | DEPRECATED. Please use "PICKUP_FROM_PERSON" instead. |
| `PickupInStore` | The payer intends to pick up the item(s) from the payee's physical store. Also termed as BOPIS, "Buy Online, Pick-up in Store". Seller protection is provided with this option. |
| `PickupFromPerson` | The payer intends to pick up the item(s) from the payee in person. Also termed as BOPIP, "Buy Online, Pick-up in Person". Seller protection is not available, since the payer is receiving the item from the payee in person, and can validate the item prior to payment. |

