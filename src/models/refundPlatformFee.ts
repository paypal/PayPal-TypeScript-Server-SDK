/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Money, moneySchema } from './money';

/** The platform or partner fee, commission, or brokerage fee that is associated with the transaction. Not a separate or isolated transaction leg from the external perspective. The platform fee is limited in scope and is always associated with the original payment for the purchase unit. */
export interface RefundPlatformFee {
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  amount: Money;
}

export const refundPlatformFeeSchema: Schema<RefundPlatformFee> = object({
  amount: ['amount', lazy(() => moneySchema)],
});
