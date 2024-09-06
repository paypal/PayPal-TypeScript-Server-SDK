
# Order Request

The order request details.

## Structure

`OrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `intent` | [`CheckoutPaymentIntent`](../../doc/models/checkout-payment-intent.md) | Required | The intent to either capture payment immediately or authorize a payment for an order after order creation. |
| `payer` | [`Payer \| undefined`](../../doc/models/payer.md) | Optional | - |
| `purchaseUnits` | [`PurchaseUnitRequest[]`](../../doc/models/purchase-unit-request.md) | Required | An array of purchase units. Each purchase unit establishes a contract between a payer and the payee. Each purchase unit represents either a full or partial order that the payer intends to purchase from the payee.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |
| `paymentSource` | [`PaymentSource \| undefined`](../../doc/models/payment-source.md) | Optional | The payment source definition. |
| `applicationContext` | [`OrderApplicationContext \| undefined`](../../doc/models/order-application-context.md) | Optional | Customizes the payer experience during the approval process for the payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote> |

## Example (as JSON)

```json
{
  "intent": "CAPTURE",
  "purchase_units": [
    {
      "reference_id": "reference_id4",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0",
        "breakdown": {
          "item_total": {
            "currency_code": "currency_code0",
            "value": "value6"
          },
          "shipping": {
            "currency_code": "currency_code0",
            "value": "value6"
          },
          "handling": {
            "currency_code": "currency_code2",
            "value": "value8"
          },
          "tax_total": {
            "currency_code": "currency_code4",
            "value": "value0"
          },
          "insurance": {
            "currency_code": "currency_code2",
            "value": "value8"
          }
        }
      },
      "payee": {
        "email_address": "email_address4",
        "merchant_id": "merchant_id6"
      },
      "payment_instruction": {
        "platform_fees": [
          {
            "amount": {
              "currency_code": "currency_code6",
              "value": "value0"
            },
            "payee": {
              "email_address": "email_address4",
              "merchant_id": "merchant_id6"
            }
          },
          {
            "amount": {
              "currency_code": "currency_code6",
              "value": "value0"
            },
            "payee": {
              "email_address": "email_address4",
              "merchant_id": "merchant_id6"
            }
          },
          {
            "amount": {
              "currency_code": "currency_code6",
              "value": "value0"
            },
            "payee": {
              "email_address": "email_address4",
              "merchant_id": "merchant_id6"
            }
          }
        ],
        "disbursement_mode": "INSTANT",
        "payee_pricing_tier_id": "payee_pricing_tier_id2",
        "payee_receivable_fx_rate_id": "payee_receivable_fx_rate_id0"
      },
      "description": "description6",
      "custom_id": "custom_id4"
    }
  ],
  "payer": {
    "email_address": "email_address6",
    "payer_id": "payer_id6",
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
    "birth_date": "birth_date4"
  },
  "payment_source": {
    "card": {
      "name": "name6",
      "number": "number6",
      "expiry": "expiry4",
      "security_code": "security_code8",
      "billing_address": {
        "address_line_1": "address_line_12",
        "address_line_2": "address_line_28",
        "admin_area_2": "admin_area_28",
        "admin_area_1": "admin_area_14",
        "postal_code": "postal_code0",
        "country_code": "country_code8"
      }
    },
    "token": {
      "id": "id6",
      "type": "BILLING_AGREEMENT"
    },
    "paypal": {
      "vault_id": "vault_id0",
      "email_address": "email_address0",
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
      "birth_date": "birth_date8"
    },
    "bancontact": {
      "name": "name0",
      "country_code": "country_code0",
      "experience_context": {
        "brand_name": "brand_name2",
        "locale": "locale6",
        "shipping_preference": "NO_SHIPPING",
        "return_url": "return_url4",
        "cancel_url": "cancel_url6"
      }
    },
    "blik": {
      "name": "name2",
      "country_code": "country_code2",
      "email": "email4",
      "experience_context": {
        "brand_name": "brand_name2",
        "locale": "locale6",
        "shipping_preference": "NO_SHIPPING",
        "return_url": "return_url4",
        "cancel_url": "cancel_url6"
      },
      "level_0": {
        "auth_code": "auth_code8"
      },
      "one_click": {
        "auth_code": "auth_code0",
        "consumer_reference": "consumer_reference2",
        "alias_label": "alias_label6",
        "alias_key": "alias_key4"
      }
    }
  },
  "application_context": {
    "brand_name": "brand_name8",
    "locale": "locale2",
    "landing_page": "BILLING",
    "shipping_preference": "SET_PROVIDED_ADDRESS",
    "user_action": "CONTINUE"
  }
}
```

