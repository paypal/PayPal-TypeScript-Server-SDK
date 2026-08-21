
# Card Attributes

Additional attributes associated with the use of this card.

## Structure

`CardAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`CardCustomerInformation \| undefined`](../../doc/models/card-customer-information.md) | Optional | The details about a customer in PayPal's system of record. |
| `vault` | [`VaultInstructionBase \| undefined`](../../doc/models/vault-instruction-base.md) | Optional | Basic vault instruction specification that can be extended by specific payment sources that supports vaulting. |
| `verification` | [`CardVerification \| undefined`](../../doc/models/card-verification.md) | Optional | The API caller can opt in to verify the card through PayPal offered verification services (e.g. Smart Dollar Auth, 3DS). |

## Example

```ts
import {
  CardAttributes,
  OrdersCardVerificationMethod,
  PhoneType,
  StoreInVaultInstruction,
} from '@paypal/paypal-server-sdk';

const cardAttributes: CardAttributes = {
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
  vault: {
    storeInVault: StoreInVaultInstruction.OnSuccess,
  },
  verification: {
    method: OrdersCardVerificationMethod.Enum3DSecure,
  },
};
```

