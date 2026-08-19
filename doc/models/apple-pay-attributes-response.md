
# Apple Pay Attributes Response

Additional attributes associated with the use of Apple Pay.

## Structure

`ApplePayAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vault` | [`VaultResponse \| undefined`](../../doc/models/vault-response.md) | Optional | The details about a saved payment source. |

## Example

```ts
import {
  ApplePayAttributesResponse,
  VaultStatus,
} from '@paypal/paypal-server-sdk';

const applePayAttributesResponse: ApplePayAttributesResponse = {
  vault: {
    id: 'id6',
    status: VaultStatus.Approved,
    customer: {
      id: 'id0',
      name: {
        givenName: 'given_name2',
        surname: 'surname8',
      },
    },
  },
};
```

