
# Capture Status

The status of the captured payment.

## Enumeration

`CaptureStatus`

## Fields

| Name | Description |
|  --- | --- |
| `Completed` | The funds for this captured payment were credited to the payee's PayPal account. |
| `Declined` | The funds could not be captured. |
| `PartiallyRefunded` | An amount less than this captured payment's amount was partially refunded to the payer. |
| `Pending` | The funds for this captured payment was not yet credited to the payee's PayPal account. For more information, see status.details. |
| `Refunded` | An amount greater than or equal to this captured payment's amount was refunded to the payer. |
| `Failed` | There was an error while capturing payment. |

