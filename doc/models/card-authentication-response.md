
# Card Authentication Response

Results of Authentication such as 3D Secure.

## Structure

`CardAuthenticationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `threeDSecure` | [`ThreeDSecureCardAuthenticationResponse \| undefined`](../../doc/models/three-d-secure-card-authentication-response.md) | Optional | Results of 3D Secure Authentication. |

## Example

```ts
import {
  CardAuthenticationResponse,
  EnrollmentStatus,
  PaResStatus,
} from '@paypal/paypal-server-sdk';

const cardAuthenticationResponse: CardAuthenticationResponse = {
  threeDSecure: {
    authenticationStatus: PaResStatus.ChallengeRequired,
    enrollmentStatus: EnrollmentStatus.Enrolled,
    authenticationId: 'authentication_id6',
  },
};
```

