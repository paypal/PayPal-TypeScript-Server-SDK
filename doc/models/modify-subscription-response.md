
# Modify Subscription Response

The response to a request to update the quantity of the product or service in a subscription. You can also use this method to switch the plan and update the `shipping_amount` and `shipping_address` values for the subscription. This type of update requires the buyer's consent.

## Structure

`ModifySubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string \| undefined` | Optional | The unique PayPal-generated ID for the plan.<br><br>**Constraints**: *Minimum Length*: `26`, *Maximum Length*: `26`, *Pattern*: `^P-[A-Z0-9]*$` |
| `quantity` | `string \| undefined` | Optional | The quantity of the product or service in the subscription.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32`, *Pattern*: `^([0-9]+\|([0-9]+)?[.][0-9]+)$` |
| `shippingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The currency and amount for a financial transaction, such as a balance or payment due. |
| `shippingAddress` | [`ShippingDetails \| undefined`](../../doc/models/shipping-details.md) | Optional | The shipping details. |
| `plan` | [`PlanOverride \| undefined`](../../doc/models/plan-override.md) | Optional | An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object. |
| `planOverridden` | `boolean \| undefined` | Optional, Read-only | Indicates whether the subscription has overridden any plan attributes. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). |

## Example

```ts
import {
  FulfillmentType,
  ModifySubscriptionResponse,
  SetupFeeFailureAction,
  ShippingType,
  SubscriptionPricingModel,
} from '@paypal/paypal-server-sdk';

const modifySubscriptionResponse: ModifySubscriptionResponse = {
  planId: 'plan_id4',
  quantity: 'quantity8',
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
  plan: {
    billingCycles: [
      {
        sequence: 8,
        pricingScheme: {
          fixedPrice: {
            currencyCode: 'currency_code4',
            value: 'value0',
          },
          pricingModel: SubscriptionPricingModel.Volume,
          tiers: [
            {
              startingQuantity: 'starting_quantity8',
              amount: {
                currencyCode: 'currency_code6',
                value: 'value0',
              },
              endingQuantity: 'ending_quantity6',
            },
            {
              startingQuantity: 'starting_quantity8',
              amount: {
                currencyCode: 'currency_code6',
                value: 'value0',
              },
              endingQuantity: 'ending_quantity6',
            },
            {
              startingQuantity: 'starting_quantity8',
              amount: {
                currencyCode: 'currency_code6',
                value: 'value0',
              },
              endingQuantity: 'ending_quantity6',
            }
          ],
          createTime: 'create_time4',
        },
        totalCycles: 198,
      },
      {
        sequence: 8,
        pricingScheme: {
          fixedPrice: {
            currencyCode: 'currency_code4',
            value: 'value0',
          },
          pricingModel: SubscriptionPricingModel.Volume,
          tiers: [
            {
              startingQuantity: 'starting_quantity8',
              amount: {
                currencyCode: 'currency_code6',
                value: 'value0',
              },
              endingQuantity: 'ending_quantity6',
            },
            {
              startingQuantity: 'starting_quantity8',
              amount: {
                currencyCode: 'currency_code6',
                value: 'value0',
              },
              endingQuantity: 'ending_quantity6',
            },
            {
              startingQuantity: 'starting_quantity8',
              amount: {
                currencyCode: 'currency_code6',
                value: 'value0',
              },
              endingQuantity: 'ending_quantity6',
            }
          ],
          createTime: 'create_time4',
        },
        totalCycles: 198,
      }
    ],
    paymentPreferences: {
      autoBillOutstanding: false,
      setupFee: {
        currencyCode: 'currency_code8',
        value: 'value4',
      },
      setupFeeFailureAction: SetupFeeFailureAction.Continue,
      paymentFailureThreshold: 104,
    },
    taxes: {
      percentage: 'percentage8',
      inclusive: false,
    },
  },
};
```

