// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emails', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.communications.emails.retrieve(0);
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
    const responsePromise = client.communications.emails.list({
      sentdatetimefrom: '2019-12-27T18:11:19.117Z',
      sentdatetimeto: '2019-12-27T18:11:19.117Z',
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
    const response = await client.communications.emails.list({
      sentdatetimefrom: '2019-12-27T18:11:19.117Z',
      sentdatetimeto: '2019-12-27T18:11:19.117Z',
      limit: 0,
      offset: 0,
      orderby: 'orderby',
      recipientnameoremail: 'recipientnameoremail',
      senderuserid: 0,
      subject: 'subject',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRecipients', async () => {
    const responsePromise = client.communications.emails.retrieveRecipients(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRecipients: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.communications.emails.retrieveRecipients(
        0,
        { limit: 0, offset: 0, orderby: 'orderby' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('send: only required params', async () => {
    const responsePromise = client.communications.emails.send({
      ExcludeDelinquentRecipients: true,
      IncludeAlternateEmails: true,
      IncludeAssociationTenants: true,
      Subject: 'x',
      TemplateId: 0,
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
  test.skip('send: required and optional params', async () => {
    const response = await client.communications.emails.send({
      ExcludeDelinquentRecipients: true,
      IncludeAlternateEmails: true,
      IncludeAssociationTenants: true,
      Subject: 'x',
      TemplateId: 0,
      PropertyIds: [0],
      RecipientIds: [0],
    });
  });
});
