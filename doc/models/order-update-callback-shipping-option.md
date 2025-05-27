
# Order Update Callback Shipping Option

The options that the payee or merchant offers to the payer to ship or pick up their items.

## Structure

`OrderUpdateCallbackShippingOption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | A unique ID that identifies a payer-selected shipping option.<br><br>**Constraints**: *Maximum Length*: `127` |
| `label` | `string` | Required | A description that the payer sees, which helps them choose an appropriate shipping option. For example, `Free Shipping`, `USPS Priority Shipping`, `Expédition prioritaire USPS`, or `USPS yōuxiān fā huò`. Localize this description to the payer's locale.<br><br>**Constraints**: *Maximum Length*: `127` |
| `type` | [`ShippingType \| undefined`](../../doc/models/shipping-type.md) | Optional | A classification for the method of purchase fulfillment. |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example (as JSON)

```json
{
  "id": "id8",
  "label": "label8",
  "type": "SHIPPING",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  }
}
```

