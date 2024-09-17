
# Paypal Wallet

A resource that identifies a PayPal Wallet is used for payment.

## Structure

`PaypalWallet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vaultId` | `string \| undefined` | Optional | The PayPal-generated ID for the vaulted payment source. This ID should be stored on the merchant's server so the saved payment source can be used for future transactions.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `emailAddress` | `string \| undefined` | Optional | The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: ``(?:[a-zA-Z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{\|}~-]+)*\|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\|\[(?:(?:(2(5[0-5]\|[0-4][0-9])\|1[0-9][0-9]\|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]\|[0-4][0-9])\|1[0-9][0-9]\|[1-9]?[0-9])\|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]\|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])`` |
| `name` | [`Name \| undefined`](../../doc/models/name.md) | Optional | The name of the party. |
| `phone` | [`PhoneWithType \| undefined`](../../doc/models/phone-with-type.md) | Optional | The phone information. |
| `birthDate` | `string \| undefined` | Optional | The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])$` |
| `taxInfo` | [`TaxInfo \| undefined`](../../doc/models/tax-info.md) | Optional | The tax ID of the customer. The customer is also known as the payer. Both `tax_id` and `tax_id_type` are required. |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). |
| `attributes` | [`PaypalWalletAttributes \| undefined`](../../doc/models/paypal-wallet-attributes.md) | Optional | Additional attributes associated with the use of this PayPal Wallet. |
| `experienceContext` | [`PaypalWalletExperienceContext \| undefined`](../../doc/models/paypal-wallet-experience-context.md) | Optional | Customizes the payer experience during the approval process for payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote> |
| `billingAgreementId` | `string \| undefined` | Optional | The PayPal billing agreement ID. References an approved recurring payment for goods or services.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `128`, *Pattern*: `^[a-zA-Z0-9-]+$` |

## Example (as JSON)

```json
{
  "vault_id": "vault_id8",
  "email_address": "email_address8",
  "name": {
    "given_name": "given_name2",
    "surname": "surname8"
  },
  "phone": {
    "phone_type": "OTHER",
    "phone_number": {
      "national_number": "national_number6"
    }
  },
  "birth_date": "birth_date4"
}
```

