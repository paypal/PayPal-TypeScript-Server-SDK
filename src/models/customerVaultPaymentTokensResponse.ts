/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import { CustomerRequest, customerRequestSchema } from './customerRequest';
import { LinkDescription, linkDescriptionSchema } from './linkDescription';
import {
  PaymentTokenResponse,
  paymentTokenResponseSchema,
} from './paymentTokenResponse';

/** Collection of payment tokens saved for a given customer. */
export interface CustomerVaultPaymentTokensResponse {
  /** Total number of items. */
  totalItems?: number;
  /** Total number of pages. */
  totalPages?: number;
  /** Customer in merchant's or partner's system of records. */
  customer?: CustomerRequest;
  paymentTokens?: PaymentTokenResponse[];
  /** An array of related [HATEOAS links](/api/rest/responses/#hateoas). */
  links?: LinkDescription[];
}

export const customerVaultPaymentTokensResponseSchema: Schema<CustomerVaultPaymentTokensResponse> = object(
  {
    totalItems: ['total_items', optional(number())],
    totalPages: ['total_pages', optional(number())],
    customer: ['customer', optional(lazy(() => customerRequestSchema))],
    paymentTokens: [
      'payment_tokens',
      optional(array(lazy(() => paymentTokenResponseSchema))),
    ],
    links: ['links', optional(array(lazy(() => linkDescriptionSchema)))],
  }
);
