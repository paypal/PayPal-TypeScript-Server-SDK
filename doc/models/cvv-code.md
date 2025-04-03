
# Cvv Code

The card verification value code for for Visa, Discover, Mastercard, or American Express.

## Enumeration

`CvvCode`

## Fields

| Name | Description |
|  --- | --- |
| `CvvE` | For Visa, Mastercard, Discover, or American Express, error - unrecognized or unknown response. |
| `CvvI` | For Visa, Mastercard, Discover, or American Express, invalid or null. |
| `CvvM` | For Visa, Mastercard, Discover, or American Express, the CVV2/CSC matches. |
| `CvvN` | For Visa, Mastercard, Discover, or American Express, the CVV2/CSC does not match. |
| `CvvP` | For Visa, Mastercard, Discover, or American Express, it was not processed. |
| `CvvS` | For Visa, Mastercard, Discover, or American Express, the service is not supported. |
| `CvvU` | For Visa, Mastercard, Discover, or American Express, unknown - the issuer is not certified. |
| `CvvX` | For Visa, Mastercard, Discover, or American Express, no response. For Maestro, the service is not available. |
| `EnumAllOthers` | For Visa, Mastercard, Discover, or American Express, error. |
| `Cvv0` | For Maestro, the CVV2 matched. |
| `Cvv1` | For Maestro, the CVV2 did not match. |
| `Cvv2` | For Maestro, the merchant has not implemented CVV2 code handling. |
| `Cvv3` | For Maestro, the merchant has indicated that CVV2 is not present on card. |
| `Cvv4` | For Maestro, the service is not available. |

