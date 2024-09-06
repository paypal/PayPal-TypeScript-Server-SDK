
# Order Confirm Application Context

Customizes the payer confirmation experience.

## Structure

`OrderConfirmApplicationContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandName` | `string \| undefined` | Optional | Label to present to your payer as part of the PayPal hosted web experience.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `locale` | `string \| undefined` | Optional | The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/api/rest/reference/country-codes/) or [M49 region code](https://unstats.un.org/unsd/methodology/m49/).<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `10`, *Pattern*: `^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}\|[0-9]{3}))?$` |
| `returnUrl` | `string \| undefined` | Optional | The URL where the customer is redirected after the customer approves the payment.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `4000` |
| `cancelUrl` | `string \| undefined` | Optional | The URL where the customer is redirected after the customer cancels the payment.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `4000` |
| `storedPaymentSource` | [`StoredPaymentSource \| undefined`](../../doc/models/stored-payment-source.md) | Optional | Provides additional details to process a payment using a `payment_source` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/><ul><li>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`.</li><li>Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.</li></ul> |

## Example (as JSON)

```json
{
  "brand_name": "brand_name6",
  "locale": "locale0",
  "return_url": "return_url8",
  "cancel_url": "cancel_url0",
  "stored_payment_source": {
    "payment_initiator": "CUSTOMER",
    "payment_type": "RECURRING",
    "usage": "FIRST",
    "previous_network_transaction_reference": {
      "id": "id6",
      "date": "date2",
      "network": "VISA",
      "acquirer_reference_number": "acquirer_reference_number8"
    }
  }
}
```

