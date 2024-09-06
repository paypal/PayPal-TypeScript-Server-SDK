
# Processor Response

The processor response information for payment requests, such as direct credit card transactions.

## Structure

`ProcessorResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `avsCode` | [`AVSCode \| undefined`](../../doc/models/avs-code.md) | Optional | The address verification code for Visa, Discover, Mastercard, or American Express transactions. |
| `cvvCode` | [`CVVCode \| undefined`](../../doc/models/cvv-code.md) | Optional | The card verification value code for for Visa, Discover, Mastercard, or American Express. |
| `responseCode` | [`ProcessorResponseCode \| undefined`](../../doc/models/processor-response-code.md) | Optional | Processor response code for the non-PayPal payment processor errors. |
| `paymentAdviceCode` | [`PaymentAdviceCode \| undefined`](../../doc/models/payment-advice-code.md) | Optional | The declined payment transactions might have payment advice codes. The card networks, like Visa and Mastercard, return payment advice codes. |

## Example (as JSON)

```json
{
  "avs_code": "M",
  "cvv_code": "U",
  "response_code": "PPII",
  "payment_advice_code": "01"
}
```

