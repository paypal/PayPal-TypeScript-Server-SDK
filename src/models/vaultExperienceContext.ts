/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Customizes the Vault creation flow experience for your customers. */
export interface VaultExperienceContext {
  /** The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode. */
  brandName?: string;
  /** The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/api/rest/reference/country-codes/) or [M49 region code](https://unstats.un.org/unsd/methodology/m49/). */
  locale?: string;
  /** The URL where the customer is redirected after customer approves leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS. */
  returnUrl?: string;
  /** The URL where the customer is redirected after customer cancels or leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS. */
  cancelUrl?: string;
  /** The shipping preference. This only applies to PayPal payment source. */
  shippingPreference?: string;
  /** Vault Instruction on action to be performed after a successful payer approval. */
  vaultInstruction?: string;
}

export const vaultExperienceContextSchema: Schema<VaultExperienceContext> = object(
  {
    brandName: ['brand_name', optional(string())],
    locale: ['locale', optional(string())],
    returnUrl: ['return_url', optional(string())],
    cancelUrl: ['cancel_url', optional(string())],
    shippingPreference: ['shipping_preference', optional(string())],
    vaultInstruction: ['vault_instruction', optional(string())],
  }
);
