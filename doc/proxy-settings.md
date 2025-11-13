
# ProxySettings

Represents the proxy server configurations for API calls.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| address | `string` | The proxy server URL. |
| port | `number` | The port to connect to the proxy server. |
| auth | `ProxyAuth` | Proxy authentication. |

## ProxyAuth

| Name | Type | Description |
|  --- | --- | --- |
| username | `string` | Username for proxy authentication. |
| password | `string` | Password for proxy authentication. |

### Client Initialization with Proxy Configuration

To configure the SDK to use a proxy server, initialize the proxy configuration during client setup as shown in the Usage Example.

## Usage Example

```ts
import { Client } from '../../../src';

const client = new Client({
  httpClientOptions: {
    proxySettings: {
      address: 'http://localhost',
      port: 8080,
      auth: {
        username: 'admin',
        password: 'password123'
      }
    }
  }
});
```

