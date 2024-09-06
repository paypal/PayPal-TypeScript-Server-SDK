
# Order

The order details.

## Structure

`Order`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `updateTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `id` | `string \| undefined` | Optional | The ID of the order. |
| `paymentSource` | [`PaymentSourceResponse \| undefined`](../../doc/models/payment-source-response.md) | Optional | The payment source used to fund the payment. |
| `intent` | [`CheckoutPaymentIntent \| undefined`](../../doc/models/checkout-payment-intent.md) | Optional | The intent to either capture payment immediately or authorize a payment for an order after order creation. |
| `processingInstruction` | [`ProcessingInstruction \| undefined`](../../doc/models/processing-instruction.md) | Optional | The instruction to process an order.<br>**Default**: `ProcessingInstruction.NOINSTRUCTION`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[0-9A-Z_]+$` |
| `payer` | [`Payer \| undefined`](../../doc/models/payer.md) | Optional | - |
| `purchaseUnits` | [`PurchaseUnit[] \| undefined`](../../doc/models/purchase-unit.md) | Optional | An array of purchase units. Each purchase unit establishes a contract between a customer and merchant. Each purchase unit represents either a full or partial order that the customer intends to purchase from the merchant.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |
| `status` | [`OrderStatus \| undefined`](../../doc/models/order-status.md) | Optional | The order status.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of request-related HATEOAS links. To complete payer approval, use the `approve` link to redirect the payer. The API caller has 3 hours (default setting, this which can be changed by your account manager to 24/48/72 hours to accommodate your use case) from the time the order is created, to redirect your payer. Once redirected, the API caller has 3 hours for the payer to approve the order and either authorize or capture the order. If you are not using the PayPal JavaScript SDK to initiate PayPal Checkout (in context) ensure that you include `application_context.return_url` is specified or you will get "We're sorry, Things don't appear to be working at the moment" after the payer approves the payment. |

## Example (as JSON)

```json
{
  "processing_instruction": "NO_INSTRUCTION",
  "create_time": "create_time8",
  "update_time": "update_time4",
  "id": "id2",
  "payment_source": {
    "card": {
      "name": "name6",
      "last_digits": "last_digits0",
      "brand": "SYNCHRONY",
      "available_networks": [
        "DELTA"
      ],
      "type": "UNKNOWN"
    },
    "paypal": {
      "email_address": "email_address0",
      "account_id": "account_id4",
      "account_status": "VERIFIED",
      "name": {
        "given_name": "given_name2",
        "surname": "surname8"
      },
      "phone_type": "FAX"
    },
    "bancontact": {
      "name": "name0",
      "country_code": "country_code0",
      "bic": "bic2",
      "iban_last_chars": "iban_last_chars8",
      "card_last_digits": "card_last_digits4"
    },
    "blik": {
      "name": "name2",
      "country_code": "country_code2",
      "email": "email4",
      "one_click": {
        "consumer_reference": "consumer_reference2"
      }
    },
    "eps": {
      "name": "name6",
      "country_code": "country_code6",
      "bic": "bic8"
    }
  },
  "intent": "CAPTURE"
}
```

