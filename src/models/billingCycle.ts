/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';
import { TenureType, tenureTypeSchema } from './tenureType';

/** The billing cycle providing details of the billing frequency, amount, duration and if the billing cycle is a free, discounted or regular billing cycle. The sequence of the billing cycle will be in the following order - free trial billing cycle(s), discounted trial billing cycle(s), regular billing cycle(s). */
export interface BillingCycle {
  /** The tenure type of the billing cycle identifies if the billing cycle is a trial(free or discounted) or regular billing cycle. */
  tenureType: TenureType;
  /** The pricing scheme details. */
  pricingScheme?: PricingScheme;
  /** The frequency details for this billing cycle. */
  frequency?: unknown;
  /** The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between 1 and 999 for total_cycles). Regular billing cycles can be executed infinite times (value of 0 for total_cycles) or a finite number of times (value between 1 and 999 for total_cycles). */
  totalCycles?: number;
  /** The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle. */
  sequence?: number;
  /** The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years. */
  startDate?: string;
}

export const billingCycleSchema: Schema<BillingCycle> = object({
  tenureType: ['tenure_type', tenureTypeSchema],
  pricingScheme: ['pricing_scheme', optional(lazy(() => pricingSchemeSchema))],
  frequency: ['frequency', optional(unknown())],
  totalCycles: ['total_cycles', optional(number())],
  sequence: ['sequence', optional(number())],
  startDate: ['start_date', optional(string())],
});
