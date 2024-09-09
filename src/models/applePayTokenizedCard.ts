/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { CardBrand, cardBrandSchema } from './cardBrand';
import { CardType, cardTypeSchema } from './cardType';

/** The payment card to use to fund a payment. Can be a credit or debit card. */
export interface ApplePayTokenizedCard {
  /** The card holder's name as it appears on the card. */
  name?: string;
  /** The primary account number (PAN) for the payment card. */
  number?: string;
  /** The year and month, in ISO-8601 `YYYY-MM` date format. See [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  expiry?: string;
  /** The card network or brand. Applies to credit, debit, gift, and payment cards. */
  cardType?: CardBrand;
  /** Type of card. i.e Credit, Debit and so on. */
  type?: CardType;
  /** The card network or brand. Applies to credit, debit, gift, and payment cards. */
  brand?: CardBrand;
  /** The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). */
  billingAddress?: Address;
}

export const applePayTokenizedCardSchema: Schema<ApplePayTokenizedCard> = object(
  {
    name: ['name', optional(string())],
    number: ['number', optional(string())],
    expiry: ['expiry', optional(string())],
    cardType: ['card_type', optional(cardBrandSchema)],
    type: ['type', optional(cardTypeSchema)],
    brand: ['brand', optional(cardBrandSchema)],
    billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
  }
);
