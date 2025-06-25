// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bills', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.bills.create({
      Date: '2019-12-27',
      DueDate: '2019-12-27',
      Lines: [
        { AccountingEntity: { AccountingEntityType: 'Association', Id: 0 }, Amount: 0, GlAccountId: 0 },
      ],
      VendorId: 0,
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
    const response = await client.bills.create({
      Date: '2019-12-27',
      DueDate: '2019-12-27',
      Lines: [
        {
          AccountingEntity: { AccountingEntityType: 'Association', Id: 0, UnitId: 0 },
          Amount: 0,
          GlAccountId: 0,
          Markup: { Amount: 0, Type: 'Percent' },
          Memo: 'Memo',
        },
      ],
      VendorId: 0,
      Memo: 'Memo',
      ReferenceNumber: 'ReferenceNumber',
      WorkOrderId: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.bills.retrieve(0);
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
    const responsePromise = client.bills.update(0, {
      Date: '2019-12-27',
      DueDate: '2019-12-27',
      VendorId: 0,
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
    const response = await client.bills.update(0, {
      Date: '2019-12-27',
      DueDate: '2019-12-27',
      VendorId: 0,
      Lines: [
        {
          AccountingEntity: { AccountingEntityType: 'Association', Id: 0, UnitId: 0 },
          Amount: 0,
          GlAccountId: 0,
          Id: 0,
          Markup: { Amount: 0, Type: 'Percent' },
          Memo: 'Memo',
        },
      ],
      Memo: 'Memo',
      ReferenceNumber: 'ReferenceNumber',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.bills.list();
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
      client.bills.list(
        {
          approvalstatuses: ['NotNeeded'],
          entityid: 0,
          entitytype: 'Rental',
          frompaiddate: '2019-12-27',
          limit: 0,
          offset: 0,
          orderby: 'orderby',
          paidstatus: 'Paid',
          referencenumber: 'referencenumber',
          topaiddate: '2019-12-27',
          vendorid: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
