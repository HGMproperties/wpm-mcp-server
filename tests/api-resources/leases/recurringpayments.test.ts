// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource recurringpayments', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.leases.recurringpayments.create(0, {
      FirstOccurrenceDate: '2019-12-27',
      Frequency: 'Monthly',
      PaymentMethod: 'Check',
      PostDaysInAdvance: 0,
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
    const response = await client.leases.recurringpayments.create(0, {
      FirstOccurrenceDate: '2019-12-27',
      Frequency: 'Monthly',
      PaymentMethod: 'Check',
      PostDaysInAdvance: 0,
      Duration: 'UntilEndOfTerm',
      Lines: [{ Amount: 0, GLAccountId: 0 }],
      Memo: 'Memo',
      NumberOfOccurrences: 0,
      PayerUserId: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.leases.recurringpayments.retrieve(0, { leaseId: 0 });
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
    const response = await client.leases.recurringpayments.retrieve(0, { leaseId: 0 });
  });
});
