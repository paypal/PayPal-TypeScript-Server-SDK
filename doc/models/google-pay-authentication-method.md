
# Google Pay Authentication Method

Authentication Method which is used for the card transaction.

## Enumeration

`GooglePayAuthenticationMethod`

## Fields

| Name | Description |
|  --- | --- |
| `PanOnly` | This authentication method is associated with payment cards stored on file with the user's Google Account. Returned payment data includes primary account number (PAN) with the expiration month and the expiration year. |
| `Cryptogram3Ds` | Returned payment data includes a 3-D Secure (3DS) cryptogram generated on the device. -> If authentication_method=CRYPTOGRAM, it is required that 'cryptogram' parameter in the request has a valid 3-D Secure (3DS) cryptogram generated on the device. |

