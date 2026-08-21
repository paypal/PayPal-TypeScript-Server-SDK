
# Cart Information

The cart information.

## Structure

`CartInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemDetails` | [`ItemDetails[] \| undefined`](../../doc/models/item-details.md) | Optional | An array of item details.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `32767` |
| `taxInclusive` | `boolean \| undefined` | Optional | Indicates whether the item amount or the shipping amount already includes tax.<br><br>**Default**: `false` |
| `paypalInvoiceId` | `string \| undefined` | Optional | The ID of the invoice. Appears for only PayPal-generated invoices.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |

## Example

```ts
import { CartInformation } from '@paypal/paypal-server-sdk';

const cartInformation: CartInformation = {
  itemDetails: [
    {
      itemCode: 'item_code0',
      itemName: 'item_name8',
      itemDescription: 'item_description4',
      itemOptions: 'item_options2',
      itemQuantity: 'item_quantity2',
    }
  ],
  taxInclusive: false,
  paypalInvoiceId: 'paypal_invoice_id4',
};
```

