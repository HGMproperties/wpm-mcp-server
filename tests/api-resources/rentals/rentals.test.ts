// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rentals', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.rentals.create({
      Address: { AddressLine1: 'x', Country: 'Afghanistan', PostalCode: 'x' },
      Name: 'x',
      OperatingBankAccountId: 0,
      RentalSubType: 'CondoTownhome',
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
    const response = await client.rentals.create({
      Address: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      Name: 'x',
      OperatingBankAccountId: 0,
      RentalSubType: 'CondoTownhome',
      PropertyManagerId: 0,
      RentalOwnerIds: [0],
      Reserve: 0,
      StructureDescription: 'StructureDescription',
      Units: [
        {
          Address: {
            AddressLine1: 'x',
            Country: 'Afghanistan',
            PostalCode: 'x',
            AddressLine2: 'AddressLine2',
            AddressLine3: 'AddressLine3',
            City: 'City',
            State: 'State',
          },
          UnitNumber: 'x',
          Description: 'Description',
          MarketRent: 0,
          UnitBathrooms: 'NotSet',
          UnitBedrooms: 'NotSet',
          UnitSize: 0,
        },
      ],
      YearBuilt: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.rentals.retrieve(0);
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
    const responsePromise = client.rentals.update(0, {
      Address: { AddressLine1: 'x', Country: 'Afghanistan', PostalCode: 'x' },
      Name: 'x',
      OperatingBankAccountId: 0,
      RentalSubType: 'CondoTownhome',
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
    const response = await client.rentals.update(0, {
      Address: {
        AddressLine1: 'x',
        Country: 'Afghanistan',
        PostalCode: 'x',
        AddressLine2: 'AddressLine2',
        AddressLine3: 'AddressLine3',
        City: 'City',
        State: 'State',
      },
      Name: 'x',
      OperatingBankAccountId: 0,
      RentalSubType: 'CondoTownhome',
      PropertyManagerId: 0,
      Reserve: 0,
      StructureDescription: 'StructureDescription',
      YearBuilt: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.rentals.list();
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
      client.rentals.list(
        {
          lastupdatedfrom: '2019-12-27T18:11:19.117Z',
          lastupdatedto: '2019-12-27T18:11:19.117Z',
          limit: 0,
          location: 'location',
          offset: 0,
          orderby: 'orderby',
          propertyids: [0],
          rentalownerids: [0],
          status: 'Active',
          subtypes: ['CondoTownhome'],
          types: ['Residential'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('inactivate', async () => {
    const responsePromise = client.rentals.inactivate(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('reactivate', async () => {
    const responsePromise = client.rentals.reactivate(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
