
# Frequency Interval Unit

The interval unit at which the the usage limits will be reset.

## Enumeration

`FrequencyIntervalUnit`

## Fields

| Name | Description |
|  --- | --- |
| `Day` | A daily cycle. |
| `Week` | A weekly cycle. |
| `Month` | A monthly cycle. |
| `Year` | A yearly cycle. |
| `Lifetime` | The lifetime of the BA translates to 1 cycle |

## Example

```ts
import { FrequencyIntervalUnit } from '@paypal/paypal-server-sdk';

const frequencyIntervalUnit = FrequencyIntervalUnit.Year;
```

