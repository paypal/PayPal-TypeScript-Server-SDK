
# Payment Method Preference

The customer and merchant payment preferences.

## Structure

`PaymentMethodPreference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payeePreferred` | [`PayeePaymentMethodPreference \| undefined`](../../doc/models/payee-payment-method-preference.md) | Optional | The merchant-preferred payment methods.<br>**Default**: `PayeePaymentMethodPreference.UNRESTRICTED`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `standardEntryClassCode` | [`StandardEntryClassCode \| undefined`](../../doc/models/standard-entry-class-code.md) | Optional | NACHA (the regulatory body governing the ACH network) requires that API callers (merchants, partners) obtain the consumer’s explicit authorization before initiating a transaction. To stay compliant, you’ll need to make sure that you retain a compliant authorization for each transaction that you originate to the ACH Network using this API. ACH transactions are categorized (using SEC codes) by how you capture authorization from the Receiver (the person whose bank account is being debited or credited). PayPal supports the following SEC codes.<br>**Default**: `StandardEntryClassCode.WEB`<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `255` |

## Example (as JSON)

```json
{
  "payee_preferred": "UNRESTRICTED",
  "standard_entry_class_code": "WEB"
}
```

