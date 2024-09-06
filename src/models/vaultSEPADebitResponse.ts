/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string, unknown } from '../schema';
import { Address, addressSchema } from './address';

/** An API resource used in the response of securely storing a SEPA Debit. */
export interface VaultSEPADebitResponse {
  /** The last characters of the IBAN used to pay. */
  ibanLastChars?: string;
  accountHolderName?: unknown;
  /** The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). */
  billingAddress?: Address;
}

export const vaultSEPADebitResponseSchema: Schema<VaultSEPADebitResponse> = object(
  {
    ibanLastChars: ['iban_last_chars', optional(string())],
    accountHolderName: ['account_holder_name', optional(unknown())],
    billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
  }
);
