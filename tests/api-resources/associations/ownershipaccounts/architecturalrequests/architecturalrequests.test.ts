// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource architecturalrequests', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.associations.ownershipaccounts.architecturalrequests.create({
      AssociationId: 0,
      Name: 'x',
      OwnershipAccountId: 0,
      SubmittedDateTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.associations.ownershipaccounts.architecturalrequests.create({
      AssociationId: 0,
      Name: 'x',
      OwnershipAccountId: 0,
      SubmittedDateTime: '2019-12-27T18:11:19.117Z',
      Decision: 'Pending',
      Status: 'New',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.associations.ownershipaccounts.architecturalrequests.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.associations.ownershipaccounts.architecturalrequests.list();
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
      client.associations.ownershipaccounts.architecturalrequests.list(
        {
          associationids: [0],
          createddatetimefrom: '2019-12-27T18:11:19.117Z',
          createddatetimeto: '2019-12-27T18:11:19.117Z',
          decisions: ['Pending'],
          ids: [0],
          lastupdatedfrom: '2019-12-27T18:11:19.117Z',
          lastupdatedto: '2019-12-27T18:11:19.117Z',
          limit: 0,
          offset: 0,
          orderby: 'orderby',
          ownershipaccountids: [0],
          statuses: ['New'],
          submitteddatetimefrom: '2019-12-27T18:11:19.117Z',
          submitteddatetimeto: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
