// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.bankaccounts.transactions.retrieve(0, { bankAccountId: 0 });
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
    const response = await client.bankaccounts.transactions.retrieve(0, { bankAccountId: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.bankaccounts.transactions.list(0, {
      enddate: '2019-12-27',
      startdate: '2019-12-27',
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
    const response = await client.bankaccounts.transactions.list(0, {
      enddate: '2019-12-27',
      startdate: '2019-12-27',
      limit: 0,
      offset: 0,
      orderby: 'orderby',
      selectionentityid: 0,
      selectionentitytype: 'Company',
    });
  });
});
