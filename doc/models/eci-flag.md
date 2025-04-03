
# Eci Flag

Electronic Commerce Indicator (ECI). The ECI value is part of the 2 data elements that indicate the transaction was processed electronically. This should be passed on the authorization transaction to the Gateway/Processor.

## Enumeration

`EciFlag`

## Fields

| Name | Description |
|  --- | --- |
| `MastercardNon3DSecureTransaction` | Mastercard non-3-D Secure transaction. |
| `MastercardAttemptedAuthenticationTransaction` | Mastercard attempted authentication transaction. |
| `MastercardFullyAuthenticatedTransaction` | Mastercard fully authenticated transaction. |
| `FullyAuthenticatedTransaction` | VISA, AMEX, JCB, DINERS CLUB fully authenticated transaction. |
| `AttemptedAuthenticationTransaction` | VISA, AMEX, JCB, DINERS CLUB attempted authentication transaction. |
| `Non3DSecureTransaction` | VISA, AMEX, JCB, DINERS CLUB non-3-D Secure transaction. |

