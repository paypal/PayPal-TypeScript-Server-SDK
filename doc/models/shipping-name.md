
# Shipping Name

The name of the party.

## Structure

`ShippingName`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullName` | `string \| undefined` | Optional | When the party is a person, the party's full name.<br><br>**Constraints**: *Maximum Length*: `300` |

## Example

```ts
import { ShippingName } from '@paypal/paypal-server-sdk';

const shippingName: ShippingName = {
  fullName: 'full_name8',
};
```

