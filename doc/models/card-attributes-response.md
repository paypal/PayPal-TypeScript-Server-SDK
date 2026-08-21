
# Card Attributes Response

Additional attributes associated with the use of this card.

## Structure

`CardAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vault` | [`CardVaultResponse \| undefined`](../../doc/models/card-vault-response.md) | Optional | The details about a saved Card payment source. |

## Example

```ts
import {
  CardAttributesResponse,
  PhoneType,
  VaultStatus,
} from '@paypal/paypal-server-sdk';

const cardAttributesResponse: CardAttributesResponse = {
  vault: {
    id: 'id6',
    status: VaultStatus.Approved,
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
      merchantCustomerId: 'merchant_customer_id2',
    },
  },
};
```

