
# Vault Venmo Experience Context

Customizes the Vault creation flow experience for your customers.

## Structure

`VaultVenmoExperienceContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandName` | `string \| undefined` | Optional | The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `300`, *Pattern*: `^.*$` |
| `shippingPreference` | `string \| undefined` | Optional | The shipping preference. This only applies to PayPal payment source.<br>**Default**: `'GET_FROM_FILE'`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `vaultInstruction` | `string \| undefined` | Optional | Vault Instruction on action to be performed after a successful payer approval.<br>**Default**: `'ON_CREATE_PAYMENT_TOKENS'`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |

## Example (as JSON)

```json
{
  "shipping_preference": "GET_FROM_FILE",
  "vault_instruction": "ON_CREATE_PAYMENT_TOKENS",
  "brand_name": "brand_name0"
}
```

