
# Paypal Wallet Attributes

Additional attributes associated with the use of this PayPal Wallet.

## Structure

`PaypalWalletAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`PaypalWalletCustomerRequest \| undefined`](../../doc/models/paypal-wallet-customer-request.md) | Optional | - |
| `vault` | [`PaypalWalletVaultInstruction \| undefined`](../../doc/models/paypal-wallet-vault-instruction.md) | Optional | - |

## Example

```ts
import {
  PaypalPaymentTokenCustomerType,
  PaypalPaymentTokenUsageType,
  PaypalWalletAttributes,
  PhoneType,
  StoreInVaultInstruction,
  UsagePattern,
} from '@paypal/paypal-server-sdk';

const paypalWalletAttributes: PaypalWalletAttributes = {
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
    usageType: PaypalPaymentTokenUsageType.Merchant,
    storeInVault: StoreInVaultInstruction.OnSuccess,
    description: 'description6',
    usagePattern: UsagePattern.ThresholdPrepaid,
    customerType: PaypalPaymentTokenCustomerType.Consumer,
    permitMultiplePaymentTokens: false,
  },
};
```

