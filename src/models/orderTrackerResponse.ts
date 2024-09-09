/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { LinkDescription, linkDescriptionSchema } from './linkDescription';
import { OrderTrackerItem, orderTrackerItemSchema } from './orderTrackerItem';
import {
  OrderTrackerStatus,
  orderTrackerStatusSchema,
} from './orderTrackerStatus';

/** The tracking response on creation of tracker. */
export interface OrderTrackerResponse {
  /** The tracker id. */
  id?: string;
  /** The status of the item shipment. */
  status?: OrderTrackerStatus;
  /** An array of details of items in the shipment. */
  items?: OrderTrackerItem[];
  /** An array of request-related HATEOAS links. */
  links?: LinkDescription[];
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  createTime?: string;
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  updateTime?: string;
}

export const orderTrackerResponseSchema: Schema<OrderTrackerResponse> = object({
  id: ['id', optional(string())],
  status: ['status', optional(orderTrackerStatusSchema)],
  items: ['items', optional(array(lazy(() => orderTrackerItemSchema)))],
  links: ['links', optional(array(lazy(() => linkDescriptionSchema)))],
  createTime: ['create_time', optional(string())],
  updateTime: ['update_time', optional(string())],
});
