/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RefundStatus
 */
export enum RefundStatus {
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
}

/**
 * Schema for RefundStatus
 */
export const refundStatusSchema: Schema<RefundStatus> = stringEnum(
  RefundStatus,
  true
);
