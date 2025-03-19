
# Payments Payment Advice Code

The declined payment transactions might have payment advice codes. The card networks, like Visa and Mastercard, return payment advice codes.

## Enumeration

`PaymentsPaymentAdviceCode`

## Fields

| Name | Description |
|  --- | --- |
| `PaymentAdvice01` | For Mastercard, expired card account upgrade or portfolio sale conversion. Obtain new account information before next billing cycle. |
| `PaymentAdvice02` | For Mastercard, over credit limit or insufficient funds. Retry the transaction 72 hours later. For Visa, the card holder wants to stop only one specific payment in the recurring payment relationship. The merchant must NOT resubmit the same transaction. The merchant can continue the billing process in the subsequent billing period. |
| `PaymentAdvice03` | For Mastercard, account closed as fraudulent. Obtain another type of payment from customer due to account being closed or fraud. Possible reason: Account closed as fraudulent. For Visa, the card holder wants to stop all recurring payment transactions for a specific merchant. Stop recurring payment requests. |
| `PaymentAdvice21` | For Mastercard, the card holder has been unsuccessful at canceling recurring payment through merchant. Stop recurring payment requests. For Visa, all recurring payments were canceled for the card number requested. Stop recurring payment requests. |

