/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalPaymentTokenUsagePattern
 */
export enum PaypalPaymentTokenUsagePattern {
  Immediate = 'IMMEDIATE',
  Deferred = 'DEFERRED',
  RecurringPrepaid = 'RECURRING_PREPAID',
  RecurringPostpaid = 'RECURRING_POSTPAID',
  ThresholdPrepaid = 'THRESHOLD_PREPAID',
  ThresholdPostpaid = 'THRESHOLD_POSTPAID',
}

/**
 * Schema for PaypalPaymentTokenUsagePattern
 */
export const paypalPaymentTokenUsagePatternSchema: Schema<PaypalPaymentTokenUsagePattern> = stringEnum(
  PaypalPaymentTokenUsagePattern,
  true
);