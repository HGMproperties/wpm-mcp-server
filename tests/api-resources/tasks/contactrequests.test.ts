// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contactrequests', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.tasks.contactrequests.create({
      AssignedToUserId: 0,
      ContactDetail: { FirstName: 'x' },
      Priority: 'Low',
      TaskStatus: 'New',
      Title: 'x',
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
    const response = await client.tasks.contactrequests.create({
      AssignedToUserId: 0,
      ContactDetail: {
        FirstName: 'x',
        Email: 'Email',
        LastName: 'LastName',
        PhoneNumbers: { Home: 'Home', Mobile: 'Mobile', Work: 'Work' },
      },
      Priority: 'Low',
      TaskStatus: 'New',
      Title: 'x',
      CategoryId: 0,
      Description: 'Description',
      DueDate: '2019-12-27',
      PropertyId: 0,
      SubCategoryId: 0,
      UnitId: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.tasks.contactrequests.retrieve(0);
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
    const responsePromise = client.tasks.contactrequests.update(0, {
      AssignedToUserId: 0,
      ContactDetail: { FirstName: 'x' },
      Priority: 'Low',
      TaskStatus: 'New',
      Title: 'x',
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
    const response = await client.tasks.contactrequests.update(0, {
      AssignedToUserId: 0,
      ContactDetail: {
        FirstName: 'x',
        Email: 'Email',
        LastName: 'LastName',
        PhoneNumbers: { Home: 'Home', Mobile: 'Mobile', Work: 'Work' },
      },
      Priority: 'Low',
      TaskStatus: 'New',
      Title: 'x',
      CategoryId: 0,
      DueDate: '2019-12-27',
      Message: 'Message',
      PropertyId: 0,
      SubCategoryId: 0,
      UnitId: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.tasks.contactrequests.list();
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
      client.tasks.contactrequests.list(
        {
          assignedtoid: 0,
          duedatefrom: '2019-12-27',
          duedateto: '2019-12-27',
          entityid: 0,
          entitytype: 'Rental',
          lastupdatedfrom: '2019-12-27',
          lastupdatedto: '2019-12-27',
          limit: 0,
          offset: 0,
          orderby: 'orderby',
          priorities: ['Low'],
          statuses: ['New'],
          taskcategoryid: 0,
          tasktitle: 'tasktitle',
          unitid: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
