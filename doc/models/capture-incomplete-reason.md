
# Capture Incomplete Reason

The reason why the captured payment status is `PENDING` or `DENIED`.

## Enumeration

`CaptureIncompleteReason`

## Fields

| Name | Description |
|  --- | --- |
| `BuyerComplaint` | The payer initiated a dispute for this captured payment with PayPal. |
| `Chargeback` | The captured funds were reversed in response to the payer disputing this captured payment with the issuer of the financial instrument used to pay for this captured payment. |
| `Echeck` | The payer paid by an eCheck that has not yet cleared. |
| `InternationalWithdrawal` | Visit your online account. In your **Account Overview**, accept and deny this payment. |
| `Other` | No additional specific reason can be provided. For more information about this captured payment, visit your account online or contact PayPal. |
| `PendingReview` | The captured payment is pending manual review. |
| `ReceivingPreferenceMandatesManualAction` | The payee has not yet set up appropriate receiving preferences for their account. For more information about how to accept or deny this payment, visit your account online. This reason is typically offered in scenarios such as when the currency of the captured payment is different from the primary holding currency of the payee. |
| `Refunded` | The captured funds were refunded. |
| `TransactionApprovedAwaitingFunding` | The payer must send the funds for this captured payment. This code generally appears for manual EFTs. |
| `Unilateral` | The payee does not have a PayPal account. |
| `VerificationRequired` | The payee's PayPal account is not verified. |
| `DeclinedByRiskFraudFilters` | Risk Filter set by the payee failed for the transaction. |

