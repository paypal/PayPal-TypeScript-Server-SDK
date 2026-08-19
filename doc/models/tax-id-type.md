
# Tax Id Type

The customer's tax ID type.

## Enumeration

`TaxIdType`

## Fields

| Name | Description |
|  --- | --- |
| `BrCpf` | The individual tax ID type, typically is 11 characters long. |
| `BrCnpj` | The business tax ID type, typically is 14 characters long. |

## Example

```ts
import { TaxIdType } from '@paypal/paypal-server-sdk';

const taxIdType = TaxIdType.BrCpf;
```

