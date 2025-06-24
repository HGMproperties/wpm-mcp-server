// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource journalentries', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.generalledger.journalentries.create({
      AccountingEntity: { AccountingEntityType: 'Association', Id: 0 },
      Date: '2019-12-27',
      Lines: [{ Amount: 0, GLAccountId: 0, PostingType: 'Credit' }],
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
    const response = await client.generalledger.journalentries.create({
      AccountingEntity: { AccountingEntityType: 'Association', Id: 0, UnitId: 0 },
      Date: '2019-12-27',
      Lines: [{ Amount: 0, GLAccountId: 0, PostingType: 'Credit', Memo: 'Memo' }],
      Memo: 'Memo',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.generalledger.journalentries.update(0, {
      AccountingEntity: { AccountingEntityType: 'Association', Id: 0 },
      Date: '2019-12-27',
      Lines: [{ Amount: 0, GLAccountId: 0, PostingType: 'Credit' }],
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
    const response = await client.generalledger.journalentries.update(0, {
      AccountingEntity: { AccountingEntityType: 'Association', Id: 0, UnitId: 0 },
      Date: '2019-12-27',
      Lines: [{ Amount: 0, GLAccountId: 0, PostingType: 'Credit', Memo: 'Memo' }],
      Memo: 'Memo',
    });
  });
});
