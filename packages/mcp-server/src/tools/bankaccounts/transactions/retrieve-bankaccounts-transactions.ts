// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.transactions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankaccounts/{bankAccountId}/transactions/{transactionId}',
  operationId: 'ExternalApiBankAccountTransactions_GetBankAccountTransactionById',
};

export const tool: Tool = {
  name: 'retrieve_bankaccounts_transactions',
  description:
    'Retrieves a specific bank account transaction.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Account</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
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
  return asTextContentResult(await client.bankaccounts.transactions.retrieve(transactionId, body));
};

export default { metadata, tool, handler };
