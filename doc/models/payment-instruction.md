
# Payment Instruction

Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order.

## Structure

`PaymentInstruction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `platformFees` | [`PlatformFee[] \| undefined`](../../doc/models/platform-fee.md) | Optional | An array of various fees, commissions, tips, or donations. This field is only applicable to merchants that been enabled for PayPal Complete Payments Platform for Marketplaces and Platforms capability.<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `1` |
| `disbursementMode` | [`DisbursementMode \| undefined`](../../doc/models/disbursement-mode.md) | Optional | The funds that are held on behalf of the merchant.<br>**Default**: `DisbursementMode.Instant`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16`, *Pattern*: `^[A-Z_]+$` |
| `payeePricingTierId` | `string \| undefined` | Optional | This field is only enabled for selected merchants/partners to use and provides the ability to trigger a specific pricing rate/plan for a payment transaction. The list of eligible 'payee_pricing_tier_id' would be provided to you by your Account Manager. Specifying values other than the one provided to you by your account manager would result in an error.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^.*$` |
| `payeeReceivableFxRateId` | `string \| undefined` | Optional | FX identifier generated returned by PayPal to be used for payment processing in order to honor FX rate (for eligible integrations) to be used when amount is settled/received into the payee account.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4000`, *Pattern*: `^.*$` |

## Example (as JSON)

```json
{
  "disbursement_mode": "INSTANT",
  "platform_fees": [
    {
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "payee": {
        "email_address": "email_address4",
        "merchant_id": "merchant_id6"
      }
    }
  ],
  "payee_pricing_tier_id": "payee_pricing_tier_id6",
  "payee_receivable_fx_rate_id": "payee_receivable_fx_rate_id4"
}
```

