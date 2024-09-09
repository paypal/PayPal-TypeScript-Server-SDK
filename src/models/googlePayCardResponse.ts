/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import {
  AuthenticationResponse,
  authenticationResponseSchema,
} from './authenticationResponse';
import { CardBrand, cardBrandSchema } from './cardBrand';
import { CardType, cardTypeSchema } from './cardType';

/** The payment card to use to fund a Google Pay payment response. Can be a credit or debit card. */
export interface GooglePayCardResponse {
  /** The card holder's name as it appears on the card. */
  name?: string;
  /** The last digits of the payment card. */
  lastDigits?: string;
  /** Type of card. i.e Credit, Debit and so on. */
  type?: CardType;
  /** The card network or brand. Applies to credit, debit, gift, and payment cards. */
  brand?: CardBrand;
  /** The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). */
  billingAddress?: Address;
  /** Results of Authentication such as 3D Secure. */
  authenticationResult?: AuthenticationResponse;
}

export const googlePayCardResponseSchema: Schema<GooglePayCardResponse> = object(
  {
    name: ['name', optional(string())],
    lastDigits: ['last_digits', optional(string())],
    type: ['type', optional(cardTypeSchema)],
    brand: ['brand', optional(cardBrandSchema)],
    billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
    authenticationResult: [
      'authentication_result',
      optional(lazy(() => authenticationResponseSchema)),
    ],
  }
);
