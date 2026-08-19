
# Setup Token Request

Setup Token Request where the `source` defines the type of instrument to be stored.

## Structure

`SetupTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`Customer \| undefined`](../../doc/models/customer.md) | Optional | This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details. |
| `paymentSource` | [`SetupTokenRequestPaymentSource`](../../doc/models/setup-token-request-payment-source.md) | Required | The payment method to vault with the instrument details. |

## Example

```ts
import {
  CardBrand,
  CardType,
  FulfillmentType,
  PaypalPaymentTokenUsageType,
  SetupTokenRequest,
  UsagePattern,
  VaultTokenRequestType,
} from '@paypal/paypal-server-sdk';

const setupTokenRequest: SetupTokenRequest = {
  paymentSource: {
    card: {
      name: 'name6',
      number: 'number6',
      expiry: 'expiry4',
      securityCode: 'security_code8',
      brand: CardBrand.CbNationale,
    },
    paypal: {
      description: 'description2',
      usagePattern: UsagePattern.ThresholdPrepaid,
      shipping: {
        name: {
          fullName: 'full_name6',
        },
        emailAddress: 'email_address2',
        phoneNumber: {
          countryCode: 'country_code2',
          nationalNumber: 'national_number6',
        },
        type: FulfillmentType.Shipping,
        address: {
          countryCode: 'country_code6',
          addressLine1: 'address_line_16',
          addressLine2: 'address_line_26',
          adminArea2: 'admin_area_20',
          adminArea1: 'admin_area_12',
          postalCode: 'postal_code8',
        },
      },
      permitMultiplePaymentTokens: false,
      usageType: PaypalPaymentTokenUsageType.Merchant,
    },
    venmo: {
      description: 'description6',
      usagePattern: UsagePattern.UnscheduledPrepaid,
      shipping: {
        name: {
          fullName: 'full_name6',
        },
        emailAddress: 'email_address2',
        phoneNumber: {
          countryCode: 'country_code2',
          nationalNumber: 'national_number6',
        },
        type: FulfillmentType.Shipping,
        address: {
          countryCode: 'country_code6',
          addressLine1: 'address_line_16',
          addressLine2: 'address_line_26',
          adminArea2: 'admin_area_20',
          adminArea1: 'admin_area_12',
          postalCode: 'postal_code8',
        },
      },
      permitMultiplePaymentTokens: false,
      usageType: PaypalPaymentTokenUsageType.Merchant,
    },
    applePay: {
      token: 'token6',
      card: {
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
    token: {
      id: 'id6',
      type: VaultTokenRequestType.SetupToken,
    },
  },
  customer: {
    id: 'id0',
    merchantCustomerId: 'merchant_customer_id2',
  },
};
```

