/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  RefundPlatformFee,
  refundPlatformFeeSchema,
} from './refundPlatformFee';

/** Any additional payments instructions during refund payment processing. This object is only applicable to merchants that have been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability. Please speak to your account manager if you want to use this capability. */
export interface RefundPaymentInstruction {
  /** Specifies the amount that the API caller will contribute to the refund being processed. The amount needs to be lower than platform_fees amount originally captured or the amount that is remaining if multiple refunds have been processed. This field is only applicable to merchants that have been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability. Please speak to your account manager if you want to use this capability. */
  platformFees?: RefundPlatformFee[];
}

export const refundPaymentInstructionSchema: Schema<RefundPaymentInstruction> = object(
  {
    platformFees: [
      'platform_fees',
      optional(array(lazy(() => refundPlatformFeeSchema))),
    ],
  }
);
