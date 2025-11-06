
# Item Details

The item details.

## Structure

`ItemDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemCode` | `string \| undefined` | Optional | An item code that identifies a merchant's goods or service.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1000`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |
| `itemName` | `string \| undefined` | Optional | The item name.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `200`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |
| `itemDescription` | `string \| undefined` | Optional | The item description.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2000`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |
| `itemOptions` | `string \| undefined` | Optional | The item options. Describes option choices on the purchase of the item in some detail.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4000`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |
| `itemQuantity` | `string \| undefined` | Optional | The number of purchased units of goods or a service.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4000`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |
| `itemUnitPrice` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `itemAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `discountAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `adjustmentAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `giftWrapAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `taxPercentage` | `string \| undefined` | Optional | The percentage, as a fixed-point, signed decimal number. For example, define a 19.99% interest rate as `19.99`.<br><br>**Constraints**: *Pattern*: `^((-?[0-9]+)\|(-?([0-9]+)?[.][0-9]+))$` |
| `taxAmounts` | [`TaxAmount[] \| undefined`](../../doc/models/tax-amount.md) | Optional | An array of tax amounts levied by a government on the purchase of goods or services.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `32767` |
| `basicShippingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `extraShippingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `handlingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `insuranceAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `totalItemAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `invoiceNumber` | `string \| undefined` | Optional | The invoice number. An alphanumeric string that identifies a billing for a merchant.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `200`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |
| `checkoutOptions` | [`CheckoutOption[] \| undefined`](../../doc/models/checkout-option.md) | Optional | An array of checkout options. Each option has a name and value.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `32767` |

## Example (as JSON)

```json
{
  "item_code": "item_code4",
  "item_name": "item_name2",
  "item_description": "item_description0",
  "item_options": "item_options4",
  "item_quantity": "item_quantity4"
}
```

