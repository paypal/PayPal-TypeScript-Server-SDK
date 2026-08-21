
# App Switch Context

Merchant provided details of the native app or mobile web browser to facilitate buyer's app switch to the PayPal consumer app.

## Structure

`AppSwitchContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nativeApp` | [`NativeAppContext \| undefined`](../../doc/models/native-app-context.md) | Optional | Merchant provided, buyer's native app preferences to app switch to the PayPal consumer app. |
| `mobileWeb` | [`MobileWebContext \| undefined`](../../doc/models/mobile-web-context.md) | Optional | Buyer's mobile web browser context to app switch to the PayPal consumer app. |

## Example

```ts
import { AppSwitchContext } from '@paypal/paypal-server-sdk';

const appSwitchContext: AppSwitchContext = {
  nativeApp: {
  },
  mobileWeb: {
    buyerUserAgent: 'buyer_user_agent8',
  },
};
```

