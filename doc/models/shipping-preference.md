
# Shipping Preference

The location from which the shipping address is derived.

## Enumeration

`ShippingPreference`

## Fields

| Name | Description |
|  --- | --- |
| `GetFromFile` | Get the customer-provided shipping address on the PayPal site. |
| `NoShipping` | Redacts the shipping address from the PayPal site. Recommended for digital goods. |
| `SetProvidedAddress` | Get the merchant-provided address. The customer cannot change this address on the PayPal site. If merchant does not pass an address, customer can choose the address on PayPal pages. |

