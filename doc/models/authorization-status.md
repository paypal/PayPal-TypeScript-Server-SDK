
# Authorization Status

The status for the authorized payment.

## Enumeration

`AuthorizationStatus`

## Fields

| Name | Description |
|  --- | --- |
| `Created` | The authorized payment is created. No captured payments have been made for this authorized payment. |
| `Captured` | The authorized payment has one or more captures against it. The sum of these captured payments is greater than the amount of the original authorized payment. |
| `Denied` | PayPal cannot authorize funds for this authorized payment. |
| `PartiallyCaptured` | A captured payment was made for the authorized payment for an amount that is less than the amount of the original authorized payment. |
| `Voided` | The authorized payment was voided. No more captured payments can be made against this authorized payment. |
| `Pending` | The created authorization is in pending state. For more information, see status.details. |

