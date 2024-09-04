
# Supplementary Purchase Data

The capture identification-related fields. Includes the invoice ID, custom ID, note to payer, and soft descriptor.

## Structure

`SupplementaryPurchaseData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.{1,127}$` |
| `noteToPayer` | `string \| undefined` | Optional | An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^.{1,255}$` |

## Example (as JSON)

```json
{
  "invoice_id": "invoice_id8",
  "note_to_payer": "note_to_payer0"
}
```

