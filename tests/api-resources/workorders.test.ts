// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workorders', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.workorders.create({ EntryAllowed: 'Unknown', VendorId: 0 });
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
    const response = await client.workorders.create({
      EntryAllowed: 'Unknown',
      VendorId: 0,
      ChargeableTo: 'ChargeableTo',
      EntryContactId: 0,
      EntryContactIds: [0],
      EntryNotes: 'EntryNotes',
      InvoiceNumber: 'InvoiceNumber',
      LineItems: [{ Quantity: 0, UnitPrice: 0, GlAccountId: 0, Memo: 'Memo' }],
      Task: {
        AssignedToUserId: 0,
        Priority: 'Low',
        Status: 'New',
        Title: 'x',
        DueDate: '2019-12-27',
        PropertyId: 0,
        UnitId: 0,
      },
      TaskId: 0,
      VendorNotes: 'VendorNotes',
      WorkDetails: 'WorkDetails',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.workorders.retrieve(0);
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
    const responsePromise = client.workorders.update(0, { EntryAllowed: 'Unknown', VendorId: 0 });
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
    const response = await client.workorders.update(0, {
      EntryAllowed: 'Unknown',
      VendorId: 0,
      ChargeableTo: 'ChargeableTo',
      EntryContactId: 0,
      EntryContactIds: [0],
      EntryNotes: 'EntryNotes',
      InvoiceNumber: 'InvoiceNumber',
      LineItems: [{ Quantity: 0, UnitPrice: 0, GlAccountId: 0, Memo: 'Memo' }],
      VendorNotes: 'VendorNotes',
      WorkDetails: 'WorkDetails',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.workorders.list();
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
      client.workorders.list(
        {
          amountfrom: 0,
          amountto: 0,
          assignedtoid: 0,
          duedatefrom: '2019-12-27',
          duedateto: '2019-12-27',
          entityid: 0,
          entitytype: 'Rental',
          isbilled: true,
          lastupdatedfrom: '2019-12-27',
          lastupdatedto: '2019-12-27',
          limit: 0,
          offset: 0,
          orderby: 'orderby',
          priorities: ['Low'],
          statuses: ['New'],
          taskcategoryid: 0,
          taskids: [0],
          title: 'title',
          type: 'ContactRequest',
          unitagreementid: 0,
          unitid: 0,
          vendorids: [0],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
