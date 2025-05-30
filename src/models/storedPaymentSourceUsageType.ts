/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StoredPaymentSourceUsageType
 */
export enum StoredPaymentSourceUsageType {
  First = 'FIRST',
  Subsequent = 'SUBSEQUENT',
  Derived = 'DERIVED',
}

/**
 * Schema for StoredPaymentSourceUsageType
 */
export const storedPaymentSourceUsageTypeSchema: Schema<StoredPaymentSourceUsageType> = stringEnum(
  StoredPaymentSourceUsageType,
  true
);
