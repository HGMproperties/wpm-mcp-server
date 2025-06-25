// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource leases', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.leases.create({
      LeaseFromDate: '2019-12-27',
      LeaseType: 'Fixed',
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
    const response = await client.leases.create({
      LeaseFromDate: '2019-12-27',
      LeaseType: 'Fixed',
      SendWelcomeEmail: true,
      UnitId: 0,
      ApplicantIds: [0],
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
      ProratedFirstMonthRent: 0,
      ProratedLastMonthRent: 0,
      Rent: {
        Charges: [{ Amount: 0, GlAccountId: 0, NextDueDate: '2019-12-27', Memo: 'Memo' }],
        Cycle: 'Monthly',
      },
      SecurityDeposit: { Amount: 0, DueDate: '2019-12-27' },
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
  test.skip('retrieve', async () => {
    const responsePromise = client.leases.retrieve(0);
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
    const responsePromise = client.leases.update(0, {
      IsEvictionPending: true,
      LeaseFromDate: '2019-12-27',
      LeaseType: 'Fixed',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.leases.update(0, {
      IsEvictionPending: true,
      LeaseFromDate: '2019-12-27',
      LeaseType: 'Fixed',
      UnitId: 0,
      AutomaticallyMoveOutTenants: true,
      LeaseToDate: '2019-12-27',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.leases.list();
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
      client.leases.list(
        {
          createddatetimefrom: '2019-12-27T18:11:19.117Z',
          createddatetimeto: '2019-12-27T18:11:19.117Z',
          lastupdatedfrom: '2019-12-27T18:11:19.117Z',
          lastupdatedto: '2019-12-27T18:11:19.117Z',
          leasedatefrom: '2019-12-27',
          leasedateto: '2019-12-27',
          leasestatuses: ['Active'],
          leasetypes: ['None'],
          limit: 0,
          offset: 0,
          orderby: 'orderby',
          propertyids: [0],
          rentalownerids: [0],
          tenantname: 'tenantname',
          unitnumber: 'unitnumber',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('createAutoallocatedPayment: only required params', async () => {
    const responsePromise = client.leases.createAutoallocatedPayment(0, {
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
  test.skip('createAutoallocatedPayment: required and optional params', async () => {
    const response = await client.leases.createAutoallocatedPayment(0, {
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
  test.skip('createCredit: only required params', async () => {
    const responsePromise = client.leases.createCredit(0, {
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
  test.skip('createCredit: required and optional params', async () => {
    const response = await client.leases.createCredit(0, {
      CreditType: 'WaiveUnpaid',
      Date: '2019-12-27',
      Lines: [{ Amount: 0, GlAccountId: 0 }],
      Memo: 'Memo',
      OffsettingGLAccountId: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createPaymentReversal: only required params', async () => {
    const responsePromise = client.leases.createPaymentReversal(0, {
      EntryDate: '2019-12-27',
      PaymentTransactionId: 0,
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
  test.skip('createPaymentReversal: required and optional params', async () => {
    const response = await client.leases.createPaymentReversal(0, {
      EntryDate: '2019-12-27',
      PaymentTransactionId: 0,
      BankFee: { GLAccountId: 0, TotalAmount: 0 },
      NSFCharge: { GLAccountId: 0, TotalAmount: 0 },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listOutstandingBalances', async () => {
    const responsePromise = client.leases.listOutstandingBalances();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listOutstandingBalances: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.leases.listOutstandingBalances(
        {
          balanceduration: 'TotalBalance',
          entityid: 0,
          entitytype: 'Rental',
          evictionstatus: 'NotEvictionPending',
          leaseids: [0],
          leasestatuses: ['Active'],
          limit: 0,
          offset: 0,
          orderby: 'orderby',
          pastdueemail: 'NoEmailAddress',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listRenewalHistory', async () => {
    const responsePromise = client.leases.listRenewalHistory();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listRenewalHistory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.leases.listRenewalHistory(
        {
          createddatetimefrom: '2019-12-27T18:11:19.117Z',
          createddatetimeto: '2019-12-27T18:11:19.117Z',
          lastupdatedfrom: '2019-12-27T18:11:19.117Z',
          lastupdatedto: '2019-12-27T18:11:19.117Z',
          leaseids: [0],
          limit: 0,
          offset: 0,
          orderby: 'orderby',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
