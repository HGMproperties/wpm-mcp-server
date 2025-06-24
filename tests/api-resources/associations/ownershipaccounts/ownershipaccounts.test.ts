// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ownershipaccounts', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.associations.ownershipaccounts.create({
      DateOfPurchase: '2019-12-27',
      ReplaceExistingOwnershipAccount: true,
      SendWelcomeEmail: true,
      UnitId: 0,
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
    const response = await client.associations.ownershipaccounts.create({
      DateOfPurchase: '2019-12-27',
      ReplaceExistingOwnershipAccount: true,
      SendWelcomeEmail: true,
      UnitId: 0,
      AssociationFee: 0,
      AssociationOwnerIds: [0],
      AssociationOwners: [
        {
          FirstName: 'x',
          IsOwnerOccupied: true,
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
        },
      ],
      RecurringFrequency: 'Monthly',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.associations.ownershipaccounts.retrieve(0);
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
    const responsePromise = client.associations.ownershipaccounts.update(0, { DateOfPurchase: '2019-12-27' });
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
    const response = await client.associations.ownershipaccounts.update(0, { DateOfPurchase: '2019-12-27' });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.associations.ownershipaccounts.list();
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
      client.associations.ownershipaccounts.list(
        {
          associationids: [0],
          datefrom: '2019-12-27',
          dateto: '2019-12-27',
          delinquencystatuses: ['NoDelinquency'],
          ids: [0],
          limit: 0,
          offset: 0,
          orderby: 'orderby',
          status: ['Active'],
          unitorowner: 'unitorowner',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('autoallocatedpayments: only required params', async () => {
    const responsePromise = client.associations.ownershipaccounts.autoallocatedpayments(0, {
      Date: '2019-12-27',
      PaymentMethod: 'Check',
      SendEmailReceipt: true,
      TotalAmount: 0,
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
  test.skip('autoallocatedpayments: required and optional params', async () => {
    const response = await client.associations.ownershipaccounts.autoallocatedpayments(0, {
      Date: '2019-12-27',
      PaymentMethod: 'Check',
      SendEmailReceipt: true,
      TotalAmount: 0,
      Memo: 'Memo',
      PayeeUserId: 0,
      ReferenceNumber: 'ReferenceNumber',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('credits: only required params', async () => {
    const responsePromise = client.associations.ownershipaccounts.credits(0, {
      CreditType: 'WaiveUnpaid',
      Date: '2019-12-27',
      Lines: [{ Amount: 0, GlAccountId: 0 }],
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
  test.skip('credits: required and optional params', async () => {
    const response = await client.associations.ownershipaccounts.credits(0, {
      CreditType: 'WaiveUnpaid',
      Date: '2019-12-27',
      Lines: [{ Amount: 0, GlAccountId: 0 }],
      Memo: 'Memo',
      OffsettingGLAccountId: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveOutstandingbalances', async () => {
    const responsePromise = client.associations.ownershipaccounts.retrieveOutstandingbalances();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveOutstandingbalances: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.associations.ownershipaccounts.retrieveOutstandingbalances(
        {
          associationid: 0,
          balanceduration: 'TotalBalance',
          limit: 0,
          offset: 0,
          orderby: 'orderby',
          ownershipaccountids: [0],
          ownershipaccountstatuses: ['Active'],
          pastdueemail: 'NoEmailAddress',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
