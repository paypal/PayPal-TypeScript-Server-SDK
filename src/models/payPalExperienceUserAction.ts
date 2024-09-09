/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayPalExperienceUserAction
 */
export enum PayPalExperienceUserAction {
  CONTINUE = 'CONTINUE',
  PAYNOW = 'PAY_NOW',
}

/**
 * Schema for PayPalExperienceUserAction
 */
export const payPalExperienceUserActionSchema: Schema<PayPalExperienceUserAction> = stringEnum(
  PayPalExperienceUserAction,
  true
);
