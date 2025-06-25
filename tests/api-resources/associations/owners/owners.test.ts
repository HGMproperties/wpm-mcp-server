// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource owners', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.associations.owners.create({
      FirstName: 'x',
      IsOwnerOccupied: true,
      LastName: 'x',
      OwnershipAccountId: 0,
      PrimaryAddress: { AddressLine1: 'x', Country: 'Afghanistan', PostalCode: 'x' },
      SendWelcomeEmail: true,
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
    const response = await client.associations.owners.create({
      FirstName: 'x',
      IsOwnerOccupied: true,
      LastName: 'x',
      OwnershipAccountId: 0,
      PrimaryAddress: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      SendWelcomeEmail: true,
      AlternateAddress: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      AlternateEmail: 'AlternateEmail',
      BoardMemberTerm: { BoardPositionType: 'President', EndDate: '2019-12-27', StartDate: '2019-12-27' },
      Comment: 'Comment',
      DateOfBirth: '2019-12-27',
      Email: 'Email',
      EmergencyContact: {
        Email: 'Email',
        Name: 'Name',
        Phone: 'Phone',
        RelationshipDescription: 'RelationshipDescription',
      },
      MailingPreference: 'PrimaryAddress',
      PhoneNumbers: { Fax: 'Fax', Home: 'Home', Mobile: 'Mobile', Work: 'Work' },
      TaxId: 'TaxId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.associations.owners.retrieve(0);
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
    const responsePromise = client.associations.owners.update(0, {
      FirstName: 'x',
      LastName: 'x',
      PrimaryAddress: { AddressLine1: 'x', Country: 'Afghanistan', PostalCode: 'x' },
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
    const response = await client.associations.owners.update(0, {
      FirstName: 'x',
      LastName: 'x',
      PrimaryAddress: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      AlternateAddress: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      AlternateEmail: 'AlternateEmail',
      Comment: 'Comment',
      Email: 'Email',
      EmergencyContact: {
        Email: 'Email',
        Name: 'Name',
        Phone: 'Phone',
        RelationshipDescription: 'RelationshipDescription',
      },
      MailingPreference: 'PrimaryAddress',
      PhoneNumbers: { Fax: 'Fax', Home: 'Home', Mobile: 'Mobile', Work: 'Work' },
      TaxId: 'TaxId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.associations.owners.list();
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
      client.associations.owners.list(
        {
          associationids: [0],
          createddatetimefrom: '2019-12-27T18:11:19.117Z',
          createddatetimeto: '2019-12-27T18:11:19.117Z',
          email: 'email',
          lastupdatedfrom: '2019-12-27T18:11:19.117Z',
          lastupdatedto: '2019-12-27T18:11:19.117Z',
          limit: 0,
          name: 'name',
          offset: 0,
          orderby: 'orderby',
          phone: 'phone',
          statuses: ['Active'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
