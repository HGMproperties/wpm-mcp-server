// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WpmMcpServer from 'wpm-mcp-server';

const client = new WpmMcpServer({
  clientID: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.tasks.history.files.retrieve(0, { taskId: 0, taskHistoryId: 0 });
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
    const response = await client.tasks.history.files.retrieve(0, { taskId: 0, taskHistoryId: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.tasks.history.files.list(0, { taskId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.tasks.history.files.list(0, {
      taskId: 0,
      limit: 0,
      offset: 0,
      orderby: 'orderby',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.tasks.history.files.delete(0, { taskId: 0, taskHistoryId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.tasks.history.files.delete(0, { taskId: 0, taskHistoryId: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('downloadReq: only required params', async () => {
    const responsePromise = client.tasks.history.files.downloadReq(0, { taskId: 0, taskHistoryId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('downloadReq: required and optional params', async () => {
    const response = await client.tasks.history.files.downloadReq(0, { taskId: 0, taskHistoryId: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('uploadReq: only required params', async () => {
    const responsePromise = client.tasks.history.files.uploadReq(0, { taskId: 0, FileName: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('uploadReq: required and optional params', async () => {
    const response = await client.tasks.history.files.uploadReq(0, { taskId: 0, FileName: 'x' });
  });
});
