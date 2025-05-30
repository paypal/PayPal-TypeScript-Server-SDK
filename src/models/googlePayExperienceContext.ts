/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Customizes the payer experience during the approval process for the payment. */
export interface GooglePayExperienceContext {
  /** Describes the URL. */
  returnUrl: string;
  /** Describes the URL. */
  cancelUrl: string;
}

export const googlePayExperienceContextSchema: Schema<GooglePayExperienceContext> = object(
  { returnUrl: ['return_url', string()], cancelUrl: ['cancel_url', string()] }
);
