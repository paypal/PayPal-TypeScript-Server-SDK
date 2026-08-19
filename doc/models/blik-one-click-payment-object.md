
# Blik One Click Payment Object

Information used to pay using BLIK one-click flow.

## Structure

`BlikOneClickPaymentObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerReference` | `string \| undefined` | Optional | The merchant generated, unique reference serving as a primary identifier for accounts connected between Blik and a merchant.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `64`, *Pattern*: `^[ -~]{3,64}$` |

## Example

```ts
import { BlikOneClickPaymentObject } from '@paypal/paypal-server-sdk';

const blikOneClickPaymentObject: BlikOneClickPaymentObject = {
  consumerReference: 'consumer_reference6',
};
```

