
# Merchant Preferences

The merchant preferences for a subscription.

## Structure

`MerchantPreferences`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `returnUrl` | `string \| undefined` | Optional | The URL where the customer is redirected after the customer approves the payment.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `4000` |
| `cancelUrl` | `string \| undefined` | Optional | The URL where the customer is redirected after the customer cancels the payment.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `4000` |

## Example

```ts
import { MerchantPreferences } from '@paypal/paypal-server-sdk';

const merchantPreferences: MerchantPreferences = {
  returnUrl: 'return_url8',
  cancelUrl: 'cancel_url0',
};
```

