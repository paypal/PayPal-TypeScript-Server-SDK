
# Apple Pay Request

Information needed to pay using ApplePay.

## Structure

`ApplePayRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ApplePay transaction identifier, this will be the unique identifier for this transaction provided by Apple. The pattern is defined by an external party and supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `250`, *Pattern*: `^.*$` |
| `name` | `string \| undefined` | Optional | The full name representation like Mr J Smith.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `300` |
| `emailAddress` | `string \| undefined` | Optional | The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: `^(?:[A-Za-z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{\|}~-]+)*\|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\|\[(?:(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?\|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]\|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$` |
| `phoneNumber` | [`PhoneNumber \| undefined`](../../doc/models/phone-number.md) | Optional | The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). |
| `decryptedToken` | [`ApplePayDecryptedTokenData \| undefined`](../../doc/models/apple-pay-decrypted-token-data.md) | Optional | Information about the Payment data obtained by decrypting Apple Pay token. |
| `storedCredential` | [`CardStoredCredential \| undefined`](../../doc/models/card-stored-credential.md) | Optional | Provides additional details to process a payment using a `card` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/><ul><li>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`.</li><li>Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.</li></ul> |
| `vaultId` | `string \| undefined` | Optional | The PayPal-generated ID for the vaulted payment source. This ID should be stored on the merchant's server so the saved payment source can be used for future transactions.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `attributes` | [`ApplePayAttributes \| undefined`](../../doc/models/apple-pay-attributes.md) | Optional | Additional attributes associated with apple pay. |

## Example (as JSON)

```json
{
  "id": "id6",
  "name": "name6",
  "email_address": "email_address4",
  "phone_number": {
    "national_number": "national_number6"
  },
  "decrypted_token": {
    "transaction_amount": {
      "currency_code": "currency_code6",
      "value": "value2"
    },
    "tokenized_card": {
      "name": "name4",
      "number": "number2",
      "expiry": "expiry2",
      "card_type": "HIPER",
      "type": "UNKNOWN"
    },
    "device_manufacturer_id": "device_manufacturer_id6",
    "payment_data_type": "3DSECURE",
    "payment_data": {
      "cryptogram": "cryptogram6",
      "eci_indicator": "eci_indicator0",
      "emv_data": "emv_data0",
      "pin": "pin4"
    }
  }
}
```

