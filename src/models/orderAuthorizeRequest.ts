/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  OrderAuthorizeRequestPaymentSource,
  orderAuthorizeRequestPaymentSourceSchema,
} from './orderAuthorizeRequestPaymentSource';

/** The authorization of an order request. */
export interface OrderAuthorizeRequest {
  /** The payment source definition. */
  paymentSource?: OrderAuthorizeRequestPaymentSource;
}

export const orderAuthorizeRequestSchema: Schema<OrderAuthorizeRequest> = object(
  {
    paymentSource: [
      'payment_source',
      optional(lazy(() => orderAuthorizeRequestPaymentSourceSchema)),
    ],
  }
);
