// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource budgets', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.budgets.create({
      Details: [
        {
          GLAccountId: 0,
          MonthlyAmounts: {
            April: 0,
            August: 0,
            December: 0,
            February: 0,
            January: 0,
            July: 0,
            June: 0,
            March: 0,
            May: 0,
            November: 0,
            October: 0,
            September: 0,
          },
        },
      ],
      FiscalYear: 0,
      Name: 'x',
      PropertyId: 0,
      StartMonth: 'January',
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
    const response = await client.budgets.create({
      Details: [
        {
          GLAccountId: 0,
          MonthlyAmounts: {
            April: 0,
            August: 0,
            December: 0,
            February: 0,
            January: 0,
            July: 0,
            June: 0,
            March: 0,
            May: 0,
            November: 0,
            October: 0,
            September: 0,
          },
        },
      ],
      FiscalYear: 0,
      Name: 'x',
      PropertyId: 0,
      StartMonth: 'January',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.budgets.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.budgets.update(0, {
      Details: [
        {
          GLAccountId: 0,
          MonthlyAmounts: {
            April: 0,
            August: 0,
            December: 0,
            February: 0,
            January: 0,
            July: 0,
            June: 0,
            March: 0,
            May: 0,
            November: 0,
            October: 0,
            September: 0,
          },
        },
      ],
      Name: 'x',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.budgets.update(0, {
      Details: [
        {
          GLAccountId: 0,
          MonthlyAmounts: {
            April: 0,
            August: 0,
            December: 0,
            February: 0,
            January: 0,
            July: 0,
            June: 0,
            March: 0,
            May: 0,
            November: 0,
            October: 0,
            September: 0,
          },
        },
      ],
      Name: 'x',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.budgets.list();
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
      client.budgets.list(
        { fiscalyear: 0, limit: 0, name: 'name', offset: 0, orderby: 'orderby', propertyids: [0] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
