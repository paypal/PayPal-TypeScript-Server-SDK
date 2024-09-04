
# Phone

The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).

## Structure

`Phone`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `countryCode` | `string` | Required | The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3`, *Pattern*: `^[0-9]{1,3}?$` |
| `nationalNumber` | `string` | Required | The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `14`, *Pattern*: `^[0-9]{1,14}?$` |
| `extensionNumber` | `string \| undefined` | Optional | The extension number.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `15`, *Pattern*: `^[0-9]{1,15}?$` |

## Example (as JSON)

```json
{
  "country_code": "country_code8",
  "national_number": "national_number2",
  "extension_number": "extension_number2"
}
```

