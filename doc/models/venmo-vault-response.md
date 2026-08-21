
# Venmo Vault Response

The details about a saved venmo payment source.

## Structure

`VenmoVaultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the saved payment source.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `status` | [`VenmoVaultResponseStatus \| undefined`](../../doc/models/venmo-vault-response-status.md) | Optional | The vault status.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of request-related HATEOAS links.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |
| `customer` | [`CustomerInformation \| undefined`](../../doc/models/customer-information.md) | Optional | This object represents a merchant’s customer, allowing them to store contact details, and track all payments associated with the same customer. |

## Example

```ts
import {
  PhoneType,
  VenmoVaultResponse,
  VenmoVaultResponseStatus,
} from '@paypal/paypal-server-sdk';

const venmoVaultResponse: VenmoVaultResponse = {
  id: 'id4',
  status: VenmoVaultResponseStatus.Approved,
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
};
```

