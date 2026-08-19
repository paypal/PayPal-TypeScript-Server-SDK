
# Vault Response

The details about a saved payment source.

## Structure

`VaultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the saved payment source.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `status` | [`VaultStatus \| undefined`](../../doc/models/vault-status.md) | Optional | The vault status.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `customer` | [`VaultCustomer \| undefined`](../../doc/models/vault-customer.md) | Optional | This object represents a merchant’s customer, allowing them to store contact details, and track all payments associated with the same customer. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of request-related HATEOAS links.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |

## Example

```ts
import { VaultResponse, VaultStatus } from '@paypal/paypal-server-sdk';

const vaultResponse: VaultResponse = {
  id: 'id2',
  status: VaultStatus.Vaulted,
  customer: {
    id: 'id0',
    name: {
      givenName: 'given_name2',
      surname: 'surname8',
    },
  },
};
```

