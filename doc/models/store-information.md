
# Store Information

The store information.

## Structure

`StoreInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storeId` | `string \| undefined` | Optional | The ID of a store for a merchant in the system of record.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `terminalId` | `string \| undefined` | Optional | The terminal ID for the checkout stand in a merchant store.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `60`, *Pattern*: `^[a-zA-Z0-9]*$` |

## Example (as JSON)

```json
{
  "store_id": "store_id6",
  "terminal_id": "terminal_id0"
}
```

