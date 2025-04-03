
# Order Status

The order status.

## Enumeration

`OrderStatus`

## Fields

| Name | Description |
|  --- | --- |
| `Created` | The order was created with the specified context. |
| `Saved` | The order was saved and persisted. The order status continues to be in progress until a capture is made with final_capture = true for all purchase units within the order. |
| `Approved` | The customer approved the payment through the PayPal wallet or another form of guest or unbranded payment. For example, a card, bank account, or so on. |
| `Voided` | All purchase units in the order are voided. |
| `Completed` | The intent of the Order was completed and a `payments` resource was created. A completed Order may have authorized a payment, captured an authorized payment, or in some cases, the payment may have been declined. Please verify the payment status under purchase_unitsArray.payments before proceeding with Order fulfillment. |
| `PayerActionRequired` | The order requires an action from the payer (e.g. 3DS authentication). Redirect the payer to the "rel":"payer-action" HATEOAS link returned as part of the response prior to authorizing or capturing the order. Some payment sources may not return a payer-action HATEOAS link (eg. MB WAY). For these payment sources the payer-action is managed by the scheme itself (eg. through SMS, email, in-app notification, etc). |

