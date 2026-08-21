
# Google Pay Request

Information needed to pay using Google Pay.

## Structure

`GooglePayRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The full name representation like Mr J Smith.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `300` |
| `emailAddress` | `string \| undefined` | Optional | The internationalized email address. Note: Up to 64 characters are allowed before and 255 characters are allowed after the @ sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted @ sign exists.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: ``^(?:[A-Za-z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{\|}~-]+)*\|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\|\[(?:(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?\|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]\|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$`` |
| `phoneNumber` | [`PhoneNumberWithCountryCode \| undefined`](../../doc/models/phone-number-with-country-code.md) | Optional | The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). |
| `card` | [`GooglePayRequestCard \| undefined`](../../doc/models/google-pay-request-card.md) | Optional | The payment card used to fund a Google Pay payment. Can be a credit or debit card. |
| `decryptedToken` | [`GooglePayDecryptedTokenData \| undefined`](../../doc/models/google-pay-decrypted-token-data.md) | Optional | Details shared by Google for the merchant to be shared with PayPal. This is required to process the transaction using the Google Pay payment method. |
| `assuranceDetails` | [`AssuranceDetails \| undefined`](../../doc/models/assurance-details.md) | Optional | Information about cardholder possession validation and cardholder identification and verifications (ID&V). |
| `experienceContext` | [`GooglePayExperienceContext \| undefined`](../../doc/models/google-pay-experience-context.md) | Optional | Customizes the payer experience during the approval process for the payment. |

## Example

```ts
import {
  CardBrand,
  CardType,
  GooglePayAuthenticationMethod,
  GooglePayPaymentMethod,
  GooglePayRequest,
} from '@paypal/paypal-server-sdk';

const googlePayRequest: GooglePayRequest = {
  name: 'name6',
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
};
```

