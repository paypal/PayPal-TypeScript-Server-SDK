/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { ApplePayRequest, applePayRequestSchema } from './applePayRequest';
import { CardRequest, cardRequestSchema } from './cardRequest';
import { GooglePayRequest, googlePayRequestSchema } from './googlePayRequest';
import { PayPalWallet, payPalWalletSchema } from './payPalWallet';
import { Token, tokenSchema } from './token';
import {
  VenmoWalletRequest,
  venmoWalletRequestSchema,
} from './venmoWalletRequest';

/** The payment source definition. */
export interface OrderCaptureRequestPaymentSource {
  /** The payment card to use to fund a payment. Can be a credit or debit card.<blockquote><strong>Note:</strong> Passing card number, cvv and expiry directly via the API requires <a href="https://www.pcisecuritystandards.org/pci_security/completing_self_assessment"> PCI SAQ D compliance</a>. <br>*PayPal offers a mechanism by which you do not have to take on the <strong>PCI SAQ D</strong> burden by using hosted fields - refer to <a href="https://developer.paypal.com/docs/checkout/advanced/integrate/">this Integration Guide</a>*.</blockquote> */
  card?: CardRequest;
  /** The tokenized payment source to fund a payment. */
  token?: Token;
  /** A resource that identifies a PayPal Wallet is used for payment. */
  paypal?: PayPalWallet;
  /** Information needed to pay using ApplePay. */
  applePay?: ApplePayRequest;
  /** Information needed to pay using Google Pay. */
  googlePay?: GooglePayRequest;
  /** Information needed to pay using Venmo. */
  venmo?: VenmoWalletRequest;
}

export const orderCaptureRequestPaymentSourceSchema: Schema<OrderCaptureRequestPaymentSource> = object(
  {
    card: ['card', optional(lazy(() => cardRequestSchema))],
    token: ['token', optional(lazy(() => tokenSchema))],
    paypal: ['paypal', optional(lazy(() => payPalWalletSchema))],
    applePay: ['apple_pay', optional(lazy(() => applePayRequestSchema))],
    googlePay: ['google_pay', optional(lazy(() => googlePayRequestSchema))],
    venmo: ['venmo', optional(lazy(() => venmoWalletRequestSchema))],
  }
);
