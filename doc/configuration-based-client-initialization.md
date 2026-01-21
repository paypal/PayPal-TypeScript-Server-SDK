
# Configuration-Based Client Initialization

The SDK client can be initialized directly from a JSON configuration file using the `fromJsonConfig` static method available on the `Client` class.` This allows you to store and load configuration settings from JSON files, making it easier to organize and manage different configurations across environments.

## Node.js Environment

In Node.js environments, you can use the `fs` module to read the configuration file from the file system.

```ts
import * as path from 'path';
import * as fs from 'fs';
import { Client } from '@paypal/paypal-server-sdk';

// Provide absolute path for the .env file
const absolutePath = path.resolve('./config.json');

// Read the configuration file content
const fileContent = fs.readFileSync(absolutePath, 'utf-8');

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(fileContent);
```

## Browser Environment

In browser environments, you can use the `import` function to load the configuration file.

```ts
import { Client } from '@paypal/paypal-server-sdk';

// Load configuration using dynamic import
const configModule = await import('./config.json', { assert: { type: 'json' } });

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(JSON.stringify(configModule.default));
```

## Example Configuration File

```json
{
  "timeout": 30000,
  "environment": "Production",
  "clientCredentialsAuthCredentials": {
    "oAuthClientId": "oauthclientid",
    "oAuthClientSecret": "oauthclientsecret",
    "oAuthClockSkew": 0
  },
  "httpClientOptions": {
    "timeout": 30000,
    "retryConfig": {
      "maxNumberOfRetries": 3,
      "retryOnTimeout": true,
      "retryInterval": 10,
      "maximumRetryWaitTime": 120,
      "backoffFactor": 2,
      "httpStatusCodesToRetry": [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
      "httpMethodsToRetry": ["GET", "PUT", "DELETE"]
    },
    "proxySettings": {
      "address": "http://localhost:3000",
      "port": 8080,
      "auth": {
        "username": "username",
        "password": "password"
      }
    }
  },
  "logging": {
    "logLevel": "info",
    "maskSensitiveHeaders": true,
    "logRequest": {
      "logBody": true,
      "logHeaders": true,
      "includeQueryInPath": true,
      "headersToInclude": [
        "Content-Type",
        "X-Request-ID"
      ],
      "headersToExclude": [
        "Authorization"
      ],
      "headersToWhitelist": [
        "X-Request-ID"
      ]
    },
    "logResponse": {
      "logBody": true,
      "logHeaders": true,
      "headersToInclude": [
        "Content-Type",
        "X-Correlation-ID",
        "Date",
        "Server"
      ],
      "headersToExclude": [
        "Set-Cookie",
        "Authorization",
        "X-API-Key"
      ],
      "headersToWhitelist": [
        "X-Correlation-ID"
      ]
    }
  }
}
```

