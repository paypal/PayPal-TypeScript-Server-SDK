/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { ItemCategory, itemCategorySchema } from './itemCategory';
import { Money, moneySchema } from './money';
import {
  UniversalProductCode,
  universalProductCodeSchema,
} from './universalProductCode';

/** The details for the items to be purchased. */
export interface Item {
  /** The item name or title. */
  name: string;
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  unitAmount: Money;
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  tax?: Money;
  /** The item quantity. Must be a whole number. */
  quantity: string;
  /** The detailed item description. */
  description?: string;
  /** The stock keeping unit (SKU) for the item. */
  sku?: string;
  /** The URL to the item being purchased. Visible to buyer and used in buyer experiences. */
  url?: string;
  /** The item category type. */
  category?: ItemCategory;
  /** The URL of the item's image. File type and size restrictions apply. An image that violates these restrictions will not be honored. */
  imageUrl?: string;
  /** The Universal Product Code of the item. */
  upc?: UniversalProductCode;
}

export const itemSchema: Schema<Item> = object({
  name: ['name', string()],
  unitAmount: ['unit_amount', lazy(() => moneySchema)],
  tax: ['tax', optional(lazy(() => moneySchema))],
  quantity: ['quantity', string()],
  description: ['description', optional(string())],
  sku: ['sku', optional(string())],
  url: ['url', optional(string())],
  category: ['category', optional(itemCategorySchema)],
  imageUrl: ['image_url', optional(string())],
  upc: ['upc', optional(lazy(() => universalProductCodeSchema))],
});
