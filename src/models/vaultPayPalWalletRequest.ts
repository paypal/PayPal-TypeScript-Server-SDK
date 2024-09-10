/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  VaultedDigitalWalletShippingDetails,
  vaultedDigitalWalletShippingDetailsSchema,
} from './vaultedDigitalWalletShippingDetails';
import {
  VaultExperienceContext,
  vaultExperienceContextSchema,
} from './vaultExperienceContext';

/** A resource representing a request to vault PayPal Wallet. */
export interface VaultPayPalWalletRequest {
  /** The description displayed to the consumer on the approval flow for a digital wallet, as well as on the merchant view of the payment token management experience. exp: PayPal.com. */
  description?: string;
  /** The shipping details. */
  shipping?: VaultedDigitalWalletShippingDetails;
  /** Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source. */
  permitMultiplePaymentTokens?: boolean;
  /** The usage type associated with a digital wallet payment token. */
  usageType?: string;
  /** The customer type associated with a digital wallet payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer. */
  customerType?: string;
  /** Customizes the Vault creation flow experience for your customers. */
  experienceContext?: VaultExperienceContext;
}

export const vaultPayPalWalletRequestSchema: Schema<VaultPayPalWalletRequest> = object(
  {
    description: ['description', optional(string())],
    shipping: [
      'shipping',
      optional(lazy(() => vaultedDigitalWalletShippingDetailsSchema)),
    ],
    permitMultiplePaymentTokens: [
      'permit_multiple_payment_tokens',
      optional(boolean()),
    ],
    usageType: ['usage_type', optional(string())],
    customerType: ['customer_type', optional(string())],
    experienceContext: [
      'experience_context',
      optional(lazy(() => vaultExperienceContextSchema)),
    ],
  }
);
