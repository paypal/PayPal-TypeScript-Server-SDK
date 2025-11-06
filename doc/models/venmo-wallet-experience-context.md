
# Venmo Wallet Experience Context

Customizes the buyer experience during the approval process for payment with Venmo. Note: Partners and Marketplaces might configure shipping_preference during partner account setup, which overrides the request values.

## Structure

`VenmoWalletExperienceContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandName` | `string \| undefined` | Optional | The business name of the merchant. The pattern is defined by an external party and supports Unicode.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.*$` |
| `shippingPreference` | [`VenmoWalletExperienceContextShippingPreference \| undefined`](../../doc/models/venmo-wallet-experience-context-shipping-preference.md) | Optional | The location from which the shipping address is derived.<br><br>**Default**: `VenmoWalletExperienceContextShippingPreference.GetFromFile`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `orderUpdateCallbackConfig` | [`CallbackConfiguration \| undefined`](../../doc/models/callback-configuration.md) | Optional | CallBack Configuration that the merchant can provide to PayPal/Venmo. |
| `userAction` | [`VenmoWalletExperienceContextUserAction \| undefined`](../../doc/models/venmo-wallet-experience-context-user-action.md) | Optional | Configures a Continue or Pay Now checkout flow.<br><br>**Default**: `VenmoWalletExperienceContextUserAction.Continue`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `8`, *Pattern*: `^[0-9A-Z_]+$` |

## Example (as JSON)

```json
{
  "shipping_preference": "GET_FROM_FILE",
  "user_action": "CONTINUE",
  "brand_name": "brand_name6",
  "order_update_callback_config": {
    "callback_events": [
      "SHIPPING_OPTIONS",
      "SHIPPING_ADDRESS",
      "SHIPPING_OPTIONS"
    ],
    "callback_url": "callback_url6"
  }
}
```

