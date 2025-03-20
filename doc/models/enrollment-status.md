
# Enrollment Status

Status of Authentication eligibility.

## Enumeration

`EnrollmentStatus`

## Fields

| Name | Description |
|  --- | --- |
| `Enrolled` | Yes. The bank is participating in 3-D Secure protocol and will return the ACSUrl. |
| `NotEnrolled` | No. The bank is not participating in 3-D Secure protocol. |
| `Unavailable` | Unavailable. The DS or ACS is not available for authentication at the time of the request. |
| `Bypass` | Bypass. The merchant authentication rule is triggered to bypass authentication. |

