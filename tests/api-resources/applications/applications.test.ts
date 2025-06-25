// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource applications', () => {
  // skipped: tests are disabled for the time being
  test.skip('createAutoAllocatedPayment: only required params', async () => {
    const responsePromise = client.applications.createAutoAllocatedPayment(0, {
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
  test.skip('createAutoAllocatedPayment: required and optional params', async () => {
    const response = await client.applications.createAutoAllocatedPayment(0, {
      Date: '2019-12-27',
      PaymentMethod: 'Check',
      SendEmailReceipt: true,
      TotalAmount: 0,
      Memo: 'Memo',
      ReferenceNumber: 'ReferenceNumber',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createPaymentReversal: only required params', async () => {
    const responsePromise = client.applications.createPaymentReversal(0, {
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
  test.skip('createPaymentReversal: required and optional params', async () => {
    const response = await client.applications.createPaymentReversal(0, {
      EntryDate: '2019-12-27',
      PaymentTransactionId: 0,
      BankFee: { GLAccountId: 0, TotalAmount: 0 },
      DepositTrustAccountBankFee: { GLAccountId: 0, TotalAmount: 0 },
      NSFCharge: { GLAccountId: 0, TotalAmount: 0 },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listOutstandingBalances', async () => {
    const responsePromise = client.applications.listOutstandingBalances();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listOutstandingBalances: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.listOutstandingBalances(
        { applicationids: [0], applicationstatuses: ['Undecided'], limit: 0, offset: 0, orderby: 'orderby' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
