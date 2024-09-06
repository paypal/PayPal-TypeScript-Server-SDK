/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { LineItem, lineItemSchema } from './lineItem';
import { Money, moneySchema } from './money';

/** The level 3 card processing data collections, If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 3 data for your business. */
export interface Level3CardProcessingData {
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  shippingAmount?: Money;
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  dutyAmount?: Money;
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  discountAmount?: Money;
  /** The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). */
  shippingAddress?: Address;
  /** Use this field to specify the postal code of the shipping location. */
  shipsFromPostalCode?: string;
  /** A list of the items that were purchased with this payment. If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf. */
  lineItems?: LineItem[];
}

export const level3CardProcessingDataSchema: Schema<Level3CardProcessingData> = object(
  {
    shippingAmount: ['shipping_amount', optional(lazy(() => moneySchema))],
    dutyAmount: ['duty_amount', optional(lazy(() => moneySchema))],
    discountAmount: ['discount_amount', optional(lazy(() => moneySchema))],
    shippingAddress: ['shipping_address', optional(lazy(() => addressSchema))],
    shipsFromPostalCode: ['ships_from_postal_code', optional(string())],
    lineItems: ['line_items', optional(array(lazy(() => lineItemSchema)))],
  }
);
