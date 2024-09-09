/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthorizationStatus
 */
export enum AuthorizationStatus {
  CREATED = 'CREATED',
  CAPTURED = 'CAPTURED',
  DENIED = 'DENIED',
  PARTIALLYCAPTURED = 'PARTIALLY_CAPTURED',
  VOIDED = 'VOIDED',
  PENDING = 'PENDING',
}

/**
 * Schema for AuthorizationStatus
 */
export const authorizationStatusSchema: Schema<AuthorizationStatus> = stringEnum(
  AuthorizationStatus,
  true
);
