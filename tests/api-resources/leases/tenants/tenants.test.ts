// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tenants', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.leases.tenants.create({
      Address: { AddressLine1: 'x', Country: 'Afghanistan', PostalCode: 'x' },
      FirstName: 'x',
      LastName: 'x',
      LeaseId: 0,
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
    const response = await client.leases.tenants.create({
      Address: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      FirstName: 'x',
      LastName: 'x',
      LeaseId: 0,
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
    const responsePromise = client.leases.tenants.retrieve(0);
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
    const responsePromise = client.leases.tenants.update(0, {
      Address: { AddressLine1: 'x', Country: 'Afghanistan', PostalCode: 'x' },
      FirstName: 'x',
      LastName: 'x',
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
    const response = await client.leases.tenants.update(0, {
      Address: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      FirstName: 'x',
      LastName: 'x',
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
  test.skip('retrieveAll', async () => {
    const responsePromise = client.leases.tenants.retrieveAll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.leases.tenants.retrieveAll(
        {
          buildingstatuses: ['Active'],
          email: 'email',
          lastupdatedfrom: '2019-12-27T18:11:19.117Z',
          lastupdatedto: '2019-12-27T18:11:19.117Z',
          leasetermstatuses: ['Active'],
          limit: 0,
          name: 'name',
          offset: 0,
          orderby: 'orderby',
          phone: 'phone',
          propertyids: [0],
          rentalownerids: [0],
          unitids: [0],
          unitnumber: 'unitnumber',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
