
# Card Experience Context

Customizes the payer experience during the 3DS Approval for payment.

## Structure

`CardExperienceContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `returnUrl` | `string \| undefined` | Optional | Describes the URL. |
| `cancelUrl` | `string \| undefined` | Optional | Describes the URL. |

## Example

```ts
import { CardExperienceContext } from '@paypal/paypal-server-sdk';

const cardExperienceContext: CardExperienceContext = {
  returnUrl: 'return_url0',
  cancelUrl: 'cancel_url2',
};
```

