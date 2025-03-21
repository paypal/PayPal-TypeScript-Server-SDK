import { OrdersController, CheckoutPaymentIntent } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';
import { PatchOp } from '../src/models/patchOp';

describe('Orders API', () => {
  let controller: OrdersController;
  const nonexistentOrderid = 'id-4';
  const alreadyCapturedCaptureId = '123';
  const nonExistentTrackerId = '5UA89551P20376023-443844607820';

  beforeAll(() => {
    controller = new OrdersController(testClient);
  });

  it('Returns 400 Status Code for Create Order Request', async () => {
    const collect = {
      body: {
        intent: CheckoutPaymentIntent.CAPTURE,
        purchaseUnits: [],
      },
      payPalRequestId: 'PayPal-Request-Id',
      payPalPartnerAttributionId: 'PayPal-Partner-Attribution-Id',
      payPalClientMetadataId: 'PayPal-Client-Metadata-Id',
      prefer: 'return=minimal',
    };

    const { result: createdOrder, ...createOrderResponse } = await makeApiCall(
      () => controller.ordersCreate(collect)
    );

    // verify status 400
    expect(createOrderResponse.statusCode).toBe(400);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(createOrderResponse.headers, expectedHeaders);

    expect(createdOrder).toBeDefined();
    expect(createdOrder).toHaveProperty('name');
    expect(createdOrder).toHaveProperty('message');
    expect(createdOrder).toHaveProperty('debug_id');
    expect(createdOrder).toHaveProperty('details');
    expect(createdOrder).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Patch Order Request', async () => {
    const collect = {
      id: nonexistentOrderid,
      body: [
        {
          op: PatchOp.Add,
        },
      ],
    };

    const { result: patchOrder, ...patchOrderResponse } = await makeApiCall(
      () => controller.ordersPatch(collect)
    );

    // verify status 404
    expect(patchOrderResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(patchOrderResponse.headers, expectedHeaders);

    const response = JSON.parse(patchOrderResponse.body.toString());

    expect(patchOrder).toHaveProperty('name');
    expect(response).toHaveProperty('message');
    expect(response).toHaveProperty('debug_id');
    expect(response).toHaveProperty('details');
    expect(response).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Get Orders Request', async () => {
    const collect = {
      id: nonexistentOrderid,
    };

    const { result: order, ...getOrderResponse } = await makeApiCall(() =>
      controller.ordersGet(collect)
    );

    // verify status 404
    expect(getOrderResponse.statusCode).toBe(404);
    const expectedHeaders = { 'Content-Type': ['application/json', true] };
    expectHeadersToMatch(getOrderResponse.headers, expectedHeaders);
    expect(order).toHaveProperty('name');
    expect(order).toHaveProperty('message');
    expect(order).toHaveProperty('debug_id');
    expect(order).toHaveProperty('details');
    expect(order).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Patch Orders Request', async () => {
    const collect = {
      id: nonexistentOrderid,
      body: [
        {
          op: PatchOp.Add,
        },
      ],
    };

    const { result: patch, ...patchOrderResponse } = await makeApiCall(() =>
      controller.ordersPatch(collect)
    );

    // verify status 404
    expect(patchOrderResponse.statusCode).toBe(404);
    const expectedHeaders = { 'Content-Type': ['application/json', true] };
    expectHeadersToMatch(patchOrderResponse.headers, expectedHeaders);
    expect(patch).toHaveProperty('message'),
      expect(patch).toHaveProperty('debug_id');
    expect(patch).toHaveProperty('details');
    expect(patch).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Confirm Order Request', async () => {
    const collect = {
      id: nonexistentOrderid,
      prefer: 'return=minimal',
      body: {
        paymentSource: {},
      },
    };

    const { result: confirmOder, ...captureOrderResponse } = await makeApiCall(
      () => controller.ordersConfirm(collect)
    );

    // verify status 404
    expect(captureOrderResponse.statusCode).toBe(404);
    const expectedHeaders = { 'Content-Type': ['application/json'] };
    expectHeadersToMatch(captureOrderResponse.headers, expectedHeaders);

    expect(confirmOder).toHaveProperty('name');
    expect(confirmOder).toHaveProperty('message');
    expect(confirmOder).toHaveProperty('debug_id');
    expect(confirmOder).toHaveProperty('details');
    expect(confirmOder).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Authorize Order Request', async () => {
    const collect = {
      id: nonexistentOrderid,
      prefer: 'return=minimal',
    };

    const { result: authorizeOrder, ...authorizeOrderResponse } =
      await makeApiCall(() => controller.ordersAuthorize(collect));

    // verify status 404
    expect(authorizeOrderResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(authorizeOrderResponse.headers, expectedHeaders);

    expect(authorizeOrder).toHaveProperty('name');
    expect(authorizeOrder).toHaveProperty('message');
    expect(authorizeOrder).toHaveProperty('debug_id');
    expect(authorizeOrder).toHaveProperty('details');
    expect(authorizeOrder).toHaveProperty('links');
  });

  it('Returns 400 Status Code for Create Order Track Request', async () => {
    const collect = {
      id: nonexistentOrderid,
      body: {
        captureId: alreadyCapturedCaptureId,
        notifyPayer: false,
      },
    };

    const { result: createOrder, ...createOrderTrackResponse } =
      await makeApiCall(() => controller.ordersTrackCreate(collect));

    // verify status 400
    expect(createOrderTrackResponse.statusCode).toBe(400);

    const expectedHeaders = { 'Content-Type': ['application/json'] };
    expectHeadersToMatch(createOrderTrackResponse.headers, expectedHeaders);

    expect(createOrder).toHaveProperty('name');
    expect(createOrder).toHaveProperty('message');
    expect(createOrder).toHaveProperty('debug_id');
    expect(createOrder).toHaveProperty('details');
    expect(createOrder).toHaveProperty('links');
  });

  it('Returns 404 Status Code for Patch Order Track Request', async () => {
    const collect = {
      id: nonexistentOrderid,
      trackerId: nonExistentTrackerId,
      body: [
        {
          op: PatchOp.Replace,
          path: '/notify_payer',
          value: true,
        },
      ],
    };

    const { result: PatchTrack, ...orderTrackPatchResponse } =
      await makeApiCall(() => controller.ordersTrackersPatch(collect));

    // verify status 404
    expect(orderTrackPatchResponse.statusCode).toBe(404);

    const expectedHeaders = { 'Content-Type': ['application/json'] };

    expectHeadersToMatch(orderTrackPatchResponse.headers, expectedHeaders);

    expect(PatchTrack).toHaveProperty('name');
    expect(PatchTrack).toHaveProperty('message');
    expect(PatchTrack).toHaveProperty('debug_id');
    expect(PatchTrack).toHaveProperty('details');
    expect(PatchTrack).toHaveProperty('links');
  });
});
