
# Card Verification Status

Verification status of Card.

## Enumeration

`CardVerificationStatus`

## Fields

| Name | Description |
|  --- | --- |
| `Verified` | Card has been verified |
| `Failed` | Card verification has failed |

## Example

```ts
import { CardVerificationStatus } from '@paypal/paypal-server-sdk';

const cardVerificationStatus = CardVerificationStatus.Verified;
```

