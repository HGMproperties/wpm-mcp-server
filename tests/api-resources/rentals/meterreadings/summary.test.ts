// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource summary', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.rentals.meterreadings.summary.create(0, {
      Details: [{ PriorValue: 0, UnitId: 0, Value: 0 }],
      MeterType: 'Electric',
      ReadingDate: '2019-12-27',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.rentals.meterreadings.summary.create(0, {
      Details: [{ PriorValue: 0, UnitId: 0, Value: 0, Id: 0 }],
      MeterType: 'Electric',
      ReadingDate: '2019-12-27',
      metertype: 'Electric',
      readingdate: '2019-12-27',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.rentals.meterreadings.summary.list(0, {
      metertype: 'Electric',
      readingdate: '2019-12-27',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.rentals.meterreadings.summary.list(0, {
      metertype: 'Electric',
      readingdate: '2019-12-27',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteAll: only required params', async () => {
    const responsePromise = client.rentals.meterreadings.summary.deleteAll(0, {
      metertype: 'Electric',
      readingdate: '2019-12-27',
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
  test.skip('deleteAll: required and optional params', async () => {
    const response = await client.rentals.meterreadings.summary.deleteAll(0, {
      metertype: 'Electric',
      readingdate: '2019-12-27',
    });
  });
});
