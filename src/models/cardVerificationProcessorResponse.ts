/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import { AvsCode, avsCodeSchema } from './avsCode';
import { CvvCode, cvvCodeSchema } from './cvvCode';

/** The processor response information for payment requests, such as direct credit card transactions. */
export interface CardVerificationProcessorResponse {
  /** The address verification code for Visa, Discover, Mastercard, or American Express transactions. */
  avsCode?: AvsCode;
  /** The card verification value code for for Visa, Discover, Mastercard, or American Express. */
  cvvCode?: CvvCode;
}

export const cardVerificationProcessorResponseSchema: Schema<CardVerificationProcessorResponse> = object(
  {
    avsCode: ['avs_code', optional(avsCodeSchema)],
    cvvCode: ['cvv_code', optional(cvvCodeSchema)],
  }
);
