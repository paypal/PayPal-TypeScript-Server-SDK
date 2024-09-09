/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { CaptureStatus, captureStatusSchema } from './captureStatus';
import {
  CaptureStatusDetails,
  captureStatusDetailsSchema,
} from './captureStatusDetails';

/** The status and status details of a captured payment. */
export interface CaptureStatusWithDetails {
  /** The status of the captured payment. */
  status?: CaptureStatus;
  /** The details of the captured payment status. */
  statusDetails?: CaptureStatusDetails;
}

export const captureStatusWithDetailsSchema: Schema<CaptureStatusWithDetails> = object(
  {
    status: ['status', optional(captureStatusSchema)],
    statusDetails: [
      'status_details',
      optional(lazy(() => captureStatusDetailsSchema)),
    ],
  }
);
