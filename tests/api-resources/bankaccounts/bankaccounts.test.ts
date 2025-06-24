// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bankaccounts', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.bankaccounts.create({
      BankAccountType: 'Checking',
      Country: 'Afghanistan',
      Name: 'x',
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
    const response = await client.bankaccounts.create({
      BankAccountType: 'Checking',
      Country: 'Afghanistan',
      Name: 'x',
      AccountNumber: 'AccountNumber',
      CheckPrintingInfo: {
        BankInformationLine1: 'BankInformationLine1',
        BankInformationLine2: 'BankInformationLine2',
        BankInformationLine3: 'BankInformationLine3',
        BankInformationLine4: 'BankInformationLine4',
        BankInformationLine5: 'BankInformationLine5',
        CheckLayoutType: 'Voucher1StubBottomMemo1Signature',
        CompanyInformationLine1: 'CompanyInformationLine1',
        CompanyInformationLine2: 'CompanyInformationLine2',
        CompanyInformationLine3: 'CompanyInformationLine3',
        CompanyInformationLine4: 'CompanyInformationLine4',
        CompanyInformationLine5: 'CompanyInformationLine5',
        EnableLocalCheckPrinting: true,
        EnableRemoteCheckPrinting: true,
        FractionalNumber: 'FractionalNumber',
        SignatureHeading: 'SignatureHeading',
      },
      Description: 'Description',
      RoutingNumber: 'RoutingNumber',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.bankaccounts.retrieve(0);
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
    const responsePromise = client.bankaccounts.update(0, {
      BankAccountType: 'Checking',
      CheckPrintingInfo: {
        CheckLayoutType: 'Voucher1StubBottomMemo1Signature',
        EnableLocalCheckPrinting: true,
        EnableRemoteCheckPrinting: true,
      },
      Country: 'Afghanistan',
      Name: 'x',
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
    const response = await client.bankaccounts.update(0, {
      BankAccountType: 'Checking',
      CheckPrintingInfo: {
        CheckLayoutType: 'Voucher1StubBottomMemo1Signature',
        EnableLocalCheckPrinting: true,
        EnableRemoteCheckPrinting: true,
        BankInformationLine1: 'BankInformationLine1',
        BankInformationLine2: 'BankInformationLine2',
        BankInformationLine3: 'BankInformationLine3',
        BankInformationLine4: 'BankInformationLine4',
        BankInformationLine5: 'BankInformationLine5',
        CompanyInformationLine1: 'CompanyInformationLine1',
        CompanyInformationLine2: 'CompanyInformationLine2',
        CompanyInformationLine3: 'CompanyInformationLine3',
        CompanyInformationLine4: 'CompanyInformationLine4',
        CompanyInformationLine5: 'CompanyInformationLine5',
        FractionalNumber: 'FractionalNumber',
        SignatureHeading: 'SignatureHeading',
      },
      Country: 'Afghanistan',
      Name: 'x',
      AccountNumber: 'AccountNumber',
      Description: 'Description',
      RoutingNumber: 'RoutingNumber',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.bankaccounts.list();
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
      client.bankaccounts.list(
        {
          bankaccountstatus: 'Active',
          bankname: 'bankname',
          limit: 0,
          offset: 0,
          orderby: 'orderby',
          routingnumbers: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveUndepositedFunds', async () => {
    const responsePromise = client.bankaccounts.retrieveUndepositedFunds(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveUndepositedFunds: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bankaccounts.retrieveUndepositedFunds(
        0,
        { limit: 0, offset: 0, orderby: 'orderby' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WpmMcpServer.NotFoundError);
  });
});
