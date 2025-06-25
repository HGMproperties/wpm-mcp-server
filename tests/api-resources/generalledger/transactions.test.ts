// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.generalledger.transactions.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.generalledger.transactions.list({
      enddate: '2019-12-27',
      glaccountids: [0],
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
    const response = await client.generalledger.transactions.list({
      enddate: '2019-12-27',
      glaccountids: [0],
      startdate: '2019-12-27',
      lastupdatedfrom: '2019-12-27T18:11:19.117Z',
      lastupdatedto: '2019-12-27T18:11:19.117Z',
      limit: 0,
      offset: 0,
      orderby: 'orderby',
      selectionentityid: 0,
      selectionentitytype: 'Rental',
      selectionentityunitid: 0,
    });
  });
});
