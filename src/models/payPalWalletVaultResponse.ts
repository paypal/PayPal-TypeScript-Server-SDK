/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { LinkDescription, linkDescriptionSchema } from './linkDescription';
import {
  PayPalWalletCustomer,
  payPalWalletCustomerSchema,
} from './payPalWalletCustomer';
import {
  PayPalWalletVaultStatus,
  payPalWalletVaultStatusSchema,
} from './payPalWalletVaultStatus';

/** The details about a saved PayPal Wallet payment source. */
export interface PayPalWalletVaultResponse {
  /** The PayPal-generated ID for the saved payment source. */
  id?: string;
  /** The vault status. */
  status?: PayPalWalletVaultStatus;
  /** An array of request-related HATEOAS links. */
  links?: LinkDescription[];
  /** The details about a customer in PayPal's system of record. */
  customer?: PayPalWalletCustomer;
}

export const payPalWalletVaultResponseSchema: Schema<PayPalWalletVaultResponse> = object(
  {
    id: ['id', optional(string())],
    status: ['status', optional(payPalWalletVaultStatusSchema)],
    links: ['links', optional(array(lazy(() => linkDescriptionSchema)))],
    customer: ['customer', optional(lazy(() => payPalWalletCustomerSchema))],
  }
);
