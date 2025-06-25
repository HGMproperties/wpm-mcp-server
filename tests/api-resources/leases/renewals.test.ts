// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource renewals', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.leases.renewals.create(0, {
      LeaseType: 'Fixed',
      Rent: { Charges: [{ Amount: 0, GlAccountId: 0, NextDueDate: '2019-12-27' }], Cycle: 'Monthly' },
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
    const response = await client.leases.renewals.create(0, {
      LeaseType: 'Fixed',
      Rent: {
        Charges: [{ Amount: 0, GlAccountId: 0, NextDueDate: '2019-12-27', Memo: 'Memo' }],
        Cycle: 'Monthly',
      },
      SendWelcomeEmail: true,
      AutomaticallyMoveOutTenants: true,
      Cosigners: [
        {
          FirstName: 'x',
          LastName: 'x',
          Address: {
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
          Email: 'Email',
          MailingPreference: 'PrimaryAddress',
          PhoneNumbers: { Fax: 'Fax', Home: 'Home', Mobile: 'Mobile', Work: 'Work' },
        },
      ],
      LeaseToDate: '2019-12-27',
      RecurringChargesToCreate: [
        {
          Amount: 0,
          FirstOccurrenceDate: '2019-12-27',
          Frequency: 'Monthly',
          GLAccountId: 0,
          PostDaysInAdvance: 0,
          Duration: 'UntilEndOfTerm',
          Memo: 'Memo',
          NumberOfOccurrences: 0,
        },
      ],
      RecurringChargesToStop: [0],
      RecurringChargesToUpdate: [
        {
          Amount: 0,
          FirstOccurrenceDate: '2019-12-27',
          Frequency: 'Monthly',
          GLAccountId: 0,
          Id: 0,
          PostDaysInAdvance: 0,
          Duration: 'UntilEndOfTerm',
          Memo: 'Memo',
          NumberOfOccurrences: 0,
        },
      ],
      TenantIds: [0],
      Tenants: [
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
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.leases.renewals.retrieve(0, { leaseId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.leases.renewals.retrieve(0, { leaseId: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.leases.renewals.list(0);
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
      client.leases.renewals.list(
        0,
        { limit: 0, offset: 0, orderby: 'orderby' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listUpcoming: only required params', async () => {
    const responsePromise = client.leases.renewals.listUpcoming({ esignaturestatuses: ['Unknown'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listUpcoming: required and optional params', async () => {
    const response = await client.leases.renewals.listUpcoming({
      esignaturestatuses: ['Unknown'],
      limit: 0,
      offset: 0,
      orderby: 'orderby',
      propertyids: [0],
      rentalownerids: [0],
    });
  });
});
