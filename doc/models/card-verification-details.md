
# Card Verification Details

Card Verification details including the authorization details and 3D SECURE details.

## Structure

`CardVerificationDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkTransactionId` | `string \| undefined` | Optional | DEPRECATED. This field is DEPRECATED. Please find the network transaction id data in the 'id' field under the 'network_transaction_reference' object instead of the 'verification' object.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1024`, *Pattern*: `^[a-zA-Z0-9-_@.:&+=*^'~#!$%()]+$` |
| `date` | `string \| undefined` | Optional | DEPRECATED. This field is DEPRECATED. Please find the date data in the 'date' field under the 'network_transaction_reference' object instead of the 'verification' object.<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4`, *Pattern*: `^[0-9]+$` |
| `network` | [`CardBrand \| undefined`](../../doc/models/card-brand.md) | Optional | The card network or brand. Applies to credit, debit, gift, and payment cards.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `time` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `processorResponse` | [`CardVerificationProcessorResponse \| undefined`](../../doc/models/card-verification-processor-response.md) | Optional | The processor response information for payment requests, such as direct credit card transactions. |
| `threeDSecure` | `unknown \| undefined` | Optional | DEPRECATED. This field is DEPRECATED. Please find the 3D secure authentication data in the 'three_d_secure' object under the 'authentication_result' object instead of the 'verification' object. |

## Example (as JSON)

```json
{
  "network_transaction_id": "network_transaction_id4",
  "date": "date8",
  "network": "EFTPOS",
  "time": "time2",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  }
}
```

