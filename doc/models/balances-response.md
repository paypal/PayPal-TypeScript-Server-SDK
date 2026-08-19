
# Balances Response

The balances response information.

## Structure

`BalancesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balances` | [`BalanceInformation[] \| undefined`](../../doc/models/balance-information.md) | Optional | An array of balance detail objects.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `200` |
| `accountId` | `string \| undefined` | Optional | The PayPal payer ID, which is a masked version of the PayPal account number intended for use with third parties. The account number is reversibly encrypted and a proprietary variant of Base32 is used to encode the result.<br><br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `13`, *Pattern*: `^[2-9A-HJ-NP-Z]{13}$` |
| `asOfTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `lastRefreshTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |

## Example

```ts
import { BalancesResponse } from '@paypal/paypal-server-sdk';

const balancesResponse: BalancesResponse = {
  balances: [
    {
      currency: 'currency0',
      totalBalance: {
        currencyCode: 'currency_code6',
        value: 'value2',
      },
      primary: false,
      availableBalance: {
        currencyCode: 'currency_code8',
        value: 'value4',
      },
      withheldBalance: {
        currencyCode: 'currency_code2',
        value: 'value8',
      },
    },
    {
      currency: 'currency0',
      totalBalance: {
        currencyCode: 'currency_code6',
        value: 'value2',
      },
      primary: false,
      availableBalance: {
        currencyCode: 'currency_code8',
        value: 'value4',
      },
      withheldBalance: {
        currencyCode: 'currency_code2',
        value: 'value8',
      },
    }
  ],
  accountId: 'account_id8',
  asOfTime: 'as_of_time6',
  lastRefreshTime: 'last_refresh_time8',
};
```

