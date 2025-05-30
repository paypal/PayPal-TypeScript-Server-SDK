/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  BlikExperienceContext,
  blikExperienceContextSchema,
} from './blikExperienceContext';
import {
  BlikLevel0PaymentObject,
  blikLevel0PaymentObjectSchema,
} from './blikLevel0PaymentObject';
import {
  BlikOneClickPaymentRequest,
  blikOneClickPaymentRequestSchema,
} from './blikOneClickPaymentRequest';

/** Information needed to pay using BLIK. */
export interface BlikPaymentRequest {
  /** The full name representation like Mr J Smith. */
  name: string;
  /** The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region. Note: The country code for Great Britain is GB and not UK as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions. */
  countryCode: string;
  /** The internationalized email address. Note: Up to 64 characters are allowed before and 255 characters are allowed after the @ sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted @ sign exists. */
  email?: string;
  /** Customizes the payer experience during the approval process for the BLIK payment. */
  experienceContext?: BlikExperienceContext;
  /** Information used to pay using BLIK level_0 flow. */
  level0?: BlikLevel0PaymentObject;
  /** Information used to pay using BLIK one-click flow. */
  oneClick?: BlikOneClickPaymentRequest;
}

export const blikPaymentRequestSchema: Schema<BlikPaymentRequest> = object({
  name: ['name', string()],
  countryCode: ['country_code', string()],
  email: ['email', optional(string())],
  experienceContext: [
    'experience_context',
    optional(lazy(() => blikExperienceContextSchema)),
  ],
  level0: ['level_0', optional(lazy(() => blikLevel0PaymentObjectSchema))],
  oneClick: [
    'one_click',
    optional(lazy(() => blikOneClickPaymentRequestSchema)),
  ],
});
