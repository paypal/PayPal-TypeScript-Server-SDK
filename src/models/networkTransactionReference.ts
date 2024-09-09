/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { CardBrand, cardBrandSchema } from './cardBrand';

/** Reference values used by the card network to identify a transaction. */
export interface NetworkTransactionReference {
  /** Transaction reference id returned by the scheme. For Visa and Amex, this is the "Tran id" field in response. For MasterCard, this is the "BankNet reference id" field in response. For Discover, this is the "NRID" field in response. The pattern we expect for this field from Visa/Amex/CB/Discover is numeric, Mastercard/BNPP is alphanumeric and Paysecure is alphanumeric with special character -. */
  id: string;
  /** The date that the transaction was authorized by the scheme. This field may not be returned for all networks. MasterCard refers to this field as "BankNet reference date. */
  date?: string;
  /** The card network or brand. Applies to credit, debit, gift, and payment cards. */
  network?: CardBrand;
  /** Reference ID issued for the card transaction. This ID can be used to track the transaction across processors, card brands and issuing banks. */
  acquirerReferenceNumber?: string;
}

export const networkTransactionReferenceSchema: Schema<NetworkTransactionReference> = object(
  {
    id: ['id', string()],
    date: ['date', optional(string())],
    network: ['network', optional(cardBrandSchema)],
    acquirerReferenceNumber: ['acquirer_reference_number', optional(string())],
  }
);
