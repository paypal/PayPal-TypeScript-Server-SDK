/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalPaymentTokenCustomerType
 */
export enum PaypalPaymentTokenCustomerType {
  Consumer = 'CONSUMER',
  Business = 'BUSINESS',
}

/**
 * Schema for PaypalPaymentTokenCustomerType
 */
export const paypalPaymentTokenCustomerTypeSchema: Schema<PaypalPaymentTokenCustomerType> = stringEnum(
  PaypalPaymentTokenCustomerType,
  true
);
