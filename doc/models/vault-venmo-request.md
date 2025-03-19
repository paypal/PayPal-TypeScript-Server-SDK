
# Vault Venmo Request

## Structure

`VaultVenmoRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description displayed to the consumer on the approval flow for a digital wallet, as well as on the merchant view of the payment token management experience. exp: PayPal.com.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128`, *Pattern*: `^.*$` |
| `usagePattern` | [`UsagePattern \| undefined`](../../doc/models/usage-pattern.md) | Optional | Expected business/charge model for the billing agreement.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `30`, *Pattern*: `^[0-9A-Z_]+$` |
| `shipping` | [`VaultedDigitalWalletShippingDetails \| undefined`](../../doc/models/vaulted-digital-wallet-shipping-details.md) | Optional | The shipping details. |
| `permitMultiplePaymentTokens` | `boolean \| undefined` | Optional | Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source.<br>**Default**: `false` |
| `usageType` | [`PaypalPaymentTokenUsageType \| undefined`](../../doc/models/paypal-payment-token-usage-type.md) | Optional | The usage type associated with a digital wallet payment token.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `customerType` | [`PaypalPaymentTokenCustomerType \| undefined`](../../doc/models/paypal-payment-token-customer-type.md) | Optional | The customer type associated with a digital wallet payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `experienceContext` | [`VaultVenmoExperienceContext \| undefined`](../../doc/models/vault-venmo-experience-context.md) | Optional | Customizes the Vault creation flow experience for your customers. |

## Example (as JSON)

```json
{
  "permit_multiple_payment_tokens": false,
  "description": "description0",
  "usage_pattern": "UNSCHEDULED_PREPAID",
  "shipping": {
    "name": {
      "full_name": "full_name6"
    },
    "phone_number": {
      "country_code": "country_code2",
      "national_number": "national_number6"
    },
    "type": "SHIPPING",
    "address": {
      "address_line_1": "address_line_16",
      "address_line_2": "address_line_26",
      "admin_area_2": "admin_area_20",
      "admin_area_1": "admin_area_12",
      "postal_code": "postal_code8",
      "country_code": "country_code6"
    }
  },
  "usage_type": "MERCHANT"
}
```

