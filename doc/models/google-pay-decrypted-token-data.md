
# Google Pay Decrypted Token Data

Details shared by Google for the merchant to be shared with PayPal. This is required to process the transaction using the Google Pay payment method.

## Structure

`GooglePayDecryptedTokenData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageId` | `string \| undefined` | Optional | A unique ID that identifies the message in case it needs to be revoked or located at a later time.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `250`, *Pattern*: `^.*$` |
| `messageExpiration` | `string \| undefined` | Optional | Date and time at which the message expires as UTC milliseconds since epoch. Integrators should reject any message that's expired.<br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `13`, *Pattern*: `\d{13}` |
| `paymentMethod` | [`GooglePayPaymentMethod`](../../doc/models/google-pay-payment-method.md) | Required | The type of the payment credential. Currently, only CARD is supported.<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `authenticationMethod` | [`GooglePayAuthenticationMethod`](../../doc/models/google-pay-authentication-method.md) | Required | Authentication Method which is used for the card transaction.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `cryptogram` | `string \| undefined` | Optional | Base-64 cryptographic identifier used by card schemes to validate the token verification result. This is a conditionally required field if authentication_method is CRYPTOGRAM_3DS.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2000` |
| `eciIndicator` | `string \| undefined` | Optional | Electronic Commerce Indicator may not always be present. It is only returned for tokens on the Visa card network. This value is passed through in the payment authorization request.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `256`, *Pattern*: `^.*$` |

## Example (as JSON)

```json
{
  "message_id": "message_id4",
  "message_expiration": "message_expiration8",
  "payment_method": "CARD",
  "authentication_method": "PAN_ONLY",
  "cryptogram": "cryptogram0",
  "eci_indicator": "eci_indicator4"
}
```

