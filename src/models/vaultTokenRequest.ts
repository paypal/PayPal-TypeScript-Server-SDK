/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';
import { TokenRequestType, tokenRequestTypeSchema } from './tokenRequestType';

/** The Tokenized Payment Source representing a Request to Vault a Token. */
export interface VaultTokenRequest {
  /** The PayPal-generated ID for the token. */
  id: string;
  /** The tokenization method that generated the ID. */
  type: TokenRequestType;
}

export const vaultTokenRequestSchema: Schema<VaultTokenRequest> = object({
  id: ['id', string()],
  type: ['type', tokenRequestTypeSchema],
});
