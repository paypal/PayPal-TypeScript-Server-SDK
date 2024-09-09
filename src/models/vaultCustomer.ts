/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The details about a customer in PayPal's system of record. */
export interface VaultCustomer {
  /** The unique ID for a customer generated by PayPal. */
  id?: string;
}

export const vaultCustomerSchema: Schema<VaultCustomer> = object({
  id: ['id', optional(string())],
});
