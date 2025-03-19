
# Avs Code

The address verification code for Visa, Discover, Mastercard, or American Express transactions.

## Enumeration

`AvsCode`

## Fields

| Name | Description |
|  --- | --- |
| `AvsA` | For Visa, Mastercard, or Discover transactions, the address matches but the zip code does not match. For American Express transactions, the card holder address is correct. |
| `AvsB` | For Visa, Mastercard, or Discover transactions, the address matches. International A. |
| `AvsC` | For Visa, Mastercard, or Discover transactions, no values match. International N. |
| `AvsD` | For Visa, Mastercard, or Discover transactions, the address and postal code match. International X. |
| `AvsE` | For Visa, Mastercard, or Discover transactions, not allowed for Internet or phone transactions. For American Express card holder, the name is incorrect but the address and postal code match. |
| `AvsF` | For Visa, Mastercard, or Discover transactions, the address and postal code match. UK-specific X. For American Express card holder, the name is incorrect but the address matches. |
| `AvsG` | For Visa, Mastercard, or Discover transactions, global is unavailable. Nothing matches. |
| `AvsI` | For Visa, Mastercard, or Discover transactions, international is unavailable. Not applicable. |
| `AvsM` | For Visa, Mastercard, or Discover transactions, the address and postal code match. For American Express card holder, the name, address, and postal code match. |
| `AvsN` | For Visa, Mastercard, or Discover transactions, nothing matches. For American Express card holder, the address and postal code are both incorrect. |
| `AvsP` | For Visa, Mastercard, or Discover transactions, postal international Z. Postal code only. |
| `AvsR` | For Visa, Mastercard, or Discover transactions, re-try the request. For American Express, the system is unavailable. |
| `AvsS` | For Visa, Mastercard, Discover, or American Express, the service is not supported. |
| `AvsU` | For Visa, Mastercard, or Discover transactions, the service is unavailable. For American Express, information is not available. For Maestro, the address is not checked or the acquirer had no response. The service is not available. |
| `AvsW` | For Visa, Mastercard, or Discover transactions, whole ZIP code. For American Express, the card holder name, address, and postal code are all incorrect. |
| `AvsX` | For Visa, Mastercard, or Discover transactions, exact match of the address and the nine-digit ZIP code. For American Express, the card holder name, address, and postal code are all incorrect. |
| `AvsY` | For Visa, Mastercard, or Discover transactions, the address and five-digit ZIP code match. For American Express, the card holder address and postal code are both correct. |
| `AvsZ` | For Visa, Mastercard, or Discover transactions, the five-digit ZIP code matches but no address. For American Express, only the card holder postal code is correct. |
| `AvsNull` | For Maestro, no AVS response was obtained. |
| `Avs0` | For Maestro, all address information matches. |
| `Avs1` | For Maestro, none of the address information matches. |
| `Avs2` | For Maestro, part of the address information matches. |
| `Avs3` | For Maestro, the merchant did not provide AVS information. It was not processed. |
| `Avs4` | For Maestro, the address was not checked or the acquirer had no response. The service is not available. |

