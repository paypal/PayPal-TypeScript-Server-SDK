
# Order Capture Request Payment Source

The payment source definition.

## Structure

`OrderCaptureRequestPaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardRequest \| undefined`](../../doc/models/card-request.md) | Optional | The payment card to use to fund a payment. Can be a credit or debit card. Note: Passing card number, cvv and expiry directly via the API requires PCI SAQ D compliance. *PayPal offers a mechanism by which you do not have to take on the PCI SAQ D burden by using hosted fields - refer to this Integration Guide*. |
| `token` | [`Token \| undefined`](../../doc/models/token.md) | Optional | The tokenized payment source to fund a payment. |
| `paypal` | [`PaypalWallet \| undefined`](../../doc/models/paypal-wallet.md) | Optional | A resource that identifies a PayPal Wallet is used for payment. |
| `applePay` | [`ApplePayRequest \| undefined`](../../doc/models/apple-pay-request.md) | Optional | Information needed to pay using ApplePay. |
| `googlePay` | [`GooglePayRequest \| undefined`](../../doc/models/google-pay-request.md) | Optional | Information needed to pay using Google Pay. |
| `venmo` | [`VenmoWalletRequest \| undefined`](../../doc/models/venmo-wallet-request.md) | Optional | Information needed to pay using Venmo. |

## Example

```ts
import {
  ApplePayPaymentDataType,
  CardBrand,
  CardType,
  GooglePayAuthenticationMethod,
  GooglePayPaymentMethod,
  OrderCaptureRequestPaymentSource,
  PhoneType,
  TokenType,
} from '@paypal/paypal-server-sdk';

const orderCaptureRequestPaymentSource: OrderCaptureRequestPaymentSource = {
  card: {
    name: 'name6',
    number: 'number6',
    expiry: 'expiry4',
    securityCode: 'security_code8',
    billingAddress: {
      countryCode: 'country_code8',
      addressLine1: 'address_line_12',
      addressLine2: 'address_line_28',
      adminArea2: 'admin_area_28',
      adminArea1: 'admin_area_14',
      postalCode: 'postal_code0',
    },
  },
  token: {
    id: 'id6',
    type: TokenType.BillingAgreement,
  },
  paypal: {
    vaultId: 'vault_id0',
    emailAddress: 'email_address0',
    name: {
      givenName: 'given_name2',
      surname: 'surname8',
    },
    phone: {
      phoneNumber: {
        nationalNumber: 'national_number6',
      },
      phoneType: PhoneType.Other,
    },
    birthDate: 'birth_date8',
  },
  applePay: {
    id: 'id0',
    name: 'name0',
    emailAddress: 'email_address8',
    phoneNumber: {
      nationalNumber: 'national_number6',
    },
    decryptedToken: {
      tokenizedCard: {
        name: 'name4',
        number: 'number2',
        expiry: 'expiry2',
        type: CardType.Unknown,
      },
      transactionAmount: {
        currencyCode: 'currency_code6',
        value: 'value2',
      },
      deviceManufacturerId: 'device_manufacturer_id6',
      paymentDataType: ApplePayPaymentDataType.Enum3Dsecure,
      paymentData: {
        cryptogram: 'cryptogram6',
        eciIndicator: 'eci_indicator0',
        emvData: 'emv_data0',
        pin: 'pin4',
      },
    },
  },
  googlePay: {
    name: 'name8',
    emailAddress: 'email_address6',
    phoneNumber: {
      countryCode: 'country_code2',
      nationalNumber: 'national_number6',
    },
    card: {
      name: 'name6',
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
    decryptedToken: {
      paymentMethod: GooglePayPaymentMethod.Card,
      card: {
        name: 'name6',
        number: 'number6',
        expiry: 'expiry4',
        type: CardType.Unknown,
      },
      authenticationMethod: GooglePayAuthenticationMethod.PanOnly,
      messageId: 'message_id0',
      messageExpiration: 'message_expiration2',
      cryptogram: 'cryptogram6',
      eciIndicator: 'eci_indicator0',
    },
  },
};
```

