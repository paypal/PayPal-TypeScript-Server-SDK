
# Payment Token Request Payment Source

The payment method to vault with the instrument details.

## Structure

`PaymentTokenRequestPaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`PaymentTokenRequestCard \| undefined`](../../doc/models/payment-token-request-card.md) | Optional | A Resource representing a request to vault a Card. |
| `token` | [`VaultTokenRequest \| undefined`](../../doc/models/vault-token-request.md) | Optional | The Tokenized Payment Source representing a Request to Vault a Token. |

## Example (as JSON)

```json
{
  "card": {
    "name": "name6",
    "number": "number6",
    "expiry": "expiry4",
    "security_code": "security_code8",
    "type": "UNKNOWN"
  },
  "token": {
    "id": "id6",
    "type": "BILLING_AGREEMENT"
  }
}
```

