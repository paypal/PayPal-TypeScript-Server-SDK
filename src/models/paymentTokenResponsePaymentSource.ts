/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  ApplePayPaymentToken,
  applePayPaymentTokenSchema,
} from './applePayPaymentToken';
import {
  CardPaymentTokenEntity,
  cardPaymentTokenEntitySchema,
} from './cardPaymentTokenEntity';
import {
  PaypalPaymentToken,
  paypalPaymentTokenSchema,
} from './paypalPaymentToken';
import {
  VenmoPaymentToken,
  venmoPaymentTokenSchema,
} from './venmoPaymentToken';

/** The vaulted payment method details. */
export interface PaymentTokenResponsePaymentSource {
  /** Full representation of a Card Payment Token including network token. */
  card?: CardPaymentTokenEntity;
  paypal?: PaypalPaymentToken;
  venmo?: VenmoPaymentToken;
  /** A resource representing a response for Apple Pay. */
  applePay?: ApplePayPaymentToken;
}

export const paymentTokenResponsePaymentSourceSchema: Schema<PaymentTokenResponsePaymentSource> = object(
  {
    card: ['card', optional(lazy(() => cardPaymentTokenEntitySchema))],
    paypal: ['paypal', optional(lazy(() => paypalPaymentTokenSchema))],
    venmo: ['venmo', optional(lazy(() => venmoPaymentTokenSchema))],
    applePay: ['apple_pay', optional(lazy(() => applePayPaymentTokenSchema))],
  }
);
