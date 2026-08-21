
# Apple Pay Attributes

Additional attributes associated with apple pay.

## Structure

`ApplePayAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`CustomerInformation \| undefined`](../../doc/models/customer-information.md) | Optional | This object represents a merchant’s customer, allowing them to store contact details, and track all payments associated with the same customer. |
| `vault` | [`VaultInstruction \| undefined`](../../doc/models/vault-instruction.md) | Optional | Base vaulting specification. The object can be extended for specific use cases within each payment_source that supports vaulting. |

## Example

```ts
import {
  ApplePayAttributes,
  PhoneType,
  StoreInVaultInstruction,
} from '@paypal/paypal-server-sdk';

const applePayAttributes: ApplePayAttributes = {
  customer: {
    id: 'id0',
    emailAddress: 'email_address2',
    phone: {
      phoneNumber: {
        nationalNumber: 'national_number6',
      },
      phoneType: PhoneType.Other,
    },
    name: {
      givenName: 'given_name2',
      surname: 'surname8',
    },
  },
  vault: {
    storeInVault: StoreInVaultInstruction.OnSuccess,
  },
};
```

