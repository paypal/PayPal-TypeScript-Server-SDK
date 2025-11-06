
# Create Subscription Request

The create subscription request details.

## Structure

`CreateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string` | Required | The ID of the plan.<br><br>**Constraints**: *Minimum Length*: `26`, *Maximum Length*: `26`, *Pattern*: `^P-[A-Z0-9]*$` |
| `startTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `quantity` | `string \| undefined` | Optional | The quantity of the product in the subscription.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32`, *Pattern*: `^([0-9]+\|([0-9]+)?[.][0-9]+)$` |
| `shippingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `subscriber` | [`SubscriberRequest \| undefined`](../../doc/models/subscriber-request.md) | Optional | The subscriber request information . |
| `autoRenewal` | `boolean \| undefined` | Optional | DEPRECATED. Indicates whether the subscription auto-renews after the billing cycles complete.<br><br>**Default**: `false` |
| `applicationContext` | [`SubscriptionApplicationContext \| undefined`](../../doc/models/subscription-application-context.md) | Optional | DEPRECATED. The application context, which customizes the payer experience during the subscription approval process with PayPal. |
| `customId` | `string \| undefined` | Optional | The custom id for the subscription. Can be invoice id.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^[\x20-\x7E]+` |
| `plan` | [`PlanOverride \| undefined`](../../doc/models/plan-override.md) | Optional | An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object. |

## Example (as JSON)

```json
{
  "plan_id": "plan_id8",
  "auto_renewal": false,
  "start_time": "start_time0",
  "quantity": "quantity2",
  "shipping_amount": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "subscriber": {
    "name": {
      "given_name": "given_name2",
      "surname": "surname8"
    },
    "phone": {
      "phone_type": "OTHER",
      "phone_number": {
        "national_number": "national_number6"
      }
    },
    "shipping_address": {
      "name": {
        "full_name": "full_name6"
      },
      "email_address": "email_address8",
      "phone_number": {
        "country_code": "country_code2",
        "national_number": "national_number6"
      },
      "type": "PICKUP_IN_STORE",
      "options": [
        {
          "id": "id2",
          "label": "label2",
          "type": "SHIPPING",
          "amount": {
            "currency_code": "currency_code6",
            "value": "value0"
          },
          "selected": false
        }
      ]
    },
    "payment_source": {
      "card": {
        "name": "name6",
        "number": "number6",
        "expiry": "expiry4",
        "security_code": "security_code8",
        "type": "UNKNOWN"
      }
    }
  }
}
```

