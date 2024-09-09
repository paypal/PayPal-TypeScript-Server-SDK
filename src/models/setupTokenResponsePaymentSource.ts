/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  PayPalPaymentToken,
  payPalPaymentTokenSchema,
} from './payPalPaymentToken';
import {
  SetupTokenResponseCard,
  setupTokenResponseCardSchema,
} from './setupTokenResponseCard';
import {
  VenmoPaymentToken,
  venmoPaymentTokenSchema,
} from './venmoPaymentToken';

/** The setup payment method details. */
export interface SetupTokenResponsePaymentSource {
  card?: SetupTokenResponseCard;
  paypal?: PayPalPaymentToken;
  venmo?: VenmoPaymentToken;
}

export const setupTokenResponsePaymentSourceSchema: Schema<SetupTokenResponsePaymentSource> = object(
  {
    card: ['card', optional(lazy(() => setupTokenResponseCardSchema))],
    paypal: ['paypal', optional(lazy(() => payPalPaymentTokenSchema))],
    venmo: ['venmo', optional(lazy(() => venmoPaymentTokenSchema))],
  }
);
