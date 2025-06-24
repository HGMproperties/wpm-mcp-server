// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bills.files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bills/{billId}/files/{fileId}',
  operationId: 'ExternalApiBillsFiles_GetBillFileById',
};

export const tool: Tool = {
  name: 'retrieve_bills_files',
  description:
    'Retrieves the metadata for a specific file associated with the specified bill.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`',
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
  return asTextContentResult(await client.bills.files.retrieve(fileId, body));
};

export default { metadata, tool, handler };
