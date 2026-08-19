
# Pricing Scheme

The pricing scheme details.

## Structure

`PricingScheme`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `price` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `pricingModel` | [`PricingModel`](../../doc/models/pricing-model.md) | Required | The pricing model for the billing cycle.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `reloadThresholdAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |

## Example

```ts
import { PricingModel, PricingScheme } from '@paypal/paypal-server-sdk';

const pricingScheme: PricingScheme = {
  pricingModel: PricingModel.AutoReload,
  price: {
    currencyCode: 'currency_code8',
    value: 'value4',
  },
  reloadThresholdAmount: {
    currencyCode: 'currency_code0',
    value: 'value6',
  },
};
```

