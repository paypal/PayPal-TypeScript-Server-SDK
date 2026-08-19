
# Venmo Wallet Additional Attributes

Additional attributes associated with the use of this Venmo Wallet.

## Structure

`VenmoWalletAdditionalAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`VenmoWalletCustomerInformation \| undefined`](../../doc/models/venmo-wallet-customer-information.md) | Optional | The details about a customer in PayPal's system of record. |
| `vault` | [`VenmoWalletVaultAttributes \| undefined`](../../doc/models/venmo-wallet-vault-attributes.md) | Optional | Resource consolidating common request and response attirbutes for vaulting Venmo Wallet. |

## Example

```ts
import {
  PhoneType,
  StoreInVaultInstruction,
  VenmoPaymentTokenCustomerType,
  VenmoPaymentTokenUsagePattern,
  VenmoPaymentTokenUsageType,
  VenmoWalletAdditionalAttributes,
} from '@paypal/paypal-server-sdk';

const venmoWalletAdditionalAttributes: VenmoWalletAdditionalAttributes = {
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
    usageType: VenmoPaymentTokenUsageType.Merchant,
    description: 'description6',
    usagePattern: VenmoPaymentTokenUsagePattern.ThresholdPrepaid,
    customerType: VenmoPaymentTokenCustomerType.Consumer,
    permitMultiplePaymentTokens: false,
  },
};
```

