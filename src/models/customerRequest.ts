/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Customer in merchant's or partner's system of records. */
export interface CustomerRequest {
  /** The unique ID for a customer generated by PayPal. */
  id?: string;
  /** Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer. */
  merchantCustomerId?: string;
}

export const customerRequestSchema: Schema<CustomerRequest> = object({
  id: ['id', optional(string())],
  merchantCustomerId: ['merchant_customer_id', optional(string())],
});
