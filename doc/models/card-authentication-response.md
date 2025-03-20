
# Card Authentication Response

Results of Authentication such as 3D Secure.

## Structure

`CardAuthenticationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `threeDSecure` | [`ThreeDSecureCardAuthenticationResponse \| undefined`](../../doc/models/three-d-secure-card-authentication-response.md) | Optional | Results of 3D Secure Authentication. |

## Example (as JSON)

```json
{
  "three_d_secure": {
    "authentication_status": "C",
    "enrollment_status": "Y",
    "authentication_id": "authentication_id6"
  }
}
```

