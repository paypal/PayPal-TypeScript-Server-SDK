/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderApplicationContextUserAction
 */
export enum OrderApplicationContextUserAction {
  CONTINUE = 'CONTINUE',
  PAYNOW = 'PAY_NOW',
}

/**
 * Schema for OrderApplicationContextUserAction
 */
export const orderApplicationContextUserActionSchema: Schema<OrderApplicationContextUserAction> = stringEnum(
  OrderApplicationContextUserAction,
  true
);
