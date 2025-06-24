// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vendors', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.vendors.create({ CategoryId: 0, IsCompany: true });
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
    const response = await client.vendors.create({
      CategoryId: 0,
      IsCompany: true,
      AccountNumber: 'AccountNumber',
      Address: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      AlternateEmail: 'AlternateEmail',
      Comments: 'Comments',
      CompanyName: 'CompanyName',
      ExpenseGlAccountId: 0,
      FirstName: 'FirstName',
      LastName: 'LastName',
      PhoneNumbers: { Fax: 'Fax', Home: 'Home', Mobile: 'Mobile', Work: 'Work' },
      PrimaryEmail: 'PrimaryEmail',
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
      VendorInsurance: { ExpirationDate: '2019-12-27', PolicyNumber: 'PolicyNumber', Provider: 'Provider' },
      Website: 'Website',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.vendors.retrieve(0);
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
    const responsePromise = client.vendors.update(0, { CategoryId: 0, IsCompany: true });
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
    const response = await client.vendors.update(0, {
      CategoryId: 0,
      IsCompany: true,
      AccountNumber: 'AccountNumber',
      Address: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      AlternateEmail: 'AlternateEmail',
      Comments: 'Comments',
      CompanyName: 'CompanyName',
      ExpenseGlAccountId: 0,
      FirstName: 'FirstName',
      LastName: 'LastName',
      PhoneNumbers: { Fax: 'Fax', Home: 'Home', Mobile: 'Mobile', Work: 'Work' },
      PrimaryEmail: 'PrimaryEmail',
      TaxInformation: {
        IncludeIn1099: true,
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
      VendorInsurance: { ExpirationDate: '2019-12-27', PolicyNumber: 'PolicyNumber', Provider: 'Provider' },
      Website: 'Website',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.vendors.list();
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
      client.vendors.list(
        {
          email: 'email',
          insuranceexpiration: 'Expired',
          lastupdatedfrom: '2019-12-27T18:11:19.117Z',
          lastupdatedto: '2019-12-27T18:11:19.117Z',
          limit: 0,
          name: 'name',
          offset: 0,
          orderby: 'orderby',
          phone: 'phone',
          status: 'Inactive',
          website: 'website',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTransactions: only required params', async () => {
    const responsePromise = client.vendors.retrieveTransactions(0, {
      transactiondatefrom: '2019-12-27',
      transactiondateto: '2019-12-27',
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
  test.skip('retrieveTransactions: required and optional params', async () => {
    const response = await client.vendors.retrieveTransactions(0, {
      transactiondatefrom: '2019-12-27',
      transactiondateto: '2019-12-27',
      limit: 0,
      memo: 'memo',
      offset: 0,
      orderby: 'orderby',
      referencenumber: 'referencenumber',
      transactiontypes: ['Bill'],
    });
  });
});
