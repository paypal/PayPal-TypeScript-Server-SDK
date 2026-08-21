
# Transaction Details

The transaction details.

## Structure

`TransactionDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionInfo` | [`TransactionInformation \| undefined`](../../doc/models/transaction-information.md) | Optional | The transaction information. |
| `payerInfo` | [`PayerInformation \| undefined`](../../doc/models/payer-information.md) | Optional | The payer information. |
| `shippingInfo` | [`ShippingInformation \| undefined`](../../doc/models/shipping-information.md) | Optional | The shipping information. |
| `cartInfo` | [`CartInformation \| undefined`](../../doc/models/cart-information.md) | Optional | The cart information. |
| `storeInfo` | [`StoreInformation \| undefined`](../../doc/models/store-information.md) | Optional | The store information. |
| `auctionInfo` | [`AuctionInformation \| undefined`](../../doc/models/auction-information.md) | Optional | The auction information. |
| `incentiveInfo` | [`IncentiveInformation \| undefined`](../../doc/models/incentive-information.md) | Optional | The incentive details. |

## Example

```ts
import {
  PaypalReferenceIdType,
  TransactionDetails,
} from '@paypal/paypal-server-sdk';

const transactionDetails: TransactionDetails = {
  transactionInfo: {
    paypalAccountId: 'paypal_account_id4',
    paypalReferenceId: 'paypal_reference_id2',
    paypalReferenceIdType: PaypalReferenceIdType.Odr,
    transactionEventCode: 'transaction_event_code6',
  },
  payerInfo: {
    accountId: 'account_id2',
    emailAddress: 'email_address2',
    phoneNumber: {
      countryCode: 'country_code2',
      nationalNumber: 'national_number6',
      extensionNumber: 'extension_number8',
    },
    addressStatus: 'address_status2',
    payerStatus: 'payer_status2',
  },
  shippingInfo: {
    name: 'name0',
    method: 'method4',
    address: {
      line1: 'line18',
      city: 'city6',
      countryCode: 'country_code6',
      line2: 'line20',
      state: 'state2',
      postalCode: 'postal_code8',
    },
    secondaryShippingAddress: {
      line1: 'line16',
      city: 'city4',
      countryCode: 'country_code4',
      line2: 'line28',
      state: 'state0',
      postalCode: 'postal_code6',
    },
  },
  cartInfo: {
    itemDetails: [
      {
        itemCode: 'item_code0',
        itemName: 'item_name8',
        itemDescription: 'item_description4',
        itemOptions: 'item_options2',
        itemQuantity: 'item_quantity2',
      },
      {
        itemCode: 'item_code0',
        itemName: 'item_name8',
        itemDescription: 'item_description4',
        itemOptions: 'item_options2',
        itemQuantity: 'item_quantity2',
      }
    ],
    taxInclusive: false,
    paypalInvoiceId: 'paypal_invoice_id6',
  },
  storeInfo: {
    storeId: 'store_id2',
    terminalId: 'terminal_id6',
  },
};
```

