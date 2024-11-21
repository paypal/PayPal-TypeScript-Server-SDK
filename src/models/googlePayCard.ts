/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { CardBrand, cardBrandSchema } from './cardBrand';
import { CardType, cardTypeSchema } from './cardType';
import {
  PortablePostalAddressMediumGrained,
  portablePostalAddressMediumGrainedSchema,
} from './portablePostalAddressMediumGrained';

/** The payment card used to fund a Google Pay payment. Can be a credit or debit card. */
export interface GooglePayCard {
  /** The card holder's name as it appears on the card. */
  name?: string;
  /** The primary account number (PAN) for the payment card. */
  number?: string;
  /** The year and month, in ISO-8601 `YYYY-MM` date format. See [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  expiry?: string;
  /** The last digits of the payment card. */
  lastDigits?: string;
  /** Type of card. i.e Credit, Debit and so on. */
  type?: CardType;
  /** The card network or brand. Applies to credit, debit, gift, and payment cards. */
  brand?: CardBrand;
  /** The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). */
  billingAddress?: PortablePostalAddressMediumGrained;
}

export const googlePayCardSchema: Schema<GooglePayCard> = object({
  name: ['name', optional(string())],
  number: ['number', optional(string())],
  expiry: ['expiry', optional(string())],
  lastDigits: ['last_digits', optional(string())],
  type: ['type', optional(cardTypeSchema)],
  brand: ['brand', optional(cardBrandSchema)],
  billingAddress: [
    'billing_address',
    optional(lazy(() => portablePostalAddressMediumGrainedSchema)),
  ],
});
