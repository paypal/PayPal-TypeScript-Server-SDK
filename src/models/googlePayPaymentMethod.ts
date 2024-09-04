/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for GooglePayPaymentMethod
 */
export enum GooglePayPaymentMethod {
  CARD = 'CARD',
}

/**
 * Schema for GooglePayPaymentMethod
 */
export const googlePayPaymentMethodSchema: Schema<GooglePayPaymentMethod> = stringEnum(
  GooglePayPaymentMethod,
  true
);
