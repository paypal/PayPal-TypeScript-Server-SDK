/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Information used to pay using BLIK one-click flow. */
export interface BLIKOneClickPaymentObject {
  /** The merchant generated, unique reference serving as a primary identifier for accounts connected between Blik and a merchant. */
  consumerReference?: string;
}

export const bLIKOneClickPaymentObjectSchema: Schema<BLIKOneClickPaymentObject> = object(
  { consumerReference: ['consumer_reference', optional(string())] }
);
