
# Processing Instruction

The instruction to process an order.

## Enumeration

`ProcessingInstruction`

## Fields

| Name | Description |
|  --- | --- |
| `OrderCompleteOnPaymentApproval` | API Caller expects the Order to be auto completed (i.e. for PayPal to authorize or capture depending on the intent) on completion of payer approval. This option is not relevant for payment_source that typically do not require a payer approval or interaction. |
| `NoInstruction` | The API caller intends to authorize or capture the order after the payer approves it. |

