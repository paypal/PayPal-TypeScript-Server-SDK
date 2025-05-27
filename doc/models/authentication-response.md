
# Authentication Response

Results of Authentication such as 3D Secure.

## Structure

`AuthenticationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `liabilityShift` | [`LiabilityShiftIndicator \| undefined`](../../doc/models/liability-shift-indicator.md) | Optional | Liability shift indicator. The outcome of the issuer's authentication.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `threeDSecure` | [`ThreeDSecureAuthenticationResponse \| undefined`](../../doc/models/three-d-secure-authentication-response.md) | Optional | Results of 3D Secure Authentication. |

## Example (as JSON)

```json
{
  "liability_shift": "POSSIBLE",
  "three_d_secure": {
    "authentication_status": "C",
    "enrollment_status": "Y"
  }
}
```

