
# Capture Request

## Structure

`CaptureRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.{1,127}$` |
| `noteToPayer` | `string \| undefined` | Optional | An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^.{1,255}$` |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `finalCapture` | `boolean \| undefined` | Optional | Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.<br><br>**Default**: `false` |
| `paymentInstruction` | [`CapturePaymentInstruction \| undefined`](../../doc/models/capture-payment-instruction.md) | Optional | Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order. |
| `softDescriptor` | `string \| undefined` | Optional | The payment descriptor on the payer's account statement.<br><br>**Constraints**: *Maximum Length*: `22` |

## Example (as JSON)

```json
{
  "final_capture": false,
  "invoice_id": "invoice_id4",
  "note_to_payer": "note_to_payer6",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  },
  "payment_instruction": {
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
      },
      {
        "amount": {
          "currency_code": "currency_code6",
          "value": "value0"
        },
        "payee": {
          "email_address": "email_address4",
          "merchant_id": "merchant_id6"
        }
      },
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
    "disbursement_mode": "INSTANT",
    "payee_receivable_fx_rate_id": "payee_receivable_fx_rate_id0"
  }
}
```

