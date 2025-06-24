// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bills.files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bills/{billId}/files/{fileId}/downloadrequest',
  operationId: 'ExternalApiBillFileDownloadRequests_DownloadBillFile',
};

export const tool: Tool = {
  name: 'download_bills_files',
  description:
    'Downloads a specific file associated to the bill.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      billId: {
        type: 'integer',
      },
      fileId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { fileId, ...body } = args as any;
  return asTextContentResult(await client.bills.files.download(fileId, body));
};

export default { metadata, tool, handler };
