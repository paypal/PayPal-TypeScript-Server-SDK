
# Vault Experience Context

Customizes the Vault creation flow experience for your customers.

## Structure

`VaultExperienceContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandName` | `string \| undefined` | Optional | The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `300`, *Pattern*: `^.*$` |
| `locale` | `string \| undefined` | Optional | The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/api/rest/reference/country-codes/) or [M49 region code](https://unstats.un.org/unsd/methodology/m49/).<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `10`, *Pattern*: `^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}\|[0-9]{3}))?$` |
| `returnUrl` | `string \| undefined` | Optional | The URL where the customer is redirected after customer approves leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4000` |
| `cancelUrl` | `string \| undefined` | Optional | The URL where the customer is redirected after customer cancels or leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4000` |
| `shippingPreference` | `string \| undefined` | Optional | The shipping preference. This only applies to PayPal payment source.<br>**Default**: `'GET_FROM_FILE'`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `vaultInstruction` | `string \| undefined` | Optional | Vault Instruction on action to be performed after a successful payer approval.<br>**Default**: `'ON_CREATE_PAYMENT_TOKENS'`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |

## Example (as JSON)

```json
{
  "shipping_preference": "GET_FROM_FILE",
  "vault_instruction": "ON_CREATE_PAYMENT_TOKENS",
  "brand_name": "brand_name0",
  "locale": "locale4",
  "return_url": "return_url2",
  "cancel_url": "cancel_url4"
}
```

