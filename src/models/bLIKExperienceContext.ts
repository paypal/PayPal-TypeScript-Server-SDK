/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  ShippingPreference,
  shippingPreferenceSchema,
} from './shippingPreference';

/** Customizes the payer experience during the approval process for the BLIK payment. */
export interface BLIKExperienceContext {
  /** The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode. */
  brandName?: string;
  /** The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/api/rest/reference/country-codes/) or [M49 region code](https://unstats.un.org/unsd/methodology/m49/). */
  locale?: string;
  /** The location from which the shipping address is derived. */
  shippingPreference?: ShippingPreference;
  /** Describes the URL. */
  returnUrl?: string;
  /** Describes the URL. */
  cancelUrl?: string;
  /** An Internet Protocol address (IP address). This address assigns a numerical label to each device that is connected to a computer network through the Internet Protocol. Supports IPv4 and IPv6 addresses. */
  consumerIp?: string;
  /** The payer's User Agent. For example, Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0). */
  consumerUserAgent?: string;
}

export const bLIKExperienceContextSchema: Schema<BLIKExperienceContext> = object(
  {
    brandName: ['brand_name', optional(string())],
    locale: ['locale', optional(string())],
    shippingPreference: [
      'shipping_preference',
      optional(shippingPreferenceSchema),
    ],
    returnUrl: ['return_url', optional(string())],
    cancelUrl: ['cancel_url', optional(string())],
    consumerIp: ['consumer_ip', optional(string())],
    consumerUserAgent: ['consumer_user_agent', optional(string())],
  }
);
