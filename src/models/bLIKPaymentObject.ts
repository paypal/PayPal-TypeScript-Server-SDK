/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  BLIKOneClickPaymentObject,
  bLIKOneClickPaymentObjectSchema,
} from './bLIKOneClickPaymentObject';

/** Information used to pay using BLIK. */
export interface BLIKPaymentObject {
  /** The full name representation like Mr J Smith. */
  name?: string;
  /** The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote> */
  countryCode?: string;
  /** The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote> */
  email?: string;
  /** Information used to pay using BLIK one-click flow. */
  oneClick?: BLIKOneClickPaymentObject;
}

export const bLIKPaymentObjectSchema: Schema<BLIKPaymentObject> = object({
  name: ['name', optional(string())],
  countryCode: ['country_code', optional(string())],
  email: ['email', optional(string())],
  oneClick: [
    'one_click',
    optional(lazy(() => bLIKOneClickPaymentObjectSchema)),
  ],
});
