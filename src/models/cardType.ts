/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardType
 */
export enum CardType {
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Prepaid = 'PREPAID',
  Store = 'STORE',
  Unknown = 'UNKNOWN',
}

/**
 * Schema for CardType
 */
export const cardTypeSchema: Schema<CardType> = stringEnum(CardType, true);
