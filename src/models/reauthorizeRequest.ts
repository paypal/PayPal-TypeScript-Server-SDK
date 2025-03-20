/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Money, moneySchema } from './money';

/** Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize a payment after its initial three-day honor period expires. You can reauthorize a payment only once from days four to 29. If 30 days have transpired since the date of the original authorization, you must create an authorized payment instead of reauthorizing the original authorized payment. A reauthorized payment itself has a new honor period of three days. You can reauthorize an authorized payment once. The allowed amount depends on context and geography, for example in US it is up to 115% of the original authorized amount, not to exceed an increase of $75 USD. Supports only the `amount` request parameter. Note: This request is currently not supported for Partner use cases. */
export interface ReauthorizeRequest {
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  amount?: Money;
}

export const reauthorizeRequestSchema: Schema<ReauthorizeRequest> = object({
  amount: ['amount', optional(lazy(() => moneySchema))],
});
