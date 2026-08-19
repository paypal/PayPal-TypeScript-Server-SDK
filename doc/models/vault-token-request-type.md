
# Vault Token Request Type

The tokenization method that generated the ID.

## Enumeration

`VaultTokenRequestType`

## Fields

| Name | Description |
|  --- | --- |
| `SetupToken` | The setup token, which is a temporary reference to payment source. |

## Example

```ts
import { VaultTokenRequestType } from '@paypal/paypal-server-sdk';

const vaultTokenRequestType = VaultTokenRequestType.SetupToken;
```

