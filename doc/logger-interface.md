
# LoggerInterface

An interface for custom logger implementation.

## Logger Methods

| Name | Description | Parameters | Method Signature |
|  --- | --- | --- | --- |
| log | Logs a message with a specified log level and additional parameters. | 1. level: The log level of the message.<br>2. message: The message template to log.<br>3. params: The parameters to include in the log message. | log(level: LogLevel, message: string, params: Record<string, any>): void |

## Usage Example

### Custom LoggerInterface implementation

In order to provide custom logger, any implementation of the `LoggerInterface` can be used so that you can override the `log` behavior and provide its instance directly in the SDK client initialization. The following example exports a `WinstonLogger` class that implements the `LoggerInterface`'s `log()` function.

```ts
import { LoggerInterface, LogLevel } from '../../../src';
import winston from 'winston';

export class WinstonLogger implements LoggerInterface {
  private _logger: winston.Logger;
  constructor() {
    // Create the logger instance
    const { createLogger, format, transports } = require('winston');
    // Ignore log messages if they have { private: true }
    this._logger = createLogger({
      format: format.combine(
        format.json()
      ),
      transports: [new transports.Console()]
    });
  }

  public log(level: LogLevel, message: string, meta: Record<string, any>): void {
    this._logger.log(level, message, meta);
  }
}
```

### Client Initialization with Custom Logger

The following example uses the above `WinstonLogger` implementation of `LoggerInterface` for PayPalRESTAPIs Client initialization.

```ts
import { Client, LogLevel } from '../../../src';

const client = new Client({
  logging: {
    logger: new WinstonLogger(),
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});
```

