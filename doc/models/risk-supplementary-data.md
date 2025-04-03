
# Risk Supplementary Data

Additional information necessary to evaluate the risk profile of a transaction.

## Structure

`RiskSupplementaryData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`ParticipantMetadata \| undefined`](../../doc/models/participant-metadata.md) | Optional | Profile information of the sender or receiver. |

## Example (as JSON)

```json
{
  "customer": {
    "ip_address": "ip_address0"
  }
}
```

