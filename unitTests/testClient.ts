/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Client, Configuration, Environment } from '../src';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });
export const testClient = new Client(createConfigurationFromEnvironment());

function createConfigurationFromEnvironment(): Partial<Configuration> {
  const config: Partial<Configuration> = {};

  const environment = Environment.Sandbox;
  const timeout = '10000';
  const oAuthClientId = process.env.CLIENT_ID;
  const oAuthClientSecret = process.env.CLIENT_SECRET;

  if (environment !== undefined) {
    config.environment = environment as Environment;
  }

  if (timeout !== undefined) {
    config.timeout = parseInt(timeout);
  }

  if (oAuthClientId !== undefined && oAuthClientSecret !== undefined) {
    config.clientCredentialsAuthCredentials = {
      oAuthClientId: oAuthClientId,
      oAuthClientSecret: oAuthClientSecret,
    };
  }

  return config;
}
