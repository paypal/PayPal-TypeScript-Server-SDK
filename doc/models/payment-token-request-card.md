
# Payment Token Request Card

A Resource representing a request to vault a Card.

## Structure

`PaymentTokenRequestCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The card holder's name as it appears on the card.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `300`, *Pattern*: `^.{1,300}$` |
| `number` | `string \| undefined` | Optional | The primary account number (PAN) for the payment card.<br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `19`, *Pattern*: `^[0-9]{13,19}$` |
| `expiry` | `string \| undefined` | Optional | The year and month, in ISO-8601 `YYYY-MM` date format. See [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `7`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])$` |
| `securityCode` | `string \| undefined` | Optional | The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. This parameter cannot be present in the request when `payment_initiator=MERCHANT`.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `4`, *Pattern*: `^[0-9]{3,4}$` |
| `type` | [`CardType \| undefined`](../../doc/models/card-type.md) | Optional | Type of card. i.e Credit, Debit and so on.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `brand` | [`CardBrand \| undefined`](../../doc/models/card-brand.md) | Optional | The card network or brand. Applies to credit, debit, gift, and payment cards.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `billingAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). |
| `networkTransactionReference` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name4",
  "number": "number8",
  "expiry": "expiry2",
  "security_code": "security_code6",
  "type": "DEBIT"
}
```

