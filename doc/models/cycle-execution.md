
# Cycle Execution

The regular and trial execution details for a billing cycle.

## Structure

`CycleExecution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenureType` | [`TenureType`](../../doc/models/tenure-type.md) | Required | The type of the billing cycle.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `sequence` | `number` | Required | The order in which to run this cycle among other billing cycles.<br><br>**Constraints**: `>= 0`, `<= 99` |
| `cyclesCompleted` | `number` | Required | The number of billing cycles that have completed.<br><br>**Constraints**: `>= 0`, `<= 9999` |
| `cyclesRemaining` | `number \| undefined` | Optional | For a finite billing cycle, cycles_remaining is the number of remaining cycles. For an infinite billing cycle, cycles_remaining is set as 0.<br><br>**Constraints**: `>= 0`, `<= 9999` |
| `currentPricingSchemeVersion` | `number \| undefined` | Optional | The active pricing scheme version for the billing cycle.<br><br>**Constraints**: `>= 1`, `<= 99` |
| `totalCycles` | `number \| undefined` | Optional | The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between 1 and 999 for total_cycles). Regular billing cycles can be executed infinite times (value of 0 for total_cycles) or a finite number of times (value between 1 and 999 for total_cycles).<br><br>**Constraints**: `>= 0`, `<= 999` |

## Example (as JSON)

```json
{
  "tenure_type": "REGULAR",
  "sequence": 99,
  "cycles_completed": 172,
  "cycles_remaining": 208,
  "current_pricing_scheme_version": 99,
  "total_cycles": 60
}
```

