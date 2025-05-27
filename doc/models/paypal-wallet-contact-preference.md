
# Paypal Wallet Contact Preference

The preference to display the contact information (buyer’s shipping email & phone number) on PayPal's checkout for easy merchant-buyer communication.

## Enumeration

`PaypalWalletContactPreference`

## Fields

| Name | Description |
|  --- | --- |
| `NoContactInfo` | The merchant can opt out of showing buyer's contact information on PayPal checkout. |
| `UpdateContactInfo` | The merchant allows buyer to add or update shipping contact information on the PayPal checkout. Please ensure to use this updated information returned in shipping.email_address and shipping.phone_number to contact your buyers. |
| `RetainContactInfo` | The buyer can only see but can not override merchant passed contact information (shipping.email_address and shipping.phone_number) on PayPal checkout. NOTE: If you don't pass the contact information, the behavior is the same as NO_CONTACT_INFO preference. |

