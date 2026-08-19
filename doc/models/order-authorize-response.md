
# Order Authorize Response

The order authorize response.

## Structure

`OrderAuthorizeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `updateTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `id` | `string \| undefined` | Optional, Read-only | The ID of the order. |
| `paymentSource` | [`OrderAuthorizeResponsePaymentSource \| undefined`](../../doc/models/order-authorize-response-payment-source.md) | Optional | The payment source used to fund the payment. |
| `intent` | [`CheckoutPaymentIntent \| undefined`](../../doc/models/checkout-payment-intent.md) | Optional | The intent to either capture payment immediately or authorize a payment for an order after order creation. |
| `processingInstruction` | [`ProcessingInstruction \| undefined`](../../doc/models/processing-instruction.md) | Optional | The instruction to process an order. |
| `payer` | [`Payer \| undefined`](../../doc/models/payer.md) | Optional | The customer who approves and pays for the order. The customer is also known as the payer. |
| `purchaseUnits` | [`PurchaseUnit[] \| undefined`](../../doc/models/purchase-unit.md) | Optional | An array of purchase units. Each purchase unit establishes a contract between a customer and merchant. Each purchase unit represents either a full or partial order that the customer intends to purchase from the merchant.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |
| `status` | [`OrderStatus \| undefined`](../../doc/models/order-status.md) | Optional | The order status.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of request-related HATEOAS links. To complete payer approval, use the `approve` link to redirect the payer. The API caller has 6 hours (default setting, this which can be changed by your account manager to 24/48/72 hours to accommodate your use case) from the time the order is created, to redirect your payer. Once redirected, the API caller has 6 hours for the payer to approve the order and either authorize or capture the order. If you are not using the PayPal JavaScript SDK to initiate PayPal Checkout (in context) ensure that you include `application_context.return_url` is specified or you will get "We're sorry, Things don't appear to be working at the moment" after the payer approves the payment. |

## Example

```ts
import {
  CardBrand,
  CardType,
  CheckoutPaymentIntent,
  OrderAuthorizeResponse,
  PhoneType,
} from '@paypal/paypal-server-sdk';

const orderAuthorizeResponse: OrderAuthorizeResponse = {
  createTime: 'create_time8',
  updateTime: 'update_time4',
  paymentSource: {
    card: {
      name: 'name6',
      brand: CardBrand.CbNationale,
      type: CardType.Unknown,
    },
    paypal: {
      emailAddress: 'email_address0',
      accountId: 'account_id4',
      name: {
        givenName: 'given_name2',
        surname: 'surname8',
      },
      phoneType: PhoneType.Fax,
    },
    applePay: {
      id: 'id0',
      token: 'token6',
      name: 'name0',
      emailAddress: 'email_address8',
      phoneNumber: {
        nationalNumber: 'national_number6',
      },
    },
    googlePay: {
      name: 'name8',
      emailAddress: 'email_address6',
      phoneNumber: {
        countryCode: 'country_code2',
        nationalNumber: 'national_number6',
      },
      card: {
        name: 'name6',
        type: CardType.Unknown,
        brand: CardBrand.CbNationale,
        billingAddress: {
          countryCode: 'country_code8',
          addressLine1: 'address_line_12',
          addressLine2: 'address_line_28',
          adminArea2: 'admin_area_28',
          adminArea1: 'admin_area_14',
          postalCode: 'postal_code0',
        },
      },
    },
    venmo: {
      emailAddress: 'email_address4',
      accountId: 'account_id8',
      userName: 'user_name2',
      name: {
        givenName: 'given_name2',
        surname: 'surname8',
      },
      phoneNumber: {
        nationalNumber: 'national_number6',
      },
    },
  },
  intent: CheckoutPaymentIntent.Capture,
};
```

