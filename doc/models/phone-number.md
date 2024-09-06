
# Phone Number

The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).

## Structure

`PhoneNumber`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nationalNumber` | `string` | Required | The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `14`, *Pattern*: `^[0-9]{1,14}?$` |

## Example (as JSON)

```json
{
  "national_number": "national_number8"
}
```

