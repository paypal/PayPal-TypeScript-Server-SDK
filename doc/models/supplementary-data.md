
# Supplementary Data

Supplementary data about a payment. This object passes information that can be used to improve risk assessments and processing costs, for example, by providing Level 2 and Level 3 payment data.

## Structure

`SupplementaryData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardSupplementaryData \| undefined`](../../doc/models/card-supplementary-data.md) | Optional | Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see checkout or multiparty checkout. |
| `risk` | [`RiskSupplementaryData \| undefined`](../../doc/models/risk-supplementary-data.md) | Optional | Additional information necessary to evaluate the risk profile of a transaction. |

## Example

```ts
import { SupplementaryData } from '@paypal/paypal-server-sdk';

const supplementaryData: SupplementaryData = {
  card: {
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
  },
  risk: {
    customer: {
      ipAddress: 'ip_address0',
    },
  },
};
```

