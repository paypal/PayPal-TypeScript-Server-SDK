
# Phone with Type

The phone information.

## Structure

`PhoneWithType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneType` | [`PhoneType \| undefined`](../../doc/models/phone-type.md) | Optional | The phone type. |
| `phoneNumber` | [`PhoneNumber`](../../doc/models/phone-number.md) | Required | The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). |

## Example

```ts
import { PhoneType, PhoneWithType } from '@paypal/paypal-server-sdk';

const phoneWithType: PhoneWithType = {
  phoneNumber: {
    nationalNumber: 'national_number6',
  },
  phoneType: PhoneType.Fax,
};
```

