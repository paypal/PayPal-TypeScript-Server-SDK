import { PaymentsController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('Payments API', () => {
  let paymentsController: PaymentsController;
  const nonExistentAuthorizationId = 'authorization_id8';
  const nonExistentCaptureId = 'capture_id';
  const nonExistentRefundId = 'refund_id';
  const alreadyAuthorizedAuthorizationId = '3BJ81821K7933911P';
  beforeAll(() => {
    paymentsController = new PaymentsController(testClient);
  });

  it('Returns 404 Status Code for Get Authorizations Request', async () => {
    const authorizationId = nonExistentAuthorizationId;

    const { result: authorization, ...getAuthorizationsResponse } =
      await makeApiCall(() =>
        paymentsController.authorizationsGet(authorizationId)
      );

    // verify status 404
    expect(getAuthorizationsResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(getAuthorizationsResponse.headers, expectedHeaders);

    expect(authorization).toHaveProperty('name');
    expect(authorization).toHaveProperty('message');
    expect(authorization).toHaveProperty('debug_id');
    expect(authorization).toHaveProperty('details');
    expect(authorization).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Get Captures Request', async () => {
    const captureId = nonExistentCaptureId;

    const { result: capture, ...getCaptureResponse } = await makeApiCall(() =>
      paymentsController.capturesGet(captureId)
    );

    // verify status 404
    expect(getCaptureResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(getCaptureResponse.headers, expectedHeaders);

    expect(capture).toHaveProperty('name');
    expect(capture).toHaveProperty('message');
    expect(capture).toHaveProperty('debug_id');
    expect(capture).toHaveProperty('details');
    expect(capture).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Get Refunds Request', async () => {
    const refundId = nonExistentRefundId;

    const { result: refund, ...getOrdersResponse } = await makeApiCall(() =>
      paymentsController.refundsGet(refundId)
    );

    // verify status 404
    expect(getOrdersResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(getOrdersResponse.headers, expectedHeaders);

    expect(refund).toHaveProperty('name');
    expect(refund).toHaveProperty('message');
    expect(refund).toHaveProperty('debug_id');
    expect(refund).toHaveProperty('details');
    expect(refund).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Capture Authorization Request', async () => {
    const collect = {
      authorizationId: nonExistentAuthorizationId,
      prefer: 'return=minimal',
      body: {
        finalCapture: false,
      },
    };

    const { result: captureAuthorization, ...captureAuthorizationResponse } =
      await makeApiCall(() =>
        paymentsController.authorizationsCapture(collect)
      );

    // verify status 404
    expect(captureAuthorizationResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(captureAuthorizationResponse.headers, expectedHeaders);

    expect(captureAuthorization).toHaveProperty('name');
    expect(captureAuthorization).toHaveProperty('message');
    expect(captureAuthorization).toHaveProperty('debug_id');
    expect(captureAuthorization).toHaveProperty('details');
    expect(captureAuthorization).toHaveProperty('links');
  });

  it('Returns 404 Status Code for ReAuthorization Request', async () => {
    const collect = {
      authorizationId: nonExistentAuthorizationId,
      prefer: 'return=minimal',
    };

    const { result: authorize, ...captureAuthorizationResponse } =
      await makeApiCall(() =>
        paymentsController.authorizationsReauthorize(collect)
      );

    // verify status 404
    expect(captureAuthorizationResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(captureAuthorizationResponse.headers, expectedHeaders);

    expect(authorize).toHaveProperty('name');
    expect(authorize).toHaveProperty('message');
    expect(authorize).toHaveProperty('debug_id');
    expect(authorize).toHaveProperty('details');
    expect(authorize).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Authorization  Void  Request', async () => {
    const collect = {
      authorizationId: nonExistentAuthorizationId,
      prefer: 'return=minimal',
    };

    const { result: authorize, ...authorizationResponse } = await makeApiCall(
      () => paymentsController.authorizationsVoid(collect)
    );

    // verify status 404
    expect(authorizationResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(authorizationResponse.headers, expectedHeaders);

    expect(authorize).toHaveProperty('name');
    expect(authorize).toHaveProperty('message');
    expect(authorize).toHaveProperty('debug_id');
    expect(authorize).toHaveProperty('details');
    expect(authorize).toHaveProperty('links');
  });

  it('Returns 422 Status Code for Authorization  Void  Request', async () => {
    const collect = {
      authorizationId: alreadyAuthorizedAuthorizationId,
      prefer: 'return=minimal',
    };

    const { result: authorize, ...authorizationResponse } = await makeApiCall(
      () => paymentsController.authorizationsVoid(collect)
    );

    // verify status 404
    expect(authorizationResponse.statusCode).toBe(422);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(authorizationResponse.headers, expectedHeaders);

    expect(authorize).toHaveProperty('name');
    expect(authorize).toHaveProperty('message');
    expect(authorize).toHaveProperty('debug_id');
    expect(authorize).toHaveProperty('details');
    expect(authorize).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Capture Refund Request', async () => {
    const collect = {
      captureId: nonExistentCaptureId,
      prefer: 'return=minimal',
      body: {
        amount: {
          currencyCode: 'USD',
          value: '1.44',
        },
        noteToPayer: 'Defective product',
      },
    };

    const { result: capture, ...captureRefundResponse } = await makeApiCall(
      () => paymentsController.capturesRefund(collect)
    );

    // verify status 422
    expect(captureRefundResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(captureRefundResponse.headers, expectedHeaders);

    expect(capture).toHaveProperty('name');
    expect(capture).toHaveProperty('message');
    expect(capture).toHaveProperty('debug_id');
    expect(capture).toHaveProperty('details');
    expect(capture).toHaveProperty('links');
  });
});
