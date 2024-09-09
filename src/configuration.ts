/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { HttpClientOptions } from './clientAdapter';
import { ClientCredentialsAuthManager } from './clientCredentialsAuthManager';
import { PartialLoggingOptions } from './core';
import { OAuthToken } from './models/oAuthToken';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  environment: Environment;
  clientCredentialsAuthCredentials?: {
    oAuthClientId: string;
    oAuthClientSecret: string;
    oAuthToken?: OAuthToken;
    oAuthTokenProvider?: (
      lastOAuthToken: OAuthToken | undefined,
      authManager: ClientCredentialsAuthManager
    ) => Promise<OAuthToken>;
    oAuthOnTokenUpdate?: (token: OAuthToken) => void;
    oAuthClockSkew?: number;
  };
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
  logging?: PartialLoggingOptions;
}

/** Environments available for API */
export enum Environment {
  Production = 'Production',
  Sandbox = 'Sandbox',
}
