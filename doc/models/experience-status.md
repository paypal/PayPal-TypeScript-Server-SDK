
# Experience Status

This field indicates the status of PayPal's Checkout experience throughout the order lifecycle. The values reflect the current stage of the checkout process.

## Enumeration

`ExperienceStatus`

## Fields

| Name | Description |
|  --- | --- |
| `NotStarted` | PayPal checkout process has not yet begun. |
| `InProgress` | PayPal checkout initiated. User is on the checkout page for order review before approval. |
| `Canceled` | PayPal checkout is canceled (by closing the checkout window or clicking cancel) before the order approval. |
| `Approved` | Order is approved. User has completed the checkout process. |

