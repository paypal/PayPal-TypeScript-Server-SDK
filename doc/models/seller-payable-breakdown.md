
# Seller Payable Breakdown

The breakdown of the refund.

## Structure

`SellerPayableBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grossAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `paypalFee` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `paypalFeeInReceivableCurrency` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `netAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `netAmountInReceivableCurrency` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `platformFees` | [`PlatformFee[] \| undefined`](../../doc/models/platform-fee.md) | Optional | An array of platform or partner fees, commissions, or brokerage fees for the refund.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `1` |
| `netAmountBreakdown` | [`NetAmountBreakdownItem[] \| undefined`](../../doc/models/net-amount-breakdown-item.md) | Optional, Read-only | An array of breakdown values for the net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the payee holds their funds. |
| `totalRefundedAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example

```ts
import { SellerPayableBreakdown } from '@paypal/paypal-server-sdk';

const sellerPayableBreakdown: SellerPayableBreakdown = {
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
  netAmountInReceivableCurrency: {
    currencyCode: 'currency_code8',
    value: 'value4',
  },
};
```

