
# Seller Receivable Breakdown

The detailed breakdown of the capture activity. This is not available for transactions that are in pending state.

## Structure

`SellerReceivableBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grossAmount` | [`Money`](../../doc/models/money.md) | Required | The currency and amount for a financial transaction, such as a balance or payment due. |
| `paypalFee` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `paypalFeeInReceivableCurrency` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `netAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `receivableAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `exchangeRate` | [`ExchangeRate \| undefined`](../../doc/models/exchange-rate.md) | Optional, Read-only | The exchange rate that determines the amount to convert from one currency to another currency. |
| `platformFees` | [`PlatformFee[] \| undefined`](../../doc/models/platform-fee.md) | Optional | An array of platform or partner fees, commissions, or brokerage fees that associated with the captured payment.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `1` |

## Example

```ts
import { SellerReceivableBreakdown } from '@paypal/paypal-server-sdk';

const sellerReceivableBreakdown: SellerReceivableBreakdown = {
  grossAmount: {
    currencyCode: 'currency_code4',
    value: 'value0',
  },
  paypalFee: {
    currencyCode: 'currency_code4',
    value: 'value2',
  },
  paypalFeeInReceivableCurrency: {
    currencyCode: 'currency_code2',
    value: 'value8',
  },
  netAmount: {
    currencyCode: 'currency_code6',
    value: 'value2',
  },
  receivableAmount: {
    currencyCode: 'currency_code2',
    value: 'value8',
  },
};
```

