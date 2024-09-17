/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Representation of card details as received in the request. */
export interface CardFromRequest {
  /** The year and month, in ISO-8601 `YYYY-MM` date format. See [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  expiry?: string;
  /** The last digits of the payment card. */
  lastDigits?: string;
}

export const cardFromRequestSchema: Schema<CardFromRequest> = object({
  expiry: ['expiry', optional(string())],
  lastDigits: ['last_digits', optional(string())],
});
