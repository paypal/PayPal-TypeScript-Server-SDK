
# BLIK Payment Request

Information needed to pay using BLIK.

## Structure

`BLIKPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The full name representation like Mr J Smith.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `300` |
| `countryCode` | `string` | Required | The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2`, *Pattern*: `^([A-Z]{2}\|C2)$` |
| `email` | `string \| undefined` | Optional | The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: ``^(?:[A-Za-z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{\|}~-]+)*\|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\|\[(?:(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?\|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]\|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$`` |
| `experienceContext` | [`BLIKExperienceContext \| undefined`](../../doc/models/blik-experience-context.md) | Optional | Customizes the payer experience during the approval process for the BLIK payment. |
| `level0` | [`BLIKLevel0PaymentObject \| undefined`](../../doc/models/blik-level-0-payment-object.md) | Optional | Information used to pay using BLIK level_0 flow. |
| `oneClick` | [`BLIKOneClickPaymentRequest \| undefined`](../../doc/models/blik-one-click-payment-request.md) | Optional | Information used to pay using BLIK one-click flow. |

## Example (as JSON)

```json
{
  "name": "name8",
  "country_code": "country_code8",
  "email": "email8",
  "experience_context": {
    "brand_name": "brand_name2",
    "locale": "locale6",
    "shipping_preference": "NO_SHIPPING",
    "return_url": "return_url4",
    "cancel_url": "cancel_url6"
  },
  "level_0": {
    "auth_code": "auth_code8"
  },
  "one_click": {
    "auth_code": "auth_code0",
    "consumer_reference": "consumer_reference2",
    "alias_label": "alias_label6",
    "alias_key": "alias_key4"
  }
}
```

