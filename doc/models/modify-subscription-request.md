
# Modify Subscription Request

The request to update the quantity of the product or service in a subscription. You can also use this method to switch the plan and update the `shipping_amount` and `shipping_address` values for the subscription. This type of update requires the buyer's consent.

## Structure

`ModifySubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string \| undefined` | Optional | The unique PayPal-generated ID for the plan.<br><br>**Constraints**: *Minimum Length*: `26`, *Maximum Length*: `26`, *Pattern*: `^P-[A-Z0-9]*$` |
| `quantity` | `string \| undefined` | Optional | The quantity of the product or service in the subscription.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32`, *Pattern*: `^([0-9]+\|([0-9]+)?[.][0-9]+)$` |
| `shippingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `shippingAddress` | [`ShippingDetails \| undefined`](../../doc/models/shipping-details.md) | Optional | The shipping details. |
| `applicationContext` | [`SubscriptionPatchApplicationContext \| undefined`](../../doc/models/subscription-patch-application-context.md) | Optional | The application context, which customizes the payer experience during the subscription approval process with PayPal. |
| `plan` | [`PlanOverride \| undefined`](../../doc/models/plan-override.md) | Optional | An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object. |

## Example

```ts
import {
  ExperienceContextShippingPreference,
  FulfillmentType,
  ModifySubscriptionRequest,
  PayeePaymentMethodPreference,
  ShippingType,
} from '@paypal/paypal-server-sdk';

const modifySubscriptionRequest: ModifySubscriptionRequest = {
  planId: 'plan_id0',
  quantity: 'quantity4',
  shippingAmount: {
    currencyCode: 'currency_code0',
    value: 'value6',
  },
  shippingAddress: {
    name: {
      fullName: 'full_name6',
    },
    emailAddress: 'email_address8',
    phoneNumber: {
      countryCode: 'country_code2',
      nationalNumber: 'national_number6',
    },
    type: FulfillmentType.PickupInStore,
    options: [
      {
        id: 'id2',
        label: 'label2',
        selected: false,
        type: ShippingType.Shipping,
        amount: {
          currencyCode: 'currency_code6',
          value: 'value0',
        },
      }
    ],
  },
  applicationContext: {
    returnUrl: 'return_url0',
    cancelUrl: 'cancel_url2',
    brandName: 'brand_name8',
    locale: 'locale2',
    shippingPreference: ExperienceContextShippingPreference.SetProvidedAddress,
    paymentMethod: {
      payeePreferred: PayeePaymentMethodPreference.Unrestricted,
    },
  },
};
```

