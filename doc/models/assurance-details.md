
# Assurance Details

Information about cardholder possession validation and cardholder identification and verifications (ID&V).

## Structure

`AssuranceDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountVerified` | `boolean \| undefined` | Optional | If true, indicates that Cardholder possession validation has been performed on returned payment credential.<br>**Default**: `false` |
| `cardHolderAuthenticated` | `boolean \| undefined` | Optional | If true, indicates that identification and verifications (ID&V) was performed on the returned payment credential.If false, the same risk-based authentication can be performed as you would for card transactions. This risk-based authentication can include, but not limited to, step-up with 3D Secure protocol if applicable.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "account_verified": false,
  "card_holder_authenticated": false
}
```

