
# Paypal Reference Id Type

The PayPal reference ID type.

## Enumeration

`PaypalReferenceIdType`

## Fields

| Name | Description |
|  --- | --- |
| `Odr` | An order ID. |
| `Txn` | A transaction ID. |
| `Sub` | A subscription ID. |
| `Pap` | A pre-approved payment ID. |

## Example

```ts
import { PaypalReferenceIdType } from '@paypal/paypal-server-sdk';

const paypalReferenceIdType = PaypalReferenceIdType.Odr;
```

