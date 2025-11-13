
# Subscriber Request

The subscriber request information .

## Structure

`SubscriberRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`Name \| undefined`](../../doc/models/name.md) | Optional | The name of the party. |
| `phone` | [`PhoneWithType \| undefined`](../../doc/models/phone-with-type.md) | Optional | The phone information. |
| `shippingAddress` | [`ShippingDetails \| undefined`](../../doc/models/shipping-details.md) | Optional | The shipping details. |
| `paymentSource` | [`SubscriptionPaymentSource \| undefined`](../../doc/models/subscription-payment-source.md) | Optional | The payment source definition. To be eligible to create subscription using debit or credit card, you will need to sign up here (https://www.paypal.com/bizsignup/entry/product/ppcp). Please note, its available only for non-3DS cards and for merchants in US and AU regions. |

## Example (as JSON)

```json
{
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
```

