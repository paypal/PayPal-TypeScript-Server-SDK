/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';
import {
  PayPalPaymentTokenCustomerType,
  payPalPaymentTokenCustomerTypeSchema,
} from './payPalPaymentTokenCustomerType';
import {
  PayPalPaymentTokenUsagePattern,
  payPalPaymentTokenUsagePatternSchema,
} from './payPalPaymentTokenUsagePattern';
import {
  PayPalPaymentTokenUsageType,
  payPalPaymentTokenUsageTypeSchema,
} from './payPalPaymentTokenUsageType';
import {
  StoreInVaultInstruction,
  storeInVaultInstructionSchema,
} from './storeInVaultInstruction';

export interface PayPalWalletVaultInstruction {
  /** Defines how and when the payment source gets vaulted. */
  storeInVault?: StoreInVaultInstruction;
  /** The description displayed to PayPal consumer on the approval flow for PayPal, as well as on the PayPal payment token management experience on PayPal.com. */
  description?: string;
  /** Expected business/pricing model for the billing agreement. */
  usagePattern?: PayPalPaymentTokenUsagePattern;
  /** The usage type associated with the PayPal payment token. */
  usageType: PayPalPaymentTokenUsageType;
  /** The customer type associated with the PayPal payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer. */
  customerType?: PayPalPaymentTokenCustomerType;
  /** Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source. */
  permitMultiplePaymentTokens?: boolean;
}

export const payPalWalletVaultInstructionSchema: Schema<PayPalWalletVaultInstruction> = object(
  {
    storeInVault: ['store_in_vault', optional(storeInVaultInstructionSchema)],
    description: ['description', optional(string())],
    usagePattern: [
      'usage_pattern',
      optional(payPalPaymentTokenUsagePatternSchema),
    ],
    usageType: ['usage_type', payPalPaymentTokenUsageTypeSchema],
    customerType: [
      'customer_type',
      optional(payPalPaymentTokenCustomerTypeSchema),
    ],
    permitMultiplePaymentTokens: [
      'permit_multiple_payment_tokens',
      optional(boolean()),
    ],
  }
);
