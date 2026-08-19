
# Vault Instruction Action

Vault Instruction on action to be performed after a successful payer approval.

## Enumeration

`VaultInstructionAction`

## Fields

| Name | Description |
|  --- | --- |
| `OnCreatePaymentTokens` | Vault the payment method after API caller performs a successful POST on Payment Tokens. |
| `OnPayerApproval` | Vault the payment method on successful payer authentication and approval. |

## Example

```ts
import { VaultInstructionAction } from '@paypal/paypal-server-sdk';

const vaultInstructionAction = VaultInstructionAction.OnCreatePaymentTokens;
```

