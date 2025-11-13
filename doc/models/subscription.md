
# Subscription

The subscription details.

## Structure

`Subscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the subscription.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `50` |
| `planId` | `string \| undefined` | Optional | The ID of the plan.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `50` |
| `startTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `quantity` | `string \| undefined` | Optional | The quantity of the product in the subscription.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32`, *Pattern*: `^([0-9]+\|([0-9]+)?[.][0-9]+)$` |
| `shippingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `subscriber` | [`Subscriber \| undefined`](../../doc/models/subscriber.md) | Optional | The subscriber response information. |
| `billingInfo` | [`SubscriptionBillingInformation \| undefined`](../../doc/models/subscription-billing-information.md) | Optional | The billing details for the subscription. If the subscription was or is active, these fields are populated. |
| `createTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `updateTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `customId` | `string \| undefined` | Optional | The custom id for the subscription. Can be invoice id.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^[\x20-\x7E]+` |
| `planOverridden` | `boolean \| undefined` | Optional | Indicates whether the subscription has overridden any plan attributes. |
| `plan` | [`PlanDetails \| undefined`](../../doc/models/plan-details.md) | Optional | The plan details. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). |

## Example (as JSON)

```json
{
  "id": "id4",
  "plan_id": "plan_id6",
  "start_time": "start_time8",
  "quantity": "quantity0",
  "shipping_amount": {
    "currency_code": "currency_code0",
    "value": "value6"
  }
}
```

