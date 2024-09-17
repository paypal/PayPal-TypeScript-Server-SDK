
# Paypal Wallet Vault Instruction

## Structure

`PaypalWalletVaultInstruction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storeInVault` | [`StoreInVaultInstruction \| undefined`](../../doc/models/store-in-vault-instruction.md) | Optional | Defines how and when the payment source gets vaulted.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `description` | `string \| undefined` | Optional | The description displayed to PayPal consumer on the approval flow for PayPal, as well as on the PayPal payment token management experience on PayPal.com.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `usagePattern` | [`PaypalPaymentTokenUsagePattern \| undefined`](../../doc/models/paypal-payment-token-usage-pattern.md) | Optional | Expected business/pricing model for the billing agreement.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `30` |
| `usageType` | [`PaypalPaymentTokenUsageType`](../../doc/models/paypal-payment-token-usage-type.md) | Required | The usage type associated with the PayPal payment token.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `customerType` | [`PaypalPaymentTokenCustomerType \| undefined`](../../doc/models/paypal-payment-token-customer-type.md) | Optional | The customer type associated with the PayPal payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.<br>**Default**: `PaypalPaymentTokenCustomerType.CONSUMER`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `permitMultiplePaymentTokens` | `boolean \| undefined` | Optional | Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "usage_type": "MERCHANT",
  "customer_type": "CONSUMER",
  "permit_multiple_payment_tokens": false,
  "store_in_vault": "ON_SUCCESS",
  "description": "description4",
  "usage_pattern": "RECURRING_PREPAID"
}
```

