/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ApplePayPaymentDataType
 */
export enum ApplePayPaymentDataType {
  Enum3DSECURE = '3DSECURE',
  EMV = 'EMV',
}

/**
 * Schema for ApplePayPaymentDataType
 */
export const applePayPaymentDataTypeSchema: Schema<ApplePayPaymentDataType> = stringEnum(
  ApplePayPaymentDataType,
  true
);
