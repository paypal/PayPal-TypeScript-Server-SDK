/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { PhoneWithType, phoneWithTypeSchema } from './phoneWithType';

/** The details about a customer in PayPal's system of record. */
export interface CardCustomerInformation {
  /** The unique ID for a customer generated by PayPal. */
  id?: string;
  /** The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote> */
  emailAddress?: string;
  /** The phone information. */
  phone?: PhoneWithType;
  /** Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer. */
  merchantCustomerId?: string;
}

export const cardCustomerInformationSchema: Schema<CardCustomerInformation> = object(
  {
    id: ['id', optional(string())],
    emailAddress: ['email_address', optional(string())],
    phone: ['phone', optional(lazy(() => phoneWithTypeSchema))],
    merchantCustomerId: ['merchant_customer_id', optional(string())],
  }
);
