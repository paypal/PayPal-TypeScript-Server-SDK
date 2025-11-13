
# Reason Code

The reason code for the payment failure.

## Enumeration

`ReasonCode`

## Fields

| Name | Description |
|  --- | --- |
| `PaymentDenied` | PayPal declined the payment due to one or more customer issues. |
| `InternalServerError` | An internal server error has occurred. |
| `PayeeAccountRestricted` | The payee account is not in good standing and cannot receive payments. |
| `PayerAccountRestricted` | The payer account is not in good standing and cannot make payments. |
| `PayerCannotPay` | Payer cannot pay for this transaction. |
| `SendingLimitExceeded` | The transaction exceeds the payer's sending limit. |
| `TransactionReceivingLimitExceeded` | The transaction exceeds the receiver's receiving limit. |
| `CurrencyMismatch` | The transaction is declined due to a currency mismatch. |

