/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProcessingInstruction
 */
export enum ProcessingInstruction {
  ORDERCOMPLETEONPAYMENTAPPROVAL = 'ORDER_COMPLETE_ON_PAYMENT_APPROVAL',
  NOINSTRUCTION = 'NO_INSTRUCTION',
}

/**
 * Schema for ProcessingInstruction
 */
export const processingInstructionSchema: Schema<ProcessingInstruction> = stringEnum(
  ProcessingInstruction,
  true
);
