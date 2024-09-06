/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  LiabilityShiftIndicator,
  liabilityShiftIndicatorSchema,
} from './liabilityShiftIndicator';
import {
  ThreeDSecureAuthenticationResponse,
  threeDSecureAuthenticationResponseSchema,
} from './threeDSecureAuthenticationResponse';

/** Results of Authentication such as 3D Secure. */
export interface AuthenticationResponse {
  /** Liability shift indicator. The outcome of the issuer's authentication. */
  liabilityShift?: LiabilityShiftIndicator;
  /** Results of 3D Secure Authentication. */
  threeDSecure?: ThreeDSecureAuthenticationResponse;
}

export const authenticationResponseSchema: Schema<AuthenticationResponse> = object(
  {
    liabilityShift: [
      'liability_shift',
      optional(liabilityShiftIndicatorSchema),
    ],
    threeDSecure: [
      'three_d_secure',
      optional(lazy(() => threeDSecureAuthenticationResponseSchema)),
    ],
  }
);
