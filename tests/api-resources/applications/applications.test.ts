// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource applications', () => {
  // skipped: tests are disabled for the time being
  test.skip('createAutoPay: only required params', async () => {
    const responsePromise = client.applications.createAutoPay(0, {
      Date: '2019-12-27',
      PaymentMethod: 'Check',
      SendEmailReceipt: true,
      TotalAmount: 0,
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
  test.skip('createAutoPay: required and optional params', async () => {
    const response = await client.applications.createAutoPay(0, {
      Date: '2019-12-27',
      PaymentMethod: 'Check',
      SendEmailReceipt: true,
      TotalAmount: 0,
      Memo: 'Memo',
      ReferenceNumber: 'ReferenceNumber',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createPayReversal: only required params', async () => {
    const responsePromise = client.applications.createPayReversal(0, {
      EntryDate: '2019-12-27',
      PaymentTransactionId: 0,
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
  test.skip('createPayReversal: required and optional params', async () => {
    const response = await client.applications.createPayReversal(0, {
      EntryDate: '2019-12-27',
      PaymentTransactionId: 0,
      BankFee: { GLAccountId: 0, TotalAmount: 0 },
      DepositTrustAccountBankFee: { GLAccountId: 0, TotalAmount: 0 },
      NSFCharge: { GLAccountId: 0, TotalAmount: 0 },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listBalances', async () => {
    const responsePromise = client.applications.listBalances();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listBalances: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.listBalances(
        { applicationids: [0], applicationstatuses: ['Undecided'], limit: 0, offset: 0, orderby: 'orderby' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
