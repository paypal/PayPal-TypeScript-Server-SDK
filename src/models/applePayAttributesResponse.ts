/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { VaultResponse, vaultResponseSchema } from './vaultResponse';

/** Additional attributes associated with the use of Apple Pay. */
export interface ApplePayAttributesResponse {
  /** The details about a saved payment source. */
  vault?: VaultResponse;
}

export const applePayAttributesResponseSchema: Schema<ApplePayAttributesResponse> = object(
  { vault: ['vault', optional(lazy(() => vaultResponseSchema))] }
);
