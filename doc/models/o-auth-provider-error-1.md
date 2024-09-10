
# O Auth Provider Error

OAuth 2 Authorization error codes

## Enumeration

`OAuthProviderError`

## Fields

| Name | Description |
|  --- | --- |
| `InvalidRequest` | The request is missing a required parameter, includes an unsupported parameter value (other than grant type), repeats a parameter, includes multiple credentials, utilizes more than one mechanism for authenticating the client, or is otherwise malformed. |
| `InvalidClient` | Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method). |
| `InvalidGrant` | The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client. |
| `UnauthorizedClient` | The authenticated client is not authorized to use this authorization grant type. |
| `UnsupportedGrantType` | The authorization grant type is not supported by the authorization server. |
| `InvalidScope` | The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner. |

