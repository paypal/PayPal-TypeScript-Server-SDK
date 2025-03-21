import { TokenRequestType, VaultController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('Vault API', () => {
  let vaultController: VaultController;
  const nonExistentSetupTokenId = 'setup-1';
  const nonExistentPaymentTokenId = 'payment-1';
  const nonExistentCustomerId = 'customer-id';
  const invalidId = "'dw";

  beforeAll(() => {
    vaultController = new VaultController(testClient);
  });

  it('Returns 400 Status Code for Create Setup Tokens Request', async () => {
    const collect = {
      payPalRequestId: '',
      body: {
        paymentSource: {},
      },
    };

    const { result: setupToken, ...createSetupTokensResponse } =
      await makeApiCall(() => vaultController.setupTokensCreate(collect));

    // verify status 400
    expect(createSetupTokensResponse.statusCode).toBe(400);

    const expectedHeaders = { 'Content-Type': ['application/json'] };
    expectHeadersToMatch(createSetupTokensResponse.headers, expectedHeaders);

    expect(setupToken).toHaveProperty('name');
    expect(setupToken).toHaveProperty('message');
    expect(setupToken).toHaveProperty('debug_id');
    expect(setupToken).toHaveProperty('details');
    expect(setupToken).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Create Payment Tokens Request', async () => {
    const collect = {
      payPalRequestId: '',
      body: {
        paymentSource: {},
      },
    };

    const { result: paymentToken, ...createpaymentTokensResponse } =
      await makeApiCall(() => vaultController.paymentTokensCreate(collect));

    // verify status 404
    expect(createpaymentTokensResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };
    expectHeadersToMatch(createpaymentTokensResponse.headers, expectedHeaders);

    expect(paymentToken).toHaveProperty('name');
    expect(paymentToken).toHaveProperty('message');
    expect(paymentToken).toHaveProperty('debug_id');
    expect(paymentToken).toHaveProperty('details');
    expect(paymentToken).toHaveProperty('links');
  });

  it('Returns 400 Status Code for Create Payment Tokens Request', async () => {
    const collect = {
      payPalRequestId: '',
      body: {
        paymentSource: {
          token: {
            id: invalidId,
            type: TokenRequestType.SETUPTOKEN,
          },
        },
      },
    };

    const { result: paymentToken, ...createpaymentTokensResponse } =
      await makeApiCall(() => vaultController.paymentTokensCreate(collect));

    // verify status 400
    expect(createpaymentTokensResponse.statusCode).toBe(400);

    const expectedHeaders = { 'Content-Type': ['application/json'] };
    expectHeadersToMatch(createpaymentTokensResponse.headers, expectedHeaders);

    expect(paymentToken).toHaveProperty('name');
    expect(paymentToken).toHaveProperty('message');
    expect(paymentToken).toHaveProperty('debug_id');
    expect(paymentToken).toHaveProperty('details');
    expect(paymentToken).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Get Setup Tokens Request', async () => {
    const id = nonExistentSetupTokenId;

    const { result: setupToken, ...getSetupTokensResponse } = await makeApiCall(
      () => vaultController.setupTokensGet(id)
    );

    // verify status 404
    expect(getSetupTokensResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(getSetupTokensResponse.headers, expectedHeaders);

    expect(setupToken).toHaveProperty('name');
    expect(setupToken).toHaveProperty('message');
    expect(setupToken).toHaveProperty('debug_id');
    expect(setupToken).toHaveProperty('details');
    expect(setupToken).toHaveProperty('links');
  });

  it('Returns 400 Status Code for Get Setup Tokens Request', async () => {
    const id = invalidId;

    const { result: setupToken, ...getSetupTokensResponse } = await makeApiCall(
      () => vaultController.setupTokensGet(id)
    );

    // verify status 400
    expect(getSetupTokensResponse.statusCode).toBe(400);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(getSetupTokensResponse.headers, expectedHeaders);

    expect(setupToken).toHaveProperty('name');
    expect(setupToken).toHaveProperty('message');
    expect(setupToken).toHaveProperty('debug_id');
    expect(setupToken).toHaveProperty('details');
    expect(setupToken).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Get Payment Tokens Request', async () => {
    const id = nonExistentPaymentTokenId;

    const { result: paymentToken, ...getPaymentTokensResponse } =
      await makeApiCall(() => vaultController.paymentTokensGet(id));

    // verify status 200
    expect(getPaymentTokensResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(getPaymentTokensResponse.headers, expectedHeaders);

    expect(paymentToken).toHaveProperty('name');
    expect(paymentToken).toHaveProperty('message');
    expect(paymentToken).toHaveProperty('debug_id');
    expect(paymentToken).toHaveProperty('details');
    expect(paymentToken).toHaveProperty('links');
  });

  it('Returns 400 Status Code for Get Payment Tokens Request', async () => {
    const id = invalidId;

    const { result: paymentToken, ...getPaymentTokensResponse } =
      await makeApiCall(() => vaultController.paymentTokensGet(id));

    // verify status 400
    expect(getPaymentTokensResponse.statusCode).toBe(400);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(getPaymentTokensResponse.headers, expectedHeaders);

    expect(paymentToken).toHaveProperty('name');
    expect(paymentToken).toHaveProperty('message');
    expect(paymentToken).toHaveProperty('debug_id');
    expect(paymentToken).toHaveProperty('details');
    expect(paymentToken).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Get Customer Payment Tokens Request', async () => {
    const collect = {
      customerId: nonExistentCustomerId,
      pageSize: 5,
      page: 1,
      totalRequired: false,
    };

    const { result: paymentToken, ...getPaymentTokenResponse } =
      await makeApiCall(() =>
        vaultController.customerPaymentTokensGet(collect)
      );

    expect(getPaymentTokenResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(getPaymentTokenResponse.headers, expectedHeaders);
    expect(paymentToken).toHaveProperty('name');
    expect(paymentToken).toHaveProperty('message');
    expect(paymentToken).toHaveProperty('debug_id');
    expect(paymentToken).toHaveProperty('details');
    expect(paymentToken).toHaveProperty('links');
  });

  it('Returns 400 Status Code for Get Customer Payment Tokens Request', async () => {
    const collect = {
      customerId: invalidId,
      pageSize: 5,
      page: 1,
      totalRequired: false,
    };

    const { result: paymentToken, ...getPaymentTokenResponse } =
      await makeApiCall(() =>
        vaultController.customerPaymentTokensGet(collect)
      );

    expect(getPaymentTokenResponse.statusCode).toBe(400);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(getPaymentTokenResponse.headers, expectedHeaders);
    expect(paymentToken).toHaveProperty('name');
    expect(paymentToken).toHaveProperty('message');
    expect(paymentToken).toHaveProperty('debug_id');
    expect(paymentToken).toHaveProperty('details');
    expect(paymentToken).toHaveProperty('links');
  });

  it('Returns 204 Status Code for Delete Payment Tokens Request', async () => {
    const id = nonExistentPaymentTokenId;

    const deletePaymentTokensResponse = await makeApiCall(() =>
      vaultController.paymentTokensDelete(id)
    );

    // verify status 204
    expect(deletePaymentTokensResponse.statusCode).toBe(204);
  });
});
