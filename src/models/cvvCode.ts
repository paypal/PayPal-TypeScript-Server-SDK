/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CvvCode
 */
export enum CvvCode {
  E = 'E',
  I = 'I',
  M = 'M',
  N = 'N',
  P = 'P',
  S = 'S',
  U = 'U',
  X = 'X',
  EnumAllOthers = 'All others',
  Enum0 = '0',
  Enum1 = '1',
  Enum2 = '2',
  Enum3 = '3',
  Enum4 = '4',
}

/**
 * Schema for CvvCode
 */
export const cvvCodeSchema: Schema<CvvCode> = stringEnum(CvvCode, true);