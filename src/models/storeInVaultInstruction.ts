/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StoreInVaultInstruction
 */
export enum StoreInVaultInstruction {
  ONSUCCESS = 'ON_SUCCESS',
}

/**
 * Schema for StoreInVaultInstruction
 */
export const storeInVaultInstructionSchema: Schema<StoreInVaultInstruction> = stringEnum(
  StoreInVaultInstruction,
  true
);
