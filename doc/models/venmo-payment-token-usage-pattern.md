
# Venmo Payment Token Usage Pattern

Expected business/pricing model for the billing agreement.

## Enumeration

`VenmoPaymentTokenUsagePattern`

## Fields

| Name | Description |
|  --- | --- |
| `Immediate` | On-demand instant payments – non-recurring, pre-paid, variable amount, variable frequency. |
| `Deferred` | Pay after use, non-recurring post-paid, variable amount, irregular frequency. |
| `RecurringPrepaid` | Pay upfront fixed or variable amount on a fixed date before the goods/service is delivered. |
| `RecurringPostpaid` | Pay on a fixed date based on usage or consumption after the goods/service is delivered. |
| `ThresholdPrepaid` | Charge payer when the set amount is reached or monthly billing cycle, whichever comes first, before the goods/service is delivered. |
| `ThresholdPostpaid` | Charge payer when the set amount is reached or monthly billing cycle, whichever comes first, after the goods/service is delivered. |

