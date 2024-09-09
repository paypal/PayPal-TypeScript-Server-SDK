/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';
import {
  StoreInVaultInstruction,
  storeInVaultInstructionSchema,
} from './storeInVaultInstruction';
import {
  VenmoPaymentTokenCustomerType,
  venmoPaymentTokenCustomerTypeSchema,
} from './venmoPaymentTokenCustomerType';
import {
  VenmoPaymentTokenUsagePattern,
  venmoPaymentTokenUsagePatternSchema,
} from './venmoPaymentTokenUsagePattern';
import {
  VenmoPaymentTokenUsageType,
  venmoPaymentTokenUsageTypeSchema,
} from './venmoPaymentTokenUsageType';

/** Resource consolidating common request and response attirbutes for vaulting Venmo Wallet. */
export interface VenmoWalletVaultAttributes {
  /** Defines how and when the payment source gets vaulted. */
  storeInVault: StoreInVaultInstruction;
  /** The description displayed to Venmo consumer on the approval flow for Venmo, as well as on the Venmo payment token management experience on Venmo.com. */
  description?: string;
  /** Expected business/pricing model for the billing agreement. */
  usagePattern?: VenmoPaymentTokenUsagePattern;
  /** The usage type associated with the Venmo payment token. */
  usageType: VenmoPaymentTokenUsageType;
  /** The customer type associated with the Venmo payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer. */
  customerType?: VenmoPaymentTokenCustomerType;
  /** Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same Venmo account. */
  permitMultiplePaymentTokens?: boolean;
}

export const venmoWalletVaultAttributesSchema: Schema<VenmoWalletVaultAttributes> = object(
  {
    storeInVault: ['store_in_vault', storeInVaultInstructionSchema],
    description: ['description', optional(string())],
    usagePattern: [
      'usage_pattern',
      optional(venmoPaymentTokenUsagePatternSchema),
    ],
    usageType: ['usage_type', venmoPaymentTokenUsageTypeSchema],
    customerType: [
      'customer_type',
      optional(venmoPaymentTokenCustomerTypeSchema),
    ],
    permitMultiplePaymentTokens: [
      'permit_multiple_payment_tokens',
      optional(boolean()),
    ],
  }
);
