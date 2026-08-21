
# Incentive Details

The incentive details.

## Structure

`IncentiveDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `incentiveType` | `string \| undefined` | Optional | The type of incentive, such as a special offer or coupon.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |
| `incentiveCode` | `string \| undefined` | Optional | The code that identifies an incentive, such as a coupon.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `200`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |
| `incentiveAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `incentiveProgramCode` | `string \| undefined` | Optional | The incentive program code that identifies a merchant loyalty or incentive program.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |

## Example

```ts
import { IncentiveDetails } from '@paypal/paypal-server-sdk';

const incentiveDetails: IncentiveDetails = {
  incentiveType: 'incentive_type0',
  incentiveCode: 'incentive_code6',
  incentiveAmount: {
    currencyCode: 'currency_code4',
    value: 'value0',
  },
  incentiveProgramCode: 'incentive_program_code0',
};
```

