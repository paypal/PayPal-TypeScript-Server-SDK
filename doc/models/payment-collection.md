
# Payment Collection

The collection of payments, or transactions, for a purchase unit in an order. For example, authorized payments, captured payments, and refunds.

## Structure

`PaymentCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizations` | [`AuthorizationWithAdditionalData[] \| undefined`](../../doc/models/authorization-with-additional-data.md) | Optional | An array of authorized payments for a purchase unit. A purchase unit can have zero or more authorized payments. |
| `captures` | [`Capture[] \| undefined`](../../doc/models/capture.md) | Optional | An array of captured payments for a purchase unit. A purchase unit can have zero or more captured payments. |
| `refunds` | [`Refund[] \| undefined`](../../doc/models/refund.md) | Optional | An array of refunds for a purchase unit. A purchase unit can have zero or more refunds. |

## Example (as JSON)

```json
{
  "authorizations": [
    {
      "status": "DENIED",
      "status_details": {
        "reason": "PENDING_REVIEW"
      },
      "id": "id2",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "invoice_id": "invoice_id2"
    },
    {
      "status": "DENIED",
      "status_details": {
        "reason": "PENDING_REVIEW"
      },
      "id": "id2",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "invoice_id": "invoice_id2"
    },
    {
      "status": "DENIED",
      "status_details": {
        "reason": "PENDING_REVIEW"
      },
      "id": "id2",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "invoice_id": "invoice_id2"
    }
  ],
  "captures": [
    {
      "status": "REFUNDED",
      "status_details": {
        "reason": "VERIFICATION_REQUIRED"
      },
      "id": "id4",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "invoice_id": "invoice_id4"
    },
    {
      "status": "REFUNDED",
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
  ],
  "refunds": [
    {
      "status": "CANCELLED",
      "status_details": {
        "reason": "ECHECK"
      },
      "id": "id8",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "invoice_id": "invoice_id8"
    },
    {
      "status": "CANCELLED",
      "status_details": {
        "reason": "ECHECK"
      },
      "id": "id8",
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      },
      "invoice_id": "invoice_id8"
    }
  ]
}
```

