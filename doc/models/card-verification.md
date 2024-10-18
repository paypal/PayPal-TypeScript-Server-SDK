
# Card Verification

The API caller can opt in to verify the card through PayPal offered verification services (e.g. Smart Dollar Auth, 3DS).

## Structure

`CardVerification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `method` | [`CardVerificationMethod \| undefined`](../../doc/models/card-verification-method.md) | Optional | The method used for card verification.<br>**Default**: `CardVerificationMethod.ScaWhenRequired`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |

## Example (as JSON)

```json
{
  "method": "SCA_WHEN_REQUIRED"
}
```

