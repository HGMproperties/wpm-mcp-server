// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applications.charges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/applications/{applicationId}/charges/{transactionId}',
  operationId: 'ExternalApiApplicationLedgerCharges_GetApplicationLedgerChargeById',
};

export const tool: Tool = {
  name: 'retrieve_applications_charges',
  description:
    'Retrieves a specific application charge.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      applicationId: {
        type: 'integer',
      },
      transactionId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { transactionId, ...body } = args as any;
  return asTextContentResult(await client.applications.charges.retrieve(transactionId, body));
};

export default { metadata, tool, handler };
