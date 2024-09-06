/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

export * from '@apimatic/test-utilities';

import { HttpClient } from '../src/clientAdapter';
import { HttpClientInterface } from '../src/core';
import { ApiError, ApiResponse, AbortError } from '../src';

export function httpClientInterface(): HttpClientInterface {
  return async (request, requestOptions) => {
    return await new HttpClient(AbortError).executeRequest(
      request,
      requestOptions
    );
  };
}

export async function makeApiCall<T>(
  caller: () => Promise<ApiResponse<T>>
): Promise<ApiResponse<T>> {
  try {
    return await caller();
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        request: error.request,
        statusCode: error.statusCode,
        headers: error.headers,
        result: error.result,
        body: error.body,
      };
    }
    throw error;
  }
}
