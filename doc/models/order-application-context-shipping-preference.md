
# Order Application Context Shipping Preference

DEPRECATED. DEPRECATED. The shipping preference: Displays the shipping address to the customer. Enables the customer to choose an address on the PayPal site. Restricts the customer from changing the address during the payment-approval process. .  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.shipping_preference`). Please specify this field in the `experience_context` object instead of the `application_context` object., The shipping preference. This only applies to PayPal payment source., The shipping preference. This only applies to PayPal payment source.

## Enumeration

`OrderApplicationContextShippingPreference`

## Fields

| Name | Description |
|  --- | --- |
| `GetFromFile` | Use the customer-provided shipping address on the PayPal site. |
| `NoShipping` | Redact the shipping address from the PayPal site. Recommended for digital goods. |
| `SetProvidedAddress` | Use the merchant-provided address. The customer cannot change this address on the PayPal site. |

