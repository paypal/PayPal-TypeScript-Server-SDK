
# Card Response Address

Address request details.

## Structure

`CardResponseAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressLine1` | `string \| undefined` | Optional | The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.<br>**Constraints**: *Maximum Length*: `300` |
| `addressLine2` | `string \| undefined` | Optional | The second line of the address, for example, a suite or apartment number.<br>**Constraints**: *Maximum Length*: `300` |
| `adminArea2` | `string \| undefined` | Optional | A city, town, or village. Smaller than `admin_area_level_1`.<br>**Constraints**: *Maximum Length*: `120` |
| `adminArea1` | `string \| undefined` | Optional | The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is: UK. A county. US. A state. Canada. A province. Japan. A prefecture. Switzerland. A *kanton*.<br>**Constraints**: *Maximum Length*: `300` |
| `postalCode` | `string \| undefined` | Optional | The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).<br>**Constraints**: *Maximum Length*: `60` |
| `countryCode` | `string` | Required | The [2-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region. Note: The country code for Great Britain is GB and not UK as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2`, *Pattern*: `^([A-Z]{2}\|C2)$` |
| `id` | `string \| undefined` | Optional | The resource ID of the address.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[0-9A-Za-z-_]+$` |

## Example (as JSON)

```json
{
  "address_line_1": "address_line_12",
  "address_line_2": "address_line_22",
  "admin_area_2": "admin_area_26",
  "admin_area_1": "admin_area_18",
  "postal_code": "postal_code4",
  "country_code": "country_code2"
}
```

