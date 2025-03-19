
# Purchase Unit Request

The purchase unit request. Includes required information for the payment contract.

## Structure

`PurchaseUnitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string \| undefined` | Optional | The API caller-provided external ID for the purchase unit. Required for multiple purchase units when you must update the order through `PATCH`. If you omit this value and the order contains only one purchase unit, PayPal sets this value to `default`.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `256` |
| `amount` | [`AmountWithBreakdown`](../../doc/models/amount-with-breakdown.md) | Required | The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any. If you specify `amount.breakdown`, the amount equals `item_total` plus `tax_total` plus `shipping` plus `handling` plus `insurance` minus `shipping_discount` minus discount. The amount must be a positive number. For listed of supported currencies and decimal precision, see the PayPal REST APIs Currency Codes. |
| `payee` | [`PayeeBase \| undefined`](../../doc/models/payee-base.md) | Optional | The merchant who receives the funds and fulfills the order. The merchant is also known as the payee. |
| `paymentInstruction` | [`PaymentInstruction \| undefined`](../../doc/models/payment-instruction.md) | Optional | Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order. |
| `description` | `string \| undefined` | Optional | The purchase description. The maximum length of the character is dependent on the type of characters used. The character length is specified assuming a US ASCII character. Depending on type of character; (e.g. accented character, Japanese characters) the number of characters that that can be specified as input might not equal the permissible max length.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `customId` | `string \| undefined` | Optional | The API caller-provided external ID. Used to reconcile client transactions with PayPal transactions. Appears in transaction and settlement reports but is not visible to the payer.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `softDescriptor` | `string \| undefined` | Optional | The soft descriptor is the dynamic text used to construct the statement descriptor that appears on a payer's card statement. If an Order is paid using the "PayPal Wallet", the statement descriptor will appear in following format on the payer's card statement: PAYPAL_prefix+(space)+merchant_descriptor+(space)+ soft_descriptor Note: The merchant descriptor is the descriptor of the merchant’s payment receiving preferences which can be seen by logging into the merchant account https://www.sandbox.paypal.com/businessprofile/settings/info/edit The PAYPAL prefix uses 8 characters. Only the first 22 characters will be displayed in the statement. For example, if: The PayPal prefix toggle is PAYPAL *. The merchant descriptor in the profile is Janes Gift. The soft descriptor is 800-123-1234. Then, the statement descriptor on the card is PAYPAL * Janes Gift 80.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22` |
| `items` | [`Item[] \| undefined`](../../doc/models/item.md) | Optional | An array of items that the customer purchases from the merchant. |
| `shipping` | [`ShippingDetails \| undefined`](../../doc/models/shipping-details.md) | Optional | The shipping details. |
| `supplementaryData` | [`SupplementaryData \| undefined`](../../doc/models/supplementary-data.md) | Optional | Supplementary data about a payment. This object passes information that can be used to improve risk assessments and processing costs, for example, by providing Level 2 and Level 3 payment data. |

## Example (as JSON)

```json
{
  "reference_id": "reference_id6",
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
```

