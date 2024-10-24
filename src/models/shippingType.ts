/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShippingType
 */
export enum ShippingType {
  Shipping = 'SHIPPING',
  Pickup = 'PICKUP',
  PickupInStore = 'PICKUP_IN_STORE',
  PickupFromPerson = 'PICKUP_FROM_PERSON',
}

/**
 * Schema for ShippingType
 */
export const shippingTypeSchema: Schema<ShippingType> = stringEnum(
  ShippingType,
  true
);
