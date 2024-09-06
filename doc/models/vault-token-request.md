
# Vault Token Request

The Tokenized Payment Source representing a Request to Vault a Token.

## Structure

`VaultTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The PayPal-generated ID for the token.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Za-z_-]+$` |
| `type` | [`TokenType`](../../doc/models/token-type.md) | Required | The tokenization method that generated the ID.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_-]+$` |

## Example (as JSON)

```json
{
  "id": "id8",
  "type": "BILLING_AGREEMENT"
}
```

