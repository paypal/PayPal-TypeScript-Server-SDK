
# Subscription Application Context

The application context, which customizes the payer experience during the subscription approval process with PayPal.

## Structure

`SubscriptionApplicationContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandName` | `string \| undefined` | Optional | The label that overrides the business name in the PayPal account on the PayPal site.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.*$` |
| `locale` | `string \| undefined` | Optional | The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `10`, *Pattern*: `^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}\|[0-9]{3}))?$` |
| `shippingPreference` | [`ExperienceContextShippingPreference \| undefined`](../../doc/models/experience-context-shipping-preference.md) | Optional | The location from which the shipping address is derived.<br><br>**Default**: `ExperienceContextShippingPreference.GetFromFile`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `userAction` | [`ApplicationContextUserAction \| undefined`](../../doc/models/application-context-user-action.md) | Optional | Configures the label name to `Continue` or `Subscribe Now` for subscription consent experience.<br><br>**Default**: `ApplicationContextUserAction.SubscribeNow`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `paymentMethod` | [`PaymentMethod \| undefined`](../../doc/models/payment-method.md) | Optional | The customer and merchant payment preferences. |
| `returnUrl` | `string` | Required | The URL where the customer is redirected after the customer approves the payment.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `4000` |
| `cancelUrl` | `string` | Required | The URL where the customer is redirected after the customer cancels the payment.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `4000` |

## Example (as JSON)

```json
{
  "shipping_preference": "GET_FROM_FILE",
  "user_action": "SUBSCRIBE_NOW",
  "return_url": "return_url0",
  "cancel_url": "cancel_url2",
  "brand_name": "brand_name8",
  "locale": "locale2",
  "payment_method": {
    "payee_preferred": "UNRESTRICTED"
  }
}
```

