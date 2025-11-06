
# Taxes Override

The tax details.

## Structure

`TaxesOverride`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `percentage` | `string \| undefined` | Optional | The percentage, as a fixed-point, signed decimal number. For example, define a 19.99% interest rate as `19.99`.<br><br>**Constraints**: *Pattern*: `^((-?[0-9]+)\|(-?([0-9]+)?[.][0-9]+))$` |
| `inclusive` | `boolean \| undefined` | Optional | Indicates whether the tax was already included in the billing amount. |

## Example (as JSON)

```json
{
  "percentage": "percentage8",
  "inclusive": false
}
```

