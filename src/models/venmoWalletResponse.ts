/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { Name, nameSchema } from './name';
import { PhoneNumber, phoneNumberSchema } from './phoneNumber';
import {
  VenmoWalletAttributesResponse,
  venmoWalletAttributesResponseSchema,
} from './venmoWalletAttributesResponse';

/** Venmo wallet response. */
export interface VenmoWalletResponse {
  /** The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote> */
  emailAddress?: string;
  /** The PayPal payer ID, which is a masked version of the PayPal account number intended for use with third parties. The account number is reversibly encrypted and a proprietary variant of Base32 is used to encode the result. */
  accountId?: string;
  /** The Venmo user name chosen by the user, also know as a Venmo handle. */
  userName?: string;
  /** The name of the party. */
  name?: Name;
  /** The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). */
  phoneNumber?: PhoneNumber;
  /** The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). */
  address?: Address;
  /** Additional attributes associated with the use of a Venmo Wallet. */
  attributes?: VenmoWalletAttributesResponse;
}

export const venmoWalletResponseSchema: Schema<VenmoWalletResponse> = object({
  emailAddress: ['email_address', optional(string())],
  accountId: ['account_id', optional(string())],
  userName: ['user_name', optional(string())],
  name: ['name', optional(lazy(() => nameSchema))],
  phoneNumber: ['phone_number', optional(lazy(() => phoneNumberSchema))],
  address: ['address', optional(lazy(() => addressSchema))],
  attributes: [
    'attributes',
    optional(lazy(() => venmoWalletAttributesResponseSchema)),
  ],
});
