
# Card Supplementary Data

Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see checkout or multiparty checkout.

## Structure

`CardSupplementaryData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `level2` | [`Level2CardProcessingData \| undefined`](../../doc/models/level-2-card-processing-data.md) | Optional | The level 2 card processing data collections. If your merchant account has been configured for Level 2 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 2 data for your business. |
| `level3` | [`Level3CardProcessingData \| undefined`](../../doc/models/level-3-card-processing-data.md) | Optional | The level 3 card processing data collections, If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 3 data for your business. |

## Example

```ts
import { CardSupplementaryData } from '@paypal/paypal-server-sdk';

const cardSupplementaryData: CardSupplementaryData = {
  level2: {
    invoiceId: 'invoice_id4',
    taxTotal: {
      currencyCode: 'currency_code4',
      value: 'value0',
    },
  },
  level3: {
    shippingAmount: {
      currencyCode: 'currency_code0',
      value: 'value6',
    },
    dutyAmount: {
      currencyCode: 'currency_code6',
      value: 'value2',
    },
    discountAmount: {
      currencyCode: 'currency_code2',
      value: 'value8',
    },
    shippingAddress: {
      countryCode: 'country_code0',
      addressLine1: 'address_line_10',
      addressLine2: 'address_line_20',
      adminArea2: 'admin_area_24',
      adminArea1: 'admin_area_16',
      postalCode: 'postal_code2',
    },
    shipsFromPostalCode: 'ships_from_postal_code4',
  },
};
```

