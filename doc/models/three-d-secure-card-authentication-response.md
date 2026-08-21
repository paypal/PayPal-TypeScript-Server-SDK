
# Three D Secure Card Authentication Response

Results of 3D Secure Authentication.

## Structure

`ThreeDSecureCardAuthenticationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationStatus` | [`PaResStatus \| undefined`](../../doc/models/pa-res-status.md) | Optional | Transactions status result identifier. The outcome of the issuer's authentication.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `enrollmentStatus` | [`EnrollmentStatus \| undefined`](../../doc/models/enrollment-status.md) | Optional | Status of Authentication eligibility.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `authenticationId` | `string \| undefined` | Optional | The externally received 3ds authentication id, to be returned in card detokenization response.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9a-zA-Z_-]+$` |

## Example

```ts
import {
  EnrollmentStatus,
  PaResStatus,
  ThreeDSecureCardAuthenticationResponse,
} from '@paypal/paypal-server-sdk';

const threeDSecureCardAuthenticationResponse: ThreeDSecureCardAuthenticationResponse = {
  authenticationStatus: PaResStatus.UnableToCompleteAuthentication,
  enrollmentStatus: EnrollmentStatus.Unavailable,
  authenticationId: 'authentication_id4',
};
```

