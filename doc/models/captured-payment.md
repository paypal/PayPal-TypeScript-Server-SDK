
# Captured Payment

A captured payment.

## Structure

`CapturedPayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`CaptureStatus \| undefined`](../../doc/models/capture-status.md) | Optional | The status of the captured payment. |
| `statusDetails` | [`CaptureStatusDetails \| undefined`](../../doc/models/capture-status-details.md) | Optional | The details of the captured payment status. |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the captured payment. |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. |
| `customId` | `string \| undefined` | Optional | The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.<br>**Constraints**: *Maximum Length*: `127` |
| `networkTransactionReference` | [`NetworkTransactionReference \| undefined`](../../doc/models/network-transaction-reference.md) | Optional | Reference values used by the card network to identify a transaction. |
| `sellerProtection` | [`SellerProtection \| undefined`](../../doc/models/seller-protection.md) | Optional | The level of protection offered as defined by [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection). |
| `finalCapture` | `boolean \| undefined` | Optional | Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.<br>**Default**: `false` |
| `sellerReceivableBreakdown` | [`SellerReceivableBreakdown \| undefined`](../../doc/models/seller-receivable-breakdown.md) | Optional | The detailed breakdown of the capture activity. This is not available for transactions that are in pending state. |
| `disbursementMode` | [`DisbursementMode \| undefined`](../../doc/models/disbursement-mode.md) | Optional | The funds that are held on behalf of the merchant.<br>**Default**: `DisbursementMode.INSTANT`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16`, *Pattern*: `^[A-Z_]+$` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). |
| `processorResponse` | [`ProcessorResponse \| undefined`](../../doc/models/processor-response.md) | Optional | The processor response information for payment requests, such as direct credit card transactions. |
| `createTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `updateTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `supplementaryData` | [`PaymentSupplementaryData \| undefined`](../../doc/models/payment-supplementary-data.md) | Optional | The supplementary data. |
| `payee` | [`Payee \| undefined`](../../doc/models/payee.md) | Optional | The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee. |

## Example (as JSON)

```json
{
  "final_capture": false,
  "disbursement_mode": "INSTANT",
  "status": "PARTIALLY_REFUNDED",
  "status_details": {
    "reason": "VERIFICATION_REQUIRED"
  },
  "id": "id4",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  },
  "invoice_id": "invoice_id4"
}
```

