/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  RelatedIdentifiers,
  relatedIdentifiersSchema,
} from './relatedIdentifiers';

/** The supplementary data. */
export interface PaymentSupplementaryData {
  /** Identifiers related to a specific resource. */
  relatedIds?: RelatedIdentifiers;
}

export const paymentSupplementaryDataSchema: Schema<PaymentSupplementaryData> = object(
  {
    relatedIds: ['related_ids', optional(lazy(() => relatedIdentifiersSchema))],
  }
);
