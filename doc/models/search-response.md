
# Search Response

The search response information.

## Structure

`SearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDetails` | [`TransactionDetails[] \| undefined`](../../doc/models/transaction-details.md) | Optional | An array of transaction detail objects.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `2147483647` |
| `accountNumber` | `string \| undefined` | Optional | The merchant account number.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `startDate` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `endDate` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `lastRefreshedDatetime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional. Note: The regular expression provides guidance but does not reject all invalid dates.<br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `page` | `number \| undefined` | Optional | A zero-relative index of transactions.<br><br>**Constraints**: `>= 0`, `<= 2147483647` |
| `totalItems` | `number \| undefined` | Optional | The total number of transactions as an integer beginning with the specified `page` in the full result and not just in this response.<br><br>**Constraints**: `>= 0`, `<= 2147483647` |
| `totalPages` | `number \| undefined` | Optional | The total number of pages, as an `integer`, when the `total_items` is divided into pages of the specified `page_size`.<br><br>**Constraints**: `>= 0`, `<= 2147483647` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional, Read-only | An array of request-related [HATEOAS links](https://developer.paypal.com/api/rest/responses/#hateoas-links).<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `32767` |

## Example

```ts
import {
  PaypalReferenceIdType,
  SearchResponse,
} from '@paypal/paypal-server-sdk';

const searchResponse: SearchResponse = {
  transactionDetails: [
    {
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
    },
    {
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
    }
  ],
  accountNumber: 'account_number4',
  startDate: 'start_date0',
  endDate: 'end_date6',
  lastRefreshedDatetime: 'last_refreshed_datetime8',
};
```

