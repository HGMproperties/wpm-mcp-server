// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'glaccounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/glaccounts/{glAccountId}',
  operationId: 'ExternalApiGeneralLedgerAccounts_GetGlAccountById',
};

export const tool: Tool = {
  name: 'retrieve_glaccounts',
  description:
    'Retrieves a specific general ledger account.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      glAccountId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { glAccountId, ...body } = args as any;
  return asTextContentResult(await client.glaccounts.retrieve(glAccountId));
};

export default { metadata, tool, handler };
