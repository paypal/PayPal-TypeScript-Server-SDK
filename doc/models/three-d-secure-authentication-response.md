
# Three D Secure Authentication Response

Results of 3D Secure Authentication.

## Structure

`ThreeDSecureAuthenticationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationStatus` | [`PaResStatus \| undefined`](../../doc/models/pa-res-status.md) | Optional | Transactions status result identifier. The outcome of the issuer's authentication.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `enrollmentStatus` | [`EnrollmentStatus \| undefined`](../../doc/models/enrollment-status.md) | Optional | Status of Authentication eligibility.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |

## Example (as JSON)

```json
{
  "authentication_status": "C",
  "enrollment_status": "Y"
}
```

