
# Card Stored Credential

Provides additional details to process a payment using a `card` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/><ul><li>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`.</li><li>Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.</li></ul>

## Structure

`CardStoredCredential`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInitiator` | [`PaymentInitiator`](../../doc/models/payment-initiator.md) | Required | The person or party who initiated or triggered the payment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `paymentType` | [`StoredPaymentSourcePaymentType`](../../doc/models/stored-payment-source-payment-type.md) | Required | Indicates the type of the stored payment_source payment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `usage` | [`StoredPaymentSourceUsageType \| undefined`](../../doc/models/stored-payment-source-usage-type.md) | Optional | Indicates if this is a `first` or `subsequent` payment using a stored payment source (also referred to as stored credential or card on file).<br>**Default**: `StoredPaymentSourceUsageType.DERIVED`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `previousNetworkTransactionReference` | [`NetworkTransactionReference \| undefined`](../../doc/models/network-transaction-reference.md) | Optional | Reference values used by the card network to identify a transaction. |

## Example (as JSON)

```json
{
  "payment_initiator": "CUSTOMER",
  "payment_type": "ONE_TIME",
  "usage": "DERIVED",
  "previous_network_transaction_reference": {
    "id": "id6",
    "date": "date2",
    "network": "VISA",
    "acquirer_reference_number": "acquirer_reference_number8"
  }
}
```

