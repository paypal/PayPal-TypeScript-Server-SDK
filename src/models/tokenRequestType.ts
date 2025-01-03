/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TokenRequestType
 */
export enum TokenRequestType {
  SetupToken = 'SETUP_TOKEN',
  BillingAgreement = 'BILLING_AGREEMENT',
}

/**
 * Schema for TokenRequestType
 */
export const tokenRequestTypeSchema: Schema<TokenRequestType> = stringEnum(
  TokenRequestType,
  true
);
