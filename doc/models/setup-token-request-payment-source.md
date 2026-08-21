
# Setup Token Request Payment Source

The payment method to vault with the instrument details.

## Structure

`SetupTokenRequestPaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`SetupTokenRequestCard \| undefined`](../../doc/models/setup-token-request-card.md) | Optional | A Resource representing a request to vault a Card. |
| `paypal` | [`VaultPaypalWalletRequest \| undefined`](../../doc/models/vault-paypal-wallet-request.md) | Optional | A resource representing a request to vault PayPal Wallet. |
| `venmo` | [`VaultVenmoRequest \| undefined`](../../doc/models/vault-venmo-request.md) | Optional | A resource representing a request to vault Venmo. |
| `applePay` | [`VaultApplePayRequest \| undefined`](../../doc/models/vault-apple-pay-request.md) | Optional | A resource representing a request to vault Apple Pay. |
| `token` | [`VaultTokenRequest \| undefined`](../../doc/models/vault-token-request.md) | Optional | The Tokenized Payment Source representing a Request to Vault a Token. |
| `bank` | [`BankRequest \| undefined`](../../doc/models/bank-request.md) | Optional | A Resource representing a request to vault a Bank used for ACH Debit. |

## Example

```ts
import {
  CardBrand,
  CardType,
  FulfillmentType,
  PaypalPaymentTokenUsageType,
  SetupTokenRequestPaymentSource,
  UsagePattern,
  VaultTokenRequestType,
} from '@paypal/paypal-server-sdk';

const setupTokenRequestPaymentSource: SetupTokenRequestPaymentSource = {
  card: {
    name: 'name6',
    number: 'number6',
    expiry: 'expiry4',
    securityCode: 'security_code8',
    brand: CardBrand.CbNationale,
  },
  paypal: {
    description: 'description2',
    usagePattern: UsagePattern.ThresholdPrepaid,
    shipping: {
      name: {
        fullName: 'full_name6',
      },
      emailAddress: 'email_address2',
      phoneNumber: {
        countryCode: 'country_code2',
        nationalNumber: 'national_number6',
      },
      type: FulfillmentType.Shipping,
      address: {
        countryCode: 'country_code6',
        addressLine1: 'address_line_16',
        addressLine2: 'address_line_26',
        adminArea2: 'admin_area_20',
        adminArea1: 'admin_area_12',
        postalCode: 'postal_code8',
      },
    },
    permitMultiplePaymentTokens: false,
    usageType: PaypalPaymentTokenUsageType.Merchant,
  },
  venmo: {
    description: 'description6',
    usagePattern: UsagePattern.UnscheduledPrepaid,
    shipping: {
      name: {
        fullName: 'full_name6',
      },
      emailAddress: 'email_address2',
      phoneNumber: {
        countryCode: 'country_code2',
        nationalNumber: 'national_number6',
      },
      type: FulfillmentType.Shipping,
      address: {
        countryCode: 'country_code6',
        addressLine1: 'address_line_16',
        addressLine2: 'address_line_26',
        adminArea2: 'admin_area_20',
        adminArea1: 'admin_area_12',
        postalCode: 'postal_code8',
      },
    },
    permitMultiplePaymentTokens: false,
    usageType: PaypalPaymentTokenUsageType.Merchant,
  },
  applePay: {
    token: 'token6',
    card: {
      type: CardType.Unknown,
      brand: CardBrand.CbNationale,
      billingAddress: {
        countryCode: 'country_code8',
        addressLine1: 'address_line_12',
        addressLine2: 'address_line_28',
        adminArea2: 'admin_area_28',
        adminArea1: 'admin_area_14',
        postalCode: 'postal_code0',
      },
    },
  },
  token: {
    id: 'id6',
    type: VaultTokenRequestType.SetupToken,
  },
};
```

