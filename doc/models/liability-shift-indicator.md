
# Liability Shift Indicator

Liability shift indicator. The outcome of the issuer's authentication.

## Enumeration

`LiabilityShiftIndicator`

## Fields

| Name | Description |
|  --- | --- |
| `No` | Liability is with the merchant. |
| `Possible` | Liability may shift to the card issuer. |
| `Unknown` | The authentication system is not available. |

## Example

```ts
import { LiabilityShiftIndicator } from '@paypal/paypal-server-sdk';

const liabilityShiftIndicator = LiabilityShiftIndicator.Possible;
```

