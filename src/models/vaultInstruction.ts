/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema } from '../schema';
import {
  StoreInVaultInstruction,
  storeInVaultInstructionSchema,
} from './storeInVaultInstruction';

/** Base vaulting specification. The object can be extended for specific use cases within each payment_source that supports vaulting. */
export interface VaultInstruction {
  /** Defines how and when the payment source gets vaulted. */
  storeInVault: StoreInVaultInstruction;
}

export const vaultInstructionSchema: Schema<VaultInstruction> = object({
  storeInVault: ['store_in_vault', storeInVaultInstructionSchema],
});
