
# Paypal Wallet Attributes Response

Additional attributes associated with the use of a PayPal Wallet.

## Structure

`PaypalWalletAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vault` | [`PaypalWalletVaultResponse \| undefined`](../../doc/models/paypal-wallet-vault-response.md) | Optional | The details about a saved PayPal Wallet payment source. |
| `cobrandedCards` | [`CobrandedCard[] \| undefined`](../../doc/models/cobranded-card.md) | Optional | An array of merchant cobranded cards used by buyer to complete an order. This array will be present if a merchant has onboarded their cobranded card with PayPal and provided corresponding label(s).<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `25` |

## Example

```ts
import {
  PaypalWalletAttributesResponse,
  PaypalWalletVaultStatus,
  PhoneType,
} from '@paypal/paypal-server-sdk';

const paypalWalletAttributesResponse: PaypalWalletAttributesResponse = {
  vault: {
    id: 'id6',
    status: PaypalWalletVaultStatus.Approved,
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
  cobrandedCards: [
    {
      labels: [
        'labels4',
        'labels3'
      ],
      payee: {
        emailAddress: 'email_address4',
        merchantId: 'merchant_id6',
      },
      amount: {
        currencyCode: 'currency_code6',
        value: 'value0',
      },
    },
    {
      labels: [
        'labels4',
        'labels3'
      ],
      payee: {
        emailAddress: 'email_address4',
        merchantId: 'merchant_id6',
      },
      amount: {
        currencyCode: 'currency_code6',
        value: 'value0',
      },
    }
  ],
};
```

