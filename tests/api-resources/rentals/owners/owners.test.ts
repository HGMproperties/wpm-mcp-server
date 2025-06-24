// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource owners', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.rentals.owners.create({
      Address: { AddressLine1: 'x', Country: 'Afghanistan', PostalCode: 'x' },
      IsCompany: true,
      PropertyIds: [0],
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
    const response = await client.rentals.owners.create({
      Address: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      IsCompany: true,
      PropertyIds: [0],
      AlternateEmail: 'AlternateEmail',
      Comment: 'Comment',
      CompanyName: 'CompanyName',
      DateOfBirth: '2019-12-27',
      Email: 'Email',
      FirstName: 'FirstName',
      LastName: 'LastName',
      ManagementAgreementEndDate: '2019-12-27',
      ManagementAgreementStartDate: '2019-12-27',
      PhoneNumbers: { Fax: 'Fax', Home: 'Home', Mobile: 'Mobile', Work: 'Work' },
      TaxInformation: {
        Address: {
          AddressLine1: 'x',
          Country: 'Afghanistan',
          PostalCode: 'x',
          AddressLine2: 'AddressLine2',
          AddressLine3: 'AddressLine3',
          City: 'City',
          State: 'State',
        },
        TaxPayerId: 'TaxPayerId',
        TaxPayerName1: 'TaxPayerName1',
        TaxPayerName2: 'TaxPayerName2',
        TaxPayerType: 'SSN',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.rentals.owners.retrieve(0);
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
    const responsePromise = client.rentals.owners.update(0, {
      Address: { AddressLine1: 'x', Country: 'Afghanistan', PostalCode: 'x' },
      IsCompany: true,
      PropertyIds: [0],
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
    const response = await client.rentals.owners.update(0, {
      Address: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      IsCompany: true,
      PropertyIds: [0],
      AlternateEmail: 'AlternateEmail',
      Comment: 'Comment',
      CompanyName: 'CompanyName',
      DateOfBirth: '2019-12-27',
      Email: 'Email',
      FirstName: 'FirstName',
      LastName: 'LastName',
      ManagementAgreementEndDate: '2019-12-27',
      ManagementAgreementStartDate: '2019-12-27',
      PhoneNumbers: { Fax: 'Fax', Home: 'Home', Mobile: 'Mobile', Work: 'Work' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.rentals.owners.list();
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
      client.rentals.owners.list(
        {
          agreementdaysremaining: 0,
          lastupdatedfrom: '2019-12-27T18:11:19.117Z',
          lastupdatedto: '2019-12-27T18:11:19.117Z',
          limit: 0,
          offset: 0,
          orderby: 'orderby',
          ownername: 'ownername',
          phone: 'phone',
          propertyids: [0],
          status: 'Inactive',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
