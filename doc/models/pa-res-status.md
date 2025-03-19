
# Pa Res Status

Transactions status result identifier. The outcome of the issuer's authentication.

## Enumeration

`PaResStatus`

## Fields

| Name | Description |
|  --- | --- |
| `SuccessfulAuthentication` | Successful authentication. |
| `FailedAuthentication` | Failed authentication / account not verified / transaction denied. |
| `UnableToCompleteAuthentication` | Unable to complete authentication. |
| `SuccessfulAttemptsTransaction` | Successful attempts transaction. |
| `ChallengeRequired` | Challenge required for authentication. |
| `AuthenticationRejected` | Authentication rejected (merchant must not submit for authorization). |
| `DecoupledAuthentication` | Challenge required; decoupled authentication confirmed. |
| `InformationalOnly` | Informational only; 3DS requestor challenge preference acknowledged. |

