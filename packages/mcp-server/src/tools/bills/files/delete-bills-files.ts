// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bills.files',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/bills/{billId}/files/{fileId}',
  operationId: 'ExternalApiBillsFiles_DeleteBillFile',
};

export const tool: Tool = {
  name: 'delete_bills_files',
  description:
    'Deletes the specified file from a bill. The file will be permanently deleted from the Buildium platform and can not be recovered.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit` `Delete`',
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
  const response = await client.bills.files.delete(fileId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
