/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  NetworkTransactionReference,
  networkTransactionReferenceSchema,
} from './networkTransactionReference';
import { PaymentInitiator, paymentInitiatorSchema } from './paymentInitiator';
import {
  StoredPaymentSourcePaymentType,
  storedPaymentSourcePaymentTypeSchema,
} from './storedPaymentSourcePaymentType';
import {
  StoredPaymentSourceUsageType,
  storedPaymentSourceUsageTypeSchema,
} from './storedPaymentSourceUsageType';

/** Provides additional details to process a payment using a `payment_source` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/><ul><li>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`.</li><li>Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.</li></ul> */
export interface StoredPaymentSource {
  /** The person or party who initiated or triggered the payment. */
  paymentInitiator: PaymentInitiator;
  /** Indicates the type of the stored payment_source payment. */
  paymentType: StoredPaymentSourcePaymentType;
  /** Indicates if this is a `first` or `subsequent` payment using a stored payment source (also referred to as stored credential or card on file). */
  usage?: StoredPaymentSourceUsageType;
  /** Reference values used by the card network to identify a transaction. */
  previousNetworkTransactionReference?: NetworkTransactionReference;
}

export const storedPaymentSourceSchema: Schema<StoredPaymentSource> = object({
  paymentInitiator: ['payment_initiator', paymentInitiatorSchema],
  paymentType: ['payment_type', storedPaymentSourcePaymentTypeSchema],
  usage: ['usage', optional(storedPaymentSourceUsageTypeSchema)],
  previousNetworkTransactionReference: [
    'previous_network_transaction_reference',
    optional(lazy(() => networkTransactionReferenceSchema)),
  ],
});
