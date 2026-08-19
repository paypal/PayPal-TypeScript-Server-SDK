
# Google Pay Experience Context

Customizes the payer experience during the approval process for the payment.

## Structure

`GooglePayExperienceContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `returnUrl` | `string` | Required | Describes the URL. |
| `cancelUrl` | `string` | Required | Describes the URL. |

## Example

```ts
import { GooglePayExperienceContext } from '@paypal/paypal-server-sdk';

const googlePayExperienceContext: GooglePayExperienceContext = {
  returnUrl: 'return_url6',
  cancelUrl: 'cancel_url8',
};
```

