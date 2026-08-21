
# Incentive Information

The incentive details.

## Structure

`IncentiveInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `incentiveDetails` | [`IncentiveDetails[] \| undefined`](../../doc/models/incentive-details.md) | Optional | An array of incentive details.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `32767` |

## Example

```ts
import { IncentiveInformation } from '@paypal/paypal-server-sdk';

const incentiveInformation: IncentiveInformation = {
  incentiveDetails: [
    {
      incentiveType: 'incentive_type4',
      incentiveCode: 'incentive_code0',
      incentiveAmount: {
        currencyCode: 'currency_code4',
        value: 'value0',
      },
      incentiveProgramCode: 'incentive_program_code4',
    }
  ],
};
```

