
# Apple Pay Experience Context

Customizes the payer experience during the approval process for the payment.

## Structure

`ApplePayExperienceContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `returnUrl` | `string` | Required | Describes the URL. |
| `cancelUrl` | `string` | Required | Describes the URL. |

## Example

```ts
import { ApplePayExperienceContext } from '@paypal/paypal-server-sdk';

const applePayExperienceContext: ApplePayExperienceContext = {
  returnUrl: 'return_url4',
  cancelUrl: 'cancel_url6',
};
```

