
# Shipping Information

The shipping information.

## Structure

`ShippingInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The recipient's name.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |
| `method` | `string \| undefined` | Optional | The shipping method that is associated with this order.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500`, *Pattern*: `^[a-zA-Z0-9_'\-., ":;\!?]*$` |
| `address` | [`SimplePostalAddressCoarseGrained \| undefined`](../../doc/models/simple-postal-address-coarse-grained.md) | Optional | A simple postal address with coarse-grained fields. Do not use for an international address. Use for backward compatibility only. Does not contain phone. |
| `secondaryShippingAddress` | [`SimplePostalAddressCoarseGrained \| undefined`](../../doc/models/simple-postal-address-coarse-grained.md) | Optional | A simple postal address with coarse-grained fields. Do not use for an international address. Use for backward compatibility only. Does not contain phone. |

## Example

```ts
import { ShippingInformation } from '@paypal/paypal-server-sdk';

const shippingInformation: ShippingInformation = {
  name: 'name2',
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
};
```

