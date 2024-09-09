/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  VenmoWalletCustomerInformation,
  venmoWalletCustomerInformationSchema,
} from './venmoWalletCustomerInformation';
import {
  VenmoWalletVaultAttributes,
  venmoWalletVaultAttributesSchema,
} from './venmoWalletVaultAttributes';

/** Additional attributes associated with the use of this Venmo Wallet. */
export interface VenmoWalletAdditionalAttributes {
  /** The details about a customer in PayPal's system of record. */
  customer?: VenmoWalletCustomerInformation;
  /** Resource consolidating common request and response attirbutes for vaulting Venmo Wallet. */
  vault?: VenmoWalletVaultAttributes;
}

export const venmoWalletAdditionalAttributesSchema: Schema<VenmoWalletAdditionalAttributes> = object(
  {
    customer: [
      'customer',
      optional(lazy(() => venmoWalletCustomerInformationSchema)),
    ],
    vault: ['vault', optional(lazy(() => venmoWalletVaultAttributesSchema))],
  }
);
