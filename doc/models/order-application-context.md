
# Order Application Context

Customizes the payer experience during the approval process for the payment with PayPal. Note: Partners and Marketplaces might configure brand_name and shipping_preference during partner account setup, which overrides the request values.

## Structure

`OrderApplicationContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandName` | `string \| undefined` | Optional | DEPRECATED. The label that overrides the business name in the PayPal account on the PayPal site. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.brand_name`). Please specify this field in the `experience_context` object instead of the `application_context` object.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `locale` | `string \| undefined` | Optional | The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/api/rest/reference/country-codes/) or [M49 region code](https://unstats.un.org/unsd/methodology/m49/).<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `10`, *Pattern*: `^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}\|[0-9]{3}))?$` |
| `landingPage` | [`OrderApplicationContextLandingPage \| undefined`](../../doc/models/order-application-context-landing-page.md) | Optional | DEPRECATED. DEPRECATED. The type of landing page to show on the PayPal site for customer checkout.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.landing_page`). Please specify this field in the `experience_context` object instead of the `application_context` object.<br><br>**Default**: `OrderApplicationContextLandingPage.NoPreference`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `13`, *Pattern*: `^[0-9A-Z_]+$` |
| `shippingPreference` | [`OrderApplicationContextShippingPreference \| undefined`](../../doc/models/order-application-context-shipping-preference.md) | Optional | DEPRECATED. DEPRECATED. The shipping preference: Displays the shipping address to the customer. Enables the customer to choose an address on the PayPal site. Restricts the customer from changing the address during the payment-approval process. .  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.shipping_preference`). Please specify this field in the `experience_context` object instead of the `application_context` object.<br><br>**Default**: `OrderApplicationContextShippingPreference.GetFromFile`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^[0-9A-Z_]+$` |
| `userAction` | [`OrderApplicationContextUserAction \| undefined`](../../doc/models/order-application-context-user-action.md) | Optional | DEPRECATED. Configures a Continue or Pay Now checkout flow.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.user_action`). Please specify this field in the `experience_context` object instead of the `application_context` object.<br><br>**Default**: `OrderApplicationContextUserAction.Continue`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `8`, *Pattern*: `^[0-9A-Z_]+$` |
| `paymentMethod` | [`PaymentMethodPreference \| undefined`](../../doc/models/payment-method-preference.md) | Optional | The customer and merchant payment preferences. |
| `returnUrl` | `string \| undefined` | Optional | DEPRECATED. The URL where the customer is redirected after the customer approves the payment. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.return_url`). Please specify this field in the `experience_context` object instead of the `application_context` object. |
| `cancelUrl` | `string \| undefined` | Optional | DEPRECATED. The URL where the customer is redirected after the customer cancels the payment. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.cancel_url`). Please specify this field in the `experience_context` object instead of the `application_context` object. |
| `storedPaymentSource` | [`StoredPaymentSource \| undefined`](../../doc/models/stored-payment-source.md) | Optional | Provides additional details to process a payment using a `payment_source` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file). Parameter compatibility: `payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`. `usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`. `previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`. Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request. |

## Example (as JSON)

```json
{
  "landing_page": "NO_PREFERENCE",
  "shipping_preference": "GET_FROM_FILE",
  "user_action": "CONTINUE",
  "brand_name": "brand_name2",
  "locale": "locale6"
}
```

