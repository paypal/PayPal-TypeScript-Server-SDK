
# Paypal Wallet Stored Credential

Provides additional details to process a payment using the PayPal wallet billing agreement or a vaulted payment method that has been stored or is intended to be stored.

## Structure

`PaypalWalletStoredCredential`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInitiator` | [`PaymentInitiator`](../../doc/models/payment-initiator.md) | Required | The person or party who initiated or triggered the payment.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `chargePattern` | [`UsagePattern \| undefined`](../../doc/models/usage-pattern.md) | Optional | Expected business/pricing model for the billing agreement.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `30`, *Pattern*: `^[A-Z0-9_]+$` |
| `usagePattern` | [`UsagePattern \| undefined`](../../doc/models/usage-pattern.md) | Optional | Expected business/pricing model for the billing agreement.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `30`, *Pattern*: `^[A-Z0-9_]+$` |
| `usage` | [`StoredPaymentSourceUsageType \| undefined`](../../doc/models/stored-payment-source-usage-type.md) | Optional | Indicates if this is a `first` or `subsequent` payment using a stored payment source (also referred to as stored credential or card on file).<br><br>**Default**: `StoredPaymentSourceUsageType.Derived`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |

## Example (as JSON)

```json
{
  "payment_initiator": "CUSTOMER",
  "usage": "DERIVED",
  "charge_pattern": "IMMEDIATE",
  "usage_pattern": "IMMEDIATE"
}
```

