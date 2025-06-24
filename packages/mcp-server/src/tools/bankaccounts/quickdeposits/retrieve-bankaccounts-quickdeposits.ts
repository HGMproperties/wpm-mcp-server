// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.quickdeposits',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankaccounts/{bankAccountId}/quickdeposits/{quickDepositId}',
  operationId: 'ExternalApiBankAccountQuickDeposits_GetQuickDepositById',
};

export const tool: Tool = {
  name: 'retrieve_bankaccounts_quickdeposits',
  description:
    'Retrieves a quick deposit.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      quickDepositId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { quickDepositId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.quickdeposits.retrieve(quickDepositId, body));
};

export default { metadata, tool, handler };
