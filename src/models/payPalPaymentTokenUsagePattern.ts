/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayPalPaymentTokenUsagePattern
 */
export enum PayPalPaymentTokenUsagePattern {
  IMMEDIATE = 'IMMEDIATE',
  DEFERRED = 'DEFERRED',
  RECURRINGPREPAID = 'RECURRING_PREPAID',
  RECURRINGPOSTPAID = 'RECURRING_POSTPAID',
  THRESHOLDPREPAID = 'THRESHOLD_PREPAID',
  THRESHOLDPOSTPAID = 'THRESHOLD_POSTPAID',
}

/**
 * Schema for PayPalPaymentTokenUsagePattern
 */
export const payPalPaymentTokenUsagePatternSchema: Schema<PayPalPaymentTokenUsagePattern> = stringEnum(
  PayPalPaymentTokenUsagePattern,
  true
);
