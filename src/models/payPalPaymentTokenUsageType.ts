/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayPalPaymentTokenUsageType
 */
export enum PayPalPaymentTokenUsageType {
  MERCHANT = 'MERCHANT',
  PLATFORM = 'PLATFORM',
}

/**
 * Schema for PayPalPaymentTokenUsageType
 */
export const payPalPaymentTokenUsageTypeSchema: Schema<PayPalPaymentTokenUsageType> = stringEnum(
  PayPalPaymentTokenUsageType,
  true
);