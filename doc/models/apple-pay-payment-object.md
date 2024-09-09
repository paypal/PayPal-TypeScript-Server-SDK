
# Apple Pay Payment Object

Information needed to pay using ApplePay.

## Structure

`ApplePayPaymentObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ApplePay transaction identifier, this will be the unique identifier for this transaction provided by Apple. The pattern is defined by an external party and supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `250`, *Pattern*: `^.*$` |
| `token` | `string \| undefined` | Optional | Encrypted ApplePay token, containing card information. This token would be base64encoded. The pattern is defined by an external party and supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10000`, *Pattern*: `^.*$` |
| `name` | `string \| undefined` | Optional | The full name representation like Mr J Smith.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `300` |
| `emailAddress` | `string \| undefined` | Optional | The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: ``^(?:[A-Za-z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{\|}~-]+)*\|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\|\[(?:(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?\|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]\|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$`` |
| `phoneNumber` | [`PhoneNumber \| undefined`](../../doc/models/phone-number.md) | Optional | The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). |
| `card` | [`ApplePayCardResponse \| undefined`](../../doc/models/apple-pay-card-response.md) | Optional | The Card from Apple Pay Wallet used to fund the payment. |
| `attributes` | [`ApplePayAttributesResponse \| undefined`](../../doc/models/apple-pay-attributes-response.md) | Optional | Additional attributes associated with the use of Apple Pay. |

## Example (as JSON)

```json
{
  "id": "id6",
  "token": "token0",
  "name": "name6",
  "email_address": "email_address4",
  "phone_number": {
    "national_number": "national_number6"
  }
}
```

