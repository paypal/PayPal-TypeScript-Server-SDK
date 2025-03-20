
# Processor Response Code

Processor response code for the non-PayPal payment processor errors.

## Enumeration

`ProcessorResponseCode`

## Fields

| Name | Description |
|  --- | --- |
| `Response0000` | APPROVED. |
| `Response00N7` | CVV2_FAILURE_POSSIBLE_RETRY_WITH_CVV. |
| `Response0100` | REFERRAL. |
| `Response0390` | ACCOUNT_NOT_FOUND. |
| `Response0500` | DO_NOT_HONOR. |
| `Response0580` | UNAUTHORIZED_TRANSACTION. |
| `Response0800` | BAD_RESPONSE_REVERSAL_REQUIRED. |
| `Response0880` | CRYPTOGRAPHIC_FAILURE. |
| `Response0890` | UNACCEPTABLE_PIN. |
| `Response0960` | SYSTEM_MALFUNCTION. |
| `Response0R00` | CANCELLED_PAYMENT. |
| `Response1000` | PARTIAL_AUTHORIZATION. |
| `Response10Br` | ISSUER_REJECTED. |
| `Response1300` | INVALID_DATA_FORMAT. |
| `Response1310` | INVALID_AMOUNT. |
| `Response1312` | INVALID_TRANSACTION_CARD_ISSUER_ACQUIRER. |
| `Response1317` | INVALID_CAPTURE_DATE. |
| `Response1320` | INVALID_CURRENCY_CODE. |
| `Response1330` | INVALID_ACCOUNT. |
| `Response1335` | INVALID_ACCOUNT_RECURRING. |
| `Response1340` | INVALID_TERMINAL. |
| `Response1350` | INVALID_MERCHANT. |
| `Response1352` | RESTRICTED_OR_INACTIVE_ACCOUNT. |
| `Response1360` | BAD_PROCESSING_CODE. |
| `Response1370` | INVALID_MCC. |
| `Response1380` | INVALID_EXPIRATION. |
| `Response1382` | INVALID_CARD_VERIFICATION_VALUE. |
| `Response1384` | INVALID_LIFE_CYCLE_OF_TRANSACTION. |
| `Response1390` | INVALID_ORDER. |
| `Response1393` | TRANSACTION_CANNOT_BE_COMPLETED. |
| `Response5100` | GENERIC_DECLINE. |
| `Response5110` | CVV2_FAILURE. |
| `Response5120` | INSUFFICIENT_FUNDS. |
| `Response5130` | INVALID_PIN. |
| `Response5135` | DECLINED_PIN_TRY_EXCEEDED. |
| `Response5140` | CARD_CLOSED. |
| `Response5150` | PICKUP_CARD_SPECIAL_CONDITIONS. Try using another card. Do not retry the same card. |
| `Response5160` | UNAUTHORIZED_USER. |
| `Response5170` | AVS_FAILURE. |
| `Response5180` | INVALID_OR_RESTRICTED_CARD. Try using another card. Do not retry the same card. |
| `Response5190` | SOFT_AVS. |
| `Response5200` | DUPLICATE_TRANSACTION. |
| `Response5210` | INVALID_TRANSACTION. |
| `Response5400` | EXPIRED_CARD. |
| `Response5500` | INCORRECT_PIN_REENTER. |
| `Response5650` | DECLINED_SCA_REQUIRED. |
| `Response5700` | TRANSACTION_NOT_PERMITTED. Outside of scope of accepted business. |
| `Response5710` | TX_ATTEMPTS_EXCEED_LIMIT. |
| `Response5800` | REVERSAL_REJECTED. |
| `Response5900` | INVALID_ISSUE. |
| `Response5910` | ISSUER_NOT_AVAILABLE_NOT_RETRIABLE. |
| `Response5920` | ISSUER_NOT_AVAILABLE_RETRIABLE. |
| `Response5930` | CARD_NOT_ACTIVATED. |
| `Response5950` | DECLINED_DUE_TO_UPDATED_ACCOUNT. External decline as an updated card has been issued. |
| `Response6300` | ACCOUNT_NOT_ON_FILE. |
| `Response7600` | APPROVED_NON_CAPTURE. |
| `Response7700` | ERROR_3DS. |
| `Response7710` | AUTHENTICATION_FAILED. |
| `Response7800` | BIN_ERROR. |
| `Response7900` | PIN_ERROR. |
| `Response8000` | PROCESSOR_SYSTEM_ERROR. |
| `Response8010` | HOST_KEY_ERROR. |
| `Response8020` | CONFIGURATION_ERROR. |
| `Response8030` | UNSUPPORTED_OPERATION. |
| `Response8100` | FATAL_COMMUNICATION_ERROR. |
| `Response8110` | RETRIABLE_COMMUNICATION_ERROR. |
| `Response8220` | SYSTEM_UNAVAILABLE. |
| `Response9100` | DECLINED_PLEASE_RETRY. Retry. |
| `Response9500` | SUSPECTED_FRAUD. Try using another card. Do not retry the same card. |
| `Response9510` | SECURITY_VIOLATION. |
| `Response9520` | LOST_OR_STOLEN. Try using another card. Do not retry the same card. |
| `Response9530` | HOLD_CALL_CENTER. The merchant must call the number on the back of the card. POS scenario. |
| `Response9540` | REFUSED_CARD. |
| `Response9600` | UNRECOGNIZED_RESPONSE_CODE. |
| `ResponsePcnr` | CONTINGENCIES_NOT_RESOLVED. |
| `ResponsePcvv` | CVV_FAILURE. |
| `ResponsePp06` | ACCOUNT_CLOSED. A previously open account is now closed |
| `ResponsePprn` | REATTEMPT_NOT_PERMITTED. |
| `ResponsePpad` | BILLING_ADDRESS. |
| `ResponsePpab` | ACCOUNT_BLOCKED_BY_ISSUER. |
| `ResponsePpae` | AMEX_DISABLED. |
| `ResponsePpag` | ADULT_GAMING_UNSUPPORTED. |
| `ResponsePpai` | AMOUNT_INCOMPATIBLE. |
| `ResponsePpar` | AUTH_RESULT. |
| `ResponsePpau` | MCC_CODE. |
| `ResponsePpav` | ARC_AVS. |
| `ResponsePpax` | AMOUNT_EXCEEDED. |
| `ResponsePpbg` | BAD_GAMING. |
| `ResponsePpc2` | ARC_CVV. |
| `ResponsePpce` | CE_REGISTRATION_INCOMPLETE. |
| `ResponsePpco` | COUNTRY. |
| `ResponsePpcr` | CREDIT_ERROR. |
| `ResponsePpct` | CARD_TYPE_UNSUPPORTED. |
| `ResponsePpcu` | CURRENCY_USED_INVALID. |
| `ResponsePpd3` | SECURE_ERROR_3DS. |
| `ResponsePpdc` | DCC_UNSUPPORTED. |
| `ResponsePpdi` | DINERS_REJECT. |
| `ResponsePpdv` | AUTH_MESSAGE. |
| `ResponsePpdt` | DECLINE_THRESHOLD_BREACH. |
| `ResponsePpef` | EXPIRED_FUNDING_INSTRUMENT. |
| `ResponsePpel` | EXCEEDS_FREQUENCY_LIMIT. |
| `ResponsePper` | INTERNAL_SYSTEM_ERROR. |
| `ResponsePpex` | EXPIRY_DATE. |
| `ResponsePpfe` | FUNDING_SOURCE_ALREADY_EXISTS. |
| `ResponsePpfi` | INVALID_FUNDING_INSTRUMENT. |
| `ResponsePpfr` | RESTRICTED_FUNDING_INSTRUMENT. |
| `ResponsePpfv` | FIELD_VALIDATION_FAILED. |
| `ResponsePpgr` | GAMING_REFUND_ERROR. |
| `ResponsePph1` | H1_ERROR. |
| `ResponsePpif` | IDEMPOTENCY_FAILURE. |
| `ResponsePpii` | INVALID_INPUT_FAILURE. |
| `ResponsePpim` | ID_MISMATCH. |
| `ResponsePpit` | INVALID_TRACE_ID. |
| `ResponsePplr` | LATE_REVERSAL. |
| `ResponsePpls` | LARGE_STATUS_CODE. |
| `ResponsePpmb` | MISSING_BUSINESS_RULE_OR_DATA. |
| `ResponsePpmc` | BLOCKED_Mastercard. |
| `ResponsePpmd` | DEPRECATED The PPMD value has been deprecated. |
| `ResponsePpnc` | NOT_SUPPORTED_NRC. |
| `ResponsePpnl` | EXCEEDS_NETWORK_FREQUENCY_LIMIT. |
| `ResponsePpnm` | NO_MID_FOUND. |
| `ResponsePpnt` | NETWORK_ERROR. |
| `ResponsePpph` | NO_PHONE_FOR_DCC_TRANSACTION. |
| `ResponsePppi` | INVALID_PRODUCT. |
| `ResponsePppm` | INVALID_PAYMENT_METHOD. |
| `ResponsePpqc` | QUASI_CASH_UNSUPPORTED. |
| `ResponsePpre` | UNSUPPORT_REFUND_ON_PENDING_BC. |
| `ResponsePprf` | INVALID_PARENT_TRANSACTION_STATUS. |
| `ResponsePprr` | MERCHANT_NOT_REGISTERED. |
| `ResponsePps0` | BANKAUTH_ROW_MISMATCH. |
| `ResponsePps1` | BANKAUTH_ROW_SETTLED. |
| `ResponsePps2` | BANKAUTH_ROW_VOIDED. |
| `ResponsePps3` | BANKAUTH_EXPIRED. |
| `ResponsePps4` | CURRENCY_MISMATCH. |
| `ResponsePps5` | CREDITCARD_MISMATCH. |
| `ResponsePps6` | AMOUNT_MISMATCH. |
| `ResponsePpsc` | ARC_SCORE. |
| `ResponsePpsd` | STATUS_DESCRIPTION. |
| `ResponsePpse` | AMEX_DENIED. |
| `ResponsePpte` | VERIFICATION_TOKEN_EXPIRED. |
| `ResponsePptf` | INVALID_TRACE_REFERENCE. |
| `ResponsePpti` | INVALID_TRANSACTION_ID. |
| `ResponsePptr` | VERIFICATION_TOKEN_REVOKED. |
| `ResponsePptt` | TRANSACTION_TYPE_UNSUPPORTED. |
| `ResponsePptv` | INVALID_VERIFICATION_TOKEN. |
| `ResponsePpua` | USER_NOT_AUTHORIZED. |
| `ResponsePpuc` | CURRENCY_CODE_UNSUPPORTED. |
| `ResponsePpue` | UNSUPPORT_ENTITY. |
| `ResponsePpui` | UNSUPPORT_INSTALLMENT. |
| `ResponsePpup` | UNSUPPORT_POS_FLAG. |
| `ResponsePpur` | UNSUPPORTED_REVERSAL. |
| `ResponsePpvc` | VALIDATE_CURRENCY. |
| `ResponsePpve` | VALIDATION_ERROR. |
| `ResponsePpvt` | VIRTUAL_TERMINAL_UNSUPPORTED. |

