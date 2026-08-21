
# Related Identifiers

Identifiers related to a specific resource.

## Structure

`RelatedIdentifiers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string \| undefined` | Optional | Order ID related to the resource.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^[A-Z0-9]+$` |
| `authorizationId` | `string \| undefined` | Optional | Authorization ID related to the resource.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^[A-Z0-9]+$` |
| `captureId` | `string \| undefined` | Optional | Capture ID related to the resource.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^[A-Z0-9]+$` |

## Example

```ts
import { RelatedIdentifiers } from '@paypal/paypal-server-sdk';

const relatedIdentifiers: RelatedIdentifiers = {
  orderId: 'order_id2',
  authorizationId: 'authorization_id4',
  captureId: 'capture_id6',
};
```

