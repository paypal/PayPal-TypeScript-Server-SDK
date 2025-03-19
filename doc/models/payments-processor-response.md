
# Payments Processor Response

The processor response information for payment requests, such as direct credit card transactions.

## Structure

`PaymentsProcessorResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `avsCode` | [`AvsCode \| undefined`](../../doc/models/avs-code.md) | Optional | The address verification code for Visa, Discover, Mastercard, or American Express transactions. |
| `cvvCode` | [`CvvCode \| undefined`](../../doc/models/cvv-code.md) | Optional | The card verification value code for for Visa, Discover, Mastercard, or American Express. |
| `responseCode` | [`ProcessorResponseCode \| undefined`](../../doc/models/processor-response-code.md) | Optional | Processor response code for the non-PayPal payment processor errors. |
| `paymentAdviceCode` | [`PaymentsPaymentAdviceCode \| undefined`](../../doc/models/payments-payment-advice-code.md) | Optional | The declined payment transactions might have payment advice codes. The card networks, like Visa and Mastercard, return payment advice codes. |

## Example (as JSON)

```json
{
  "avs_code": "A",
  "cvv_code": "E",
  "response_code": "5150",
  "payment_advice_code": "01"
}
```

