/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  VenmoWalletAdditionalAttributes,
  venmoWalletAdditionalAttributesSchema,
} from './venmoWalletAdditionalAttributes';
import {
  VenmoWalletExperienceContext,
  venmoWalletExperienceContextSchema,
} from './venmoWalletExperienceContext';

/** Information needed to pay using Venmo. */
export interface VenmoWalletRequest {
  /** The PayPal-generated ID for the vaulted payment source. This ID should be stored on the merchant's server so the saved payment source can be used for future transactions. */
  vaultId?: string;
  /** The internationalized email address. Note: Up to 64 characters are allowed before and 255 characters are allowed after the @ sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted @ sign exists. */
  emailAddress?: string;
  /** Customizes the buyer experience during the approval process for payment with Venmo. Note: Partners and Marketplaces might configure shipping_preference during partner account setup, which overrides the request values. */
  experienceContext?: VenmoWalletExperienceContext;
  /** Additional attributes associated with the use of this Venmo Wallet. */
  attributes?: VenmoWalletAdditionalAttributes;
}

export const venmoWalletRequestSchema: Schema<VenmoWalletRequest> = object({
  vaultId: ['vault_id', optional(string())],
  emailAddress: ['email_address', optional(string())],
  experienceContext: [
    'experience_context',
    optional(lazy(() => venmoWalletExperienceContextSchema)),
  ],
  attributes: [
    'attributes',
    optional(lazy(() => venmoWalletAdditionalAttributesSchema)),
  ],
});
