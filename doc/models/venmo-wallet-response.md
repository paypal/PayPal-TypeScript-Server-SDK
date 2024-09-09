
# Venmo Wallet Response

Venmo wallet response.

## Structure

`VenmoWalletResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailAddress` | `string \| undefined` | Optional | The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: ``(?:[a-zA-Z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{\|}~-]+)*\|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\|\[(?:(?:(2(5[0-5]\|[0-4][0-9])\|1[0-9][0-9]\|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]\|[0-4][0-9])\|1[0-9][0-9]\|[1-9]?[0-9])\|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]\|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])`` |
| `accountId` | `string \| undefined` | Optional | The PayPal payer ID, which is a masked version of the PayPal account number intended for use with third parties. The account number is reversibly encrypted and a proprietary variant of Base32 is used to encode the result.<br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `13`, *Pattern*: `^[2-9A-HJ-NP-Z]{13}$` |
| `userName` | `string \| undefined` | Optional | The Venmo user name chosen by the user, also know as a Venmo handle.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^[-a-zA-Z0-9_]*$` |
| `name` | [`Name \| undefined`](../../doc/models/name.md) | Optional | The name of the party. |
| `phoneNumber` | [`PhoneNumber \| undefined`](../../doc/models/phone-number.md) | Optional | The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). |
| `attributes` | [`VenmoWalletAttributesResponse \| undefined`](../../doc/models/venmo-wallet-attributes-response.md) | Optional | Additional attributes associated with the use of a Venmo Wallet. |

## Example (as JSON)

```json
{
  "email_address": "email_address6",
  "account_id": "account_id8",
  "user_name": "user_name2",
  "name": {
    "given_name": "given_name2",
    "surname": "surname8"
  },
  "phone_number": {
    "national_number": "national_number6"
  }
}
```

