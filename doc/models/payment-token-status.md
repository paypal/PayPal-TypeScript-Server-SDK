
# Payment Token Status

The status of the payment token.

## Enumeration

`PaymentTokenStatus`

## Fields

| Name | Description |
|  --- | --- |
| `Created` | A setup token is initialized with minimal information, more data must be added to the setup-token to be vaulted |
| `PayerActionRequired` | A contingecy on payer approval is required before the payment method can be saved. |
| `Approved` | Setup token is ready to be vaulted. If a buyer approval contigency was returned, it is has been approved. |
| `Vaulted` | The payment token has been vaulted. |
| `Tokenized` | A vaulted payment method token has been tokenized for short term (one time) use. |

