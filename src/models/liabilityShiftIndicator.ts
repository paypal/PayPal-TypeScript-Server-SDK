/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for LiabilityShiftIndicator
 */
export enum LiabilityShiftIndicator {
  NO = 'NO',
  POSSIBLE = 'POSSIBLE',
  UNKNOWN = 'UNKNOWN',
}

/**
 * Schema for LiabilityShiftIndicator
 */
export const liabilityShiftIndicatorSchema: Schema<LiabilityShiftIndicator> = stringEnum(
  LiabilityShiftIndicator,
  true
);
