/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The capture identification-related fields. Includes the invoice ID, custom ID, note to payer, and soft descriptor. */
export interface SupplementaryPurchaseData {
  /** The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. */
  invoiceId?: string;
  /** An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives. */
  noteToPayer?: string;
}

export const supplementaryPurchaseDataSchema: Schema<SupplementaryPurchaseData> = object(
  {
    invoiceId: ['invoice_id', optional(string())],
    noteToPayer: ['note_to_payer', optional(string())],
  }
);
