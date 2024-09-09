/**
 * paypal server sdkLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CustomerVaultPaymentTokensResponse,
  customerVaultPaymentTokensResponseSchema,
} from '../models/customerVaultPaymentTokensResponse';
import {
  PaymentTokenRequest,
  paymentTokenRequestSchema,
} from '../models/paymentTokenRequest';
import {
  PaymentTokenResponse,
  paymentTokenResponseSchema,
} from '../models/paymentTokenResponse';
import {
  SetupTokenRequest,
  setupTokenRequestSchema,
} from '../models/setupTokenRequest';
import {
  SetupTokenResponse,
  setupTokenResponseSchema,
} from '../models/setupTokenResponse';
import { boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { CustomError } from '../errors/customError';

export class VaultController extends BaseController {
  /**
   * Creates a Payment Token from the given payment source and adds it to the Vault of the associated
   * customer.
   *
   * @param payPalRequestId   The server stores keys for 3 hours.
   * @param body              Payment Token creation with a financial instrument and an
   *                                                        optional customer_id.
   * @return Response from the API call
   */
  async paymentTokensCreate(
    {
      payPalRequestId,
      body,
    }: {
      payPalRequestId: string;
      body: PaymentTokenRequest;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentTokenResponse>> {
    const req = this.createRequest('POST', '/v3/vault/payment-tokens');
    const mapped = req.prepareArgs({
      payPalRequestId: [payPalRequestId, string()],
      body: [body, paymentTokenRequestSchema],
    });
    req.header('PayPal-Request-Id', mapped.payPalRequestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      CustomError,
      'Request is not well-formed, syntactically incorrect, or violates schema.'
    );
    req.throwOn(
      403,
      CustomError,
      'Authorization failed due to insufficient permissions.'
    );
    req.throwOn(
      404,
      CustomError,
      'Request contains reference to resources that do not exist.'
    );
    req.throwOn(
      422,
      CustomError,
      'The requested action could not be performed, semantically incorrect, or failed business validation.'
    );
    req.throwOn(500, CustomError, 'An internal server error has occurred.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(paymentTokenResponseSchema, requestOptions);
  }

  /**
   * Returns all payment tokens for a customer.
   *
   * @param customerId     A unique identifier representing a specific customer in merchant's/partner's
   *                                  system or records.
   * @param pageSize       A non-negative, non-zero integer indicating the maximum number of results to
   *                                  return at one time.
   * @param page           A non-negative, non-zero integer representing the page of the results.
   * @param totalRequired  A boolean indicating total number of items (total_items) and pages (total_pages)
   *                                  are expected to be returned in the response.
   * @return Response from the API call
   */
  async customerPaymentTokensGet(
    {
      customerId,
      pageSize,
      page,
      totalRequired,
    }: {
      customerId: string;
      pageSize?: number;
      page?: number;
      totalRequired?: boolean;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerVaultPaymentTokensResponse>> {
    const req = this.createRequest('GET', '/v3/vault/payment-tokens');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      pageSize: [pageSize, optional(number())],
      page: [page, optional(number())],
      totalRequired: [totalRequired, optional(boolean())],
    });
    req.query('customer_id', mapped.customerId);
    req.query('page_size', mapped.pageSize);
    req.query('page', mapped.page);
    req.query('total_required', mapped.totalRequired);
    req.throwOn(
      400,
      CustomError,
      'Request is not well-formed, syntactically incorrect, or violates schema.'
    );
    req.throwOn(
      403,
      CustomError,
      'Authorization failed due to insufficient permissions.'
    );
    req.throwOn(500, CustomError, 'An internal server error has occurred.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(
      customerVaultPaymentTokensResponseSchema,
      requestOptions
    );
  }

  /**
   * Returns a readable representation of vaulted payment source associated with the payment token id.
   *
   * @param id ID of the payment token.
   * @return Response from the API call
   */
  async paymentTokensGet(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentTokenResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v3/vault/payment-tokens/${mapped.id}`;
    req.throwOn(
      403,
      CustomError,
      'Authorization failed due to insufficient permissions.'
    );
    req.throwOn(404, CustomError, 'The specified resource does not exist.');
    req.throwOn(
      422,
      CustomError,
      'The requested action could not be performed, semantically incorrect, or failed business validation.'
    );
    req.throwOn(500, CustomError, 'An internal server error has occurred.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(paymentTokenResponseSchema, requestOptions);
  }

  /**
   * Delete the payment token associated with the payment token id.
   *
   * @param id ID of the payment token.
   * @return Response from the API call
   */
  async paymentTokensDelete(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v3/vault/payment-tokens/${mapped.id}`;
    req.throwOn(
      400,
      CustomError,
      'Request is not well-formed, syntactically incorrect, or violates schema.'
    );
    req.throwOn(
      403,
      CustomError,
      'Authorization failed due to insufficient permissions.'
    );
    req.throwOn(500, CustomError, 'An internal server error has occurred.');
    req.authenticate([{ oauth2: true }]);
    return req.call(requestOptions);
  }

  /**
   * Creates a Setup Token from the given payment source and adds it to the Vault of the associated
   * customer.
   *
   * @param payPalRequestId   The server stores keys for 3 hours.
   * @param body              Setup Token creation with a instrument type optional
   *                                                      financial instrument details and customer_id.
   * @return Response from the API call
   */
  async setupTokensCreate(
    {
      payPalRequestId,
      body,
    }: {
      payPalRequestId: string;
      body: SetupTokenRequest;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SetupTokenResponse>> {
    const req = this.createRequest('POST', '/v3/vault/setup-tokens');
    const mapped = req.prepareArgs({
      payPalRequestId: [payPalRequestId, string()],
      body: [body, setupTokenRequestSchema],
    });
    req.header('PayPal-Request-Id', mapped.payPalRequestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      CustomError,
      'Request is not well-formed, syntactically incorrect, or violates schema.'
    );
    req.throwOn(
      403,
      CustomError,
      'Authorization failed due to insufficient permissions.'
    );
    req.throwOn(
      422,
      CustomError,
      'The requested action could not be performed, semantically incorrect, or failed business validation.'
    );
    req.throwOn(500, CustomError, 'An internal server error has occurred.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(setupTokenResponseSchema, requestOptions);
  }

  /**
   * Returns a readable representation of temporarily vaulted payment source associated with the setup
   * token id.
   *
   * @param id ID of the setup token.
   * @return Response from the API call
   */
  async setupTokensGet(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SetupTokenResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v3/vault/setup-tokens/${mapped.id}`;
    req.throwOn(
      403,
      CustomError,
      'Authorization failed due to insufficient permissions.'
    );
    req.throwOn(404, CustomError, 'The specified resource does not exist.');
    req.throwOn(
      422,
      CustomError,
      'The requested action could not be performed, semantically incorrect, or failed business validation.'
    );
    req.throwOn(500, CustomError, 'An internal server error has occurred.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(setupTokenResponseSchema, requestOptions);
  }
}
