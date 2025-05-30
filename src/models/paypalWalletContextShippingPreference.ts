/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalWalletContextShippingPreference
 */
export enum PaypalWalletContextShippingPreference {
  GetFromFile = 'GET_FROM_FILE',
  NoShipping = 'NO_SHIPPING',
  SetProvidedAddress = 'SET_PROVIDED_ADDRESS',
}

/**
 * Schema for PaypalWalletContextShippingPreference
 */
export const paypalWalletContextShippingPreferenceSchema: Schema<PaypalWalletContextShippingPreference> = stringEnum(
  PaypalWalletContextShippingPreference,
  true
);
