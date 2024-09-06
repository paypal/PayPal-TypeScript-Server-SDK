
# Google Pay Card Attributes

Additional attributes associated with the use of this card.

## Structure

`GooglePayCardAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `verification` | [`CardVerification \| undefined`](../../doc/models/card-verification.md) | Optional | The API caller can opt in to verify the card through PayPal offered verification services (e.g. Smart Dollar Auth, 3DS). |

## Example (as JSON)

```json
{
  "verification": {
    "method": "3D_SECURE"
  }
}
```

