
# Setup Token Response

Minimal representation of a cached setup token.

## Structure

`SetupTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the vault token.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `customer` | [`Customer \| undefined`](../../doc/models/customer.md) | Optional | This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details. |
| `status` | [`PaymentTokenStatus \| undefined`](../../doc/models/payment-token-status.md) | Optional | The status of the payment token.<br>**Default**: `PaymentTokenStatus.Created`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `paymentSource` | [`SetupTokenResponsePaymentSource \| undefined`](../../doc/models/setup-token-response-payment-source.md) | Optional | The setup payment method details. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of related [HATEOAS links](/api/rest/responses/#hateoas).<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `32` |

## Example (as JSON)

```json
{
  "status": "CREATED",
  "id": "id6",
  "customer": {
    "id": "id0",
    "merchant_customer_id": "merchant_customer_id2"
  },
  "payment_source": {
    "card": {
      "name": "name6",
      "last_digits": "last_digits0",
      "brand": "RUPAY",
      "expiry": "expiry4",
      "billing_address": {
        "address_line_1": "address_line_12",
        "address_line_2": "address_line_28",
        "admin_area_2": "admin_area_28",
        "admin_area_1": "admin_area_14",
        "postal_code": "postal_code0",
        "country_code": "country_code8"
      }
    },
    "paypal": {
      "description": "description2",
      "usage_pattern": "THRESHOLD_PREPAID",
      "shipping": {
        "name": {
          "full_name": "full_name6"
        },
        "phone_number": {
          "country_code": "country_code2",
          "national_number": "national_number6"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "address_line_16",
          "address_line_2": "address_line_26",
          "admin_area_2": "admin_area_20",
          "admin_area_1": "admin_area_12",
          "postal_code": "postal_code8",
          "country_code": "country_code6"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT"
    },
    "venmo": {
      "description": "description6",
      "usage_pattern": "UNSCHEDULED_PREPAID",
      "shipping": {
        "name": {
          "full_name": "full_name6"
        },
        "phone_number": {
          "country_code": "country_code2",
          "national_number": "national_number6"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "address_line_16",
          "address_line_2": "address_line_26",
          "admin_area_2": "admin_area_20",
          "admin_area_1": "admin_area_12",
          "postal_code": "postal_code8",
          "country_code": "country_code6"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT"
    }
  },
  "links": [
    {
      "href": "href6",
      "rel": "rel0",
      "method": "HEAD"
    }
  ]
}
```

