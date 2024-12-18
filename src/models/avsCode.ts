/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AvsCode
 */
export enum AvsCode {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  I = 'I',
  M = 'M',
  N = 'N',
  P = 'P',
  R = 'R',
  S = 'S',
  U = 'U',
  W = 'W',
  X = 'X',
  Y = 'Y',
  Z = 'Z',
  Null = 'Null',
  Enum0 = '0',
  Enum1 = '1',
  Enum2 = '2',
  Enum3 = '3',
  Enum4 = '4',
}

/**
 * Schema for AvsCode
 */
export const avsCodeSchema: Schema<AvsCode> = stringEnum(AvsCode, true);
