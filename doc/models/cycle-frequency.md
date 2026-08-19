
# Cycle Frequency

The frequency of the terms reset cycle.

## Structure

`CycleFrequency`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `intervalUnit` | [`FrequencyIntervalUnit`](../../doc/models/frequency-interval-unit.md) | Required | The interval unit at which the the usage limits will be reset.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `intervalCount` | `number \| undefined` | Optional | The interval count at which the terms will be reset, this is ignored if the unit is LIFETIME.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1`, `<= 365` |

## Example

```ts
import {
  CycleFrequency,
  FrequencyIntervalUnit,
} from '@paypal/paypal-server-sdk';

const cycleFrequency: CycleFrequency = {
  intervalUnit: FrequencyIntervalUnit.Year,
  intervalCount: 1,
};
```

