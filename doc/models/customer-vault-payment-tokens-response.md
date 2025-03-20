
# Customer Vault Payment Tokens Response

Collection of payment tokens saved for a given customer.

## Structure

`CustomerVaultPaymentTokensResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalItems` | `number \| undefined` | Optional | Total number of items.<br>**Constraints**: `>= 1`, `<= 50` |
| `totalPages` | `number \| undefined` | Optional | Total number of pages.<br>**Constraints**: `>= 1`, `<= 10` |
| `customer` | [`VaultResponseCustomer \| undefined`](../../doc/models/vault-response-customer.md) | Optional | This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details. |
| `paymentTokens` | [`PaymentTokenResponse[] \| undefined`](../../doc/models/payment-token-response.md) | Optional | **Constraints**: *Minimum Items*: `0`, *Maximum Items*: `64` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of related [HATEOAS links](/api/rest/responses/#hateoas).<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `32` |

## Example (as JSON)

```json
{
  "total_items": 132,
  "total_pages": 168,
  "customer": {
    "id": "id0",
    "merchant_customer_id": "merchant_customer_id2",
    "links": [
      {
        "key1": "val1",
        "key2": "val2"
      },
      {
        "key1": "val1",
        "key2": "val2"
      }
    ]
  },
  "payment_tokens": [
    {
      "id": "id4",
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
        },
        "apple_pay": {
          "card": {
            "name": "name6",
            "last_digits": "last_digits0",
            "type": "UNKNOWN",
            "brand": "RUPAY",
            "billing_address": {
              "address_line_1": "address_line_12",
              "address_line_2": "address_line_28",
              "admin_area_2": "admin_area_28",
              "admin_area_1": "admin_area_14",
              "postal_code": "postal_code0",
              "country_code": "country_code8"
            }
          }
        }
      },
      "links": [
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        },
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        }
      ]
    },
    {
      "id": "id4",
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
        },
        "apple_pay": {
          "card": {
            "name": "name6",
            "last_digits": "last_digits0",
            "type": "UNKNOWN",
            "brand": "RUPAY",
            "billing_address": {
              "address_line_1": "address_line_12",
              "address_line_2": "address_line_28",
              "admin_area_2": "admin_area_28",
              "admin_area_1": "admin_area_14",
              "postal_code": "postal_code0",
              "country_code": "country_code8"
            }
          }
        }
      },
      "links": [
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        },
        {
          "href": "href6",
          "rel": "rel0",
          "method": "HEAD"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "href6",
      "rel": "rel0",
      "method": "HEAD"
    },
    {
      "href": "href6",
      "rel": "rel0",
      "method": "HEAD"
    }
  ]
}
```

