/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  CallbackConfiguration,
  callbackConfigurationSchema,
} from './callbackConfiguration';
import {
  ShippingPreference,
  shippingPreferenceSchema,
} from './shippingPreference';

/** Customizes the buyer experience during the approval process for payment with Venmo. Note: Partners and Marketplaces might configure shipping_preference during partner account setup, which overrides the request values. */
export interface VenmoWalletExperienceContext {
  /** The business name of the merchant. The pattern is defined by an external party and supports Unicode. */
  brandName?: string;
  /** The location from which the shipping address is derived. */
  shippingPreference?: ShippingPreference;
  /** CallBack Configuration that the merchant can provide to PayPal/Venmo. */
  orderUpdateCallbackConfig?: CallbackConfiguration;
}

export const venmoWalletExperienceContextSchema: Schema<VenmoWalletExperienceContext> = object(
  {
    brandName: ['brand_name', optional(string())],
    shippingPreference: [
      'shipping_preference',
      optional(shippingPreferenceSchema),
    ],
    orderUpdateCallbackConfig: [
      'order_update_callback_config',
      optional(lazy(() => callbackConfigurationSchema)),
    ],
  }
);
