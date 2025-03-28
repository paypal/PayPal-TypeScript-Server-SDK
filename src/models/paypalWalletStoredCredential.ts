/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import { PaymentInitiator, paymentInitiatorSchema } from './paymentInitiator';
import {
  StoredPaymentSourceUsageType,
  storedPaymentSourceUsageTypeSchema,
} from './storedPaymentSourceUsageType';
import { UsagePattern, usagePatternSchema } from './usagePattern';

/** Provides additional details to process a payment using the PayPal wallet billing agreement or a vaulted payment method that has been stored or is intended to be stored. */
export interface PaypalWalletStoredCredential {
  /** The person or party who initiated or triggered the payment. */
  paymentInitiator: PaymentInitiator;
  /** Expected business/pricing model for the billing agreement. */
  chargePattern?: UsagePattern;
  /** Expected business/pricing model for the billing agreement. */
  usagePattern?: UsagePattern;
  /** Indicates if this is a `first` or `subsequent` payment using a stored payment source (also referred to as stored credential or card on file). */
  usage?: StoredPaymentSourceUsageType;
}

export const paypalWalletStoredCredentialSchema: Schema<PaypalWalletStoredCredential> = object(
  {
    paymentInitiator: ['payment_initiator', paymentInitiatorSchema],
    chargePattern: ['charge_pattern', optional(usagePatternSchema)],
    usagePattern: ['usage_pattern', optional(usagePatternSchema)],
    usage: ['usage', optional(storedPaymentSourceUsageTypeSchema)],
  }
);
