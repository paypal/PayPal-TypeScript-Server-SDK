
# OAuth 2 Client Credentials Grant



Documentation for accessing and setting credentials for Oauth2.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| OAuthClientId | `string` | OAuth 2 Client ID | `oAuthClientId` |
| OAuthClientSecret | `string` | OAuth 2 Client Secret | `oAuthClientSecret` |
| OAuthToken | `OAuthToken` | Object for storing information about the OAuth token | `oAuthToken` |
| OAuthClockSkew | `number` | Clock skew time in seconds applied while checking the OAuth Token expiry. | `clockSkew` |
| OAuthTokenProvider | `(lastOAuthToken: OAuthToken \| undefined, authManager: ClientCredentialsAuthManager) => Promise<OAuthToken>` | Registers a callback for oAuth Token Provider used for automatic token fetching/refreshing. | `oAuthTokenProvider` |
| OAuthOnTokenUpdate | `(token: OAuthToken) => void` | Registers a callback for token update event. | `oAuthOnTokenUpdate` |



**Note:** Auth credentials can be set using `clientCredentialsAuthCredentials` object in the client.

## Usage Example

### Client Initialization

You must initialize the client with *OAuth 2.0 Client Credentials Grant* credentials as shown in the following code snippet. This will fetch the OAuth token automatically when any of the endpoints, requiring *OAuth 2.0 Client Credentials Grant* authentication, are called.

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
});
```



Your application can also manually provide an OAuthToken using the setter `oAuthToken` in `clientCredentialsAuthCredentials` object. This function takes in an instance of OAuthToken containing information for authorizing client requests and refreshing the token itself.

### Adding OAuth Token Update Callback

Whenever the OAuth Token gets updated, the provided callback implementation will be executed. For instance, you may use it to store your access token whenever it gets updated.

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthOnTokenUpdate: (token: OAuthToken) => {
      // Add the callback handler to perform operations like save to DB or file etc.
      // It will be triggered whenever the token gets updated
      saveTokenToDatabase(token);
    }
  },
});
```

### Adding Custom OAuth Token Provider

To authorize a client using a stored access token, set up the `oAuthTokenProvider` in `clientCredentialsAuthCredentials` along with the other auth parameters before creating the client:

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthTokenProvider: (lastOAuthToken: OAuthToken | undefined, authManager: ClientCredentialsAuthManager) => {
      // Add the callback handler to provide a new OAuth token
      // It will be triggered whenever the lastOAuthToken is undefined or expired
      return loadTokenFromDatabase() ?? authManager.fetchToken();
    }
  },
});
```


