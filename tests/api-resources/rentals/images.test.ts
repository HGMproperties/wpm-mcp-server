// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.rentals.images.retrieve(0, { propertyId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.rentals.images.retrieve(0, { propertyId: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.rentals.images.update(0, { propertyId: 0, ShowInListing: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.rentals.images.update(0, {
      propertyId: 0,
      ShowInListing: true,
      Description: 'Description',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.rentals.images.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rentals.images.list(
        0,
        { limit: 0, offset: 0, orderby: 'orderby' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.rentals.images.delete(0, { propertyId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.rentals.images.delete(0, { propertyId: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('downloadRequests: only required params', async () => {
    const responsePromise = client.rentals.images.downloadRequests(0, { propertyId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('downloadRequests: required and optional params', async () => {
    const response = await client.rentals.images.downloadRequests(0, { propertyId: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateOrder: only required params', async () => {
    const responsePromise = client.rentals.images.updateOrder(0, { Ids: [0] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateOrder: required and optional params', async () => {
    const response = await client.rentals.images.updateOrder(0, { Ids: [0] });
  });

  // skipped: tests are disabled for the time being
  test.skip('uploadRequests: only required params', async () => {
    const responsePromise = client.rentals.images.uploadRequests(0, { FileName: 'x', ShowInListing: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('uploadRequests: required and optional params', async () => {
    const response = await client.rentals.images.uploadRequests(0, {
      FileName: 'x',
      ShowInListing: true,
      Description: 'Description',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('videoLinkRequests: only required params', async () => {
    const responsePromise = client.rentals.images.videoLinkRequests(0, {
      ShowInListing: true,
      VideoUrl: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('videoLinkRequests: required and optional params', async () => {
    const response = await client.rentals.images.videoLinkRequests(0, { ShowInListing: true, VideoUrl: 'x' });
  });
});
