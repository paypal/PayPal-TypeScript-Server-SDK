
# Venmo Wallet Additional Attributes

Additional attributes associated with the use of this Venmo Wallet.

## Structure

`VenmoWalletAdditionalAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`VenmoWalletCustomerInformation \| undefined`](../../doc/models/venmo-wallet-customer-information.md) | Optional | The details about a customer in PayPal's system of record. |
| `vault` | [`VenmoWalletVaultAttributes \| undefined`](../../doc/models/venmo-wallet-vault-attributes.md) | Optional | Resource consolidating common request and response attirbutes for vaulting Venmo Wallet. |

## Example (as JSON)

```json
{
  "customer": {
    "id": "id0",
    "email_address": "email_address2"
  },
  "vault": {
    "store_in_vault": "ON_SUCCESS",
    "description": "description6",
    "usage_pattern": "THRESHOLD_PREPAID",
    "usage_type": "MERCHANT",
    "customer_type": "CONSUMER",
    "permit_multiple_payment_tokens": false
  }
}
```

