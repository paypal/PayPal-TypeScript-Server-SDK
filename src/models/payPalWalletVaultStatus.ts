/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalWalletVaultStatus
 */
export enum PaypalWalletVaultStatus {
  VAULTED = 'VAULTED',
  CREATED = 'CREATED',
  APPROVED = 'APPROVED',
}

/**
 * Schema for PaypalWalletVaultStatus
 */
export const paypalWalletVaultStatusSchema: Schema<PaypalWalletVaultStatus> = stringEnum(
  PaypalWalletVaultStatus,
  true
);
