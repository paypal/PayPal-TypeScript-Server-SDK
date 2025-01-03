/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  SetupTokenRequestCard,
  setupTokenRequestCardSchema,
} from './setupTokenRequestCard';
import {
  VaultPaypalWalletRequest,
  vaultPaypalWalletRequestSchema,
} from './vaultPaypalWalletRequest';
import {
  VaultTokenRequest,
  vaultTokenRequestSchema,
} from './vaultTokenRequest';
import {
  VaultVenmoRequest,
  vaultVenmoRequestSchema,
} from './vaultVenmoRequest';

/** The payment method to vault with the instrument details. */
export interface SetupTokenRequestPaymentSource {
  /** A Resource representing a request to vault a Card. */
  card?: SetupTokenRequestCard;
  /** A resource representing a request to vault PayPal Wallet. */
  paypal?: VaultPaypalWalletRequest;
  venmo?: VaultVenmoRequest;
  /** The Tokenized Payment Source representing a Request to Vault a Token. */
  token?: VaultTokenRequest;
}

export const setupTokenRequestPaymentSourceSchema: Schema<SetupTokenRequestPaymentSource> = object(
  {
    card: ['card', optional(lazy(() => setupTokenRequestCardSchema))],
    paypal: ['paypal', optional(lazy(() => vaultPaypalWalletRequestSchema))],
    venmo: ['venmo', optional(lazy(() => vaultVenmoRequestSchema))],
    token: ['token', optional(lazy(() => vaultTokenRequestSchema))],
  }
);
