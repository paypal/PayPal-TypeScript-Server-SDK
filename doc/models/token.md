
# Token

The tokenized payment source to fund a payment.

## Structure

`Token`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The PayPal-generated ID for the token.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `type` | [`TokenType`](../../doc/models/token-type.md) | Required | The tokenization method that generated the ID.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_-]+$` |

## Example

```ts
import { Token, TokenType } from '@paypal/paypal-server-sdk';

const token: Token = {
  id: 'id6',
  type: TokenType.BillingAgreement,
};
```

