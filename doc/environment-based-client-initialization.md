
# Environment-Based Client Initialization

The SDK client can be initialized directly from environment variables using the `fromEnvironment` static method available on the `Client` class. This allows you to configure the SDK through environment variables, making it easier to manage different settings across different environments.

## Node.js Environment

In Node.js environments, you can use the `dotenv` package to load environment variables from a `.env` file and pass `process.env` to the configuration.

The `fromEnvironment` method accepts an optional parameter for environment variables. If not provided, it defaults to `process.env`.

```ts
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Client, Configuration } from '@paypal/paypal-server-sdk';

// Optional - Provide absolute path for the .env file
const absolutePath = path.resolve('.env');

if (fs.existsSync(absolutePath)) {
  // Load environment variables from .env file
  dotenv.config({ path: absolutePath, override: true });
}

// Initialize client using environment variables
const client = Client.fromEnvironment(process.env);
```

## Browser Environment

In browser environments, you can pass configuration values directly as key-value pairs to the `fromEnvironment` method.  Since `process.env` is not available in browsers, environment variables must be passed as an object.

```ts
import { Client, Configuration } from '@paypal/paypal-server-sdk';

const client = Client.fromEnvironment({
  TIMEOUT: '30000',
  ENVIRONMENT: 'testing'
});
```

## Example .env File

```env
# Basic Configuration
TIMEOUT=30000
ENVIRONMENT=Production

# Authentication Credentials
O_AUTH_CLIENT_ID=oauthclientid
O_AUTH_CLIENT_SECRET=oauthclientsecret
O_AUTH_CLOCK_SKEW=0

# Retry Configuration
MAX_NUMBER_OF_RETRIES=3
RETRY_ON_TIMEOUT=true
RETRY_INTERVAL=10
MAX_RETRY_WAIT_TIME=120
RETRY_BACKOFF_FACTOR=2
HTTP_STATUS_CODES_TO_RETRY=408,413,429,500,502
HTTP_METHODS_TO_RETRY=GET,PUT,DELETE

# Proxy Settings
PROXY_ADDRESS=http://localhost:3000
PROXY_PORT=8080
PROXY_AUTH_USERNAME=username
PROXY_AUTH_PASSWORD=password

# Logging
LOG_LEVEL=info
MASK_SENSITIVE_HEADERS=true

# Request Logging
REQUEST_LOG_BODY=true
REQUEST_LOG_HEADERS=true
REQUEST_INCLUDE_QUERY_IN_PATH=true
REQUEST_HEADERS_TO_INCLUDE=Content-Type,X-Request-ID
REQUEST_HEADERS_TO_EXCLUDE=Authorization
REQUEST_HEADERS_TO_WHITELIST=X-Request-ID

# Response Logging
RESPONSE_LOG_BODY=true
RESPONSE_LOG_HEADERS=true
RESPONSE_HEADERS_TO_INCLUDE=Content-Type,X-Correlation-ID,Date,Server
RESPONSE_HEADERS_TO_EXCLUDE=Set-Cookie,Authorization,X-API-Key
RESPONSE_HEADERS_TO_WHITELIST=X-Correlation-ID
```

