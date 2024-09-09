/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  OrderCaptureRequestPaymentSource,
  orderCaptureRequestPaymentSourceSchema,
} from './orderCaptureRequestPaymentSource';

/** Completes an capture payment for an order. */
export interface OrderCaptureRequest {
  /** The payment source definition. */
  paymentSource?: OrderCaptureRequestPaymentSource;
}

export const orderCaptureRequestSchema: Schema<OrderCaptureRequest> = object({
  paymentSource: [
    'payment_source',
    optional(lazy(() => orderCaptureRequestPaymentSourceSchema)),
  ],
});
