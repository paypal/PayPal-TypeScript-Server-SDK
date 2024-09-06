
# Refund

The refund information.

## Structure

`Refund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`RefundStatus \| undefined`](../../doc/models/refund-status.md) | Optional | The status of the refund. |
| `statusDetails` | [`RefundStatusDetails \| undefined`](../../doc/models/refund-status-details.md) | Optional | The details of the refund status. |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the refund. |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. |
| `customId` | `string \| undefined` | Optional | The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^[A-Za-z0-9-_.,]*$` |
| `acquirerReferenceNumber` | `string \| undefined` | Optional | Reference ID issued for the card transaction. This ID can be used to track the transaction across processors, card brands and issuing banks.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `noteToPayer` | `string \| undefined` | Optional | The reason for the refund. Appears in both the payer's transaction history and the emails that the payer receives. |
| `sellerPayableBreakdown` | [`SellerPayableBreakdown \| undefined`](../../doc/models/seller-payable-breakdown.md) | Optional | The breakdown of the refund. |
| `payer` | [`PayeeBase \| undefined`](../../doc/models/payee-base.md) | Optional | The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). |
| `createTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `updateTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |

## Example (as JSON)

```json
{
  "status": "CANCELLED",
  "status_details": {
    "reason": "ECHECK"
  },
  "id": "id6",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  },
  "invoice_id": "invoice_id6"
}
```

