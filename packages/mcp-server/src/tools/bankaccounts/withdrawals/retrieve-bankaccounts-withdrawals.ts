// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.withdrawals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankaccounts/{bankAccountId}/withdrawals/{withdrawalId}',
  operationId: 'ExternalApiBankAccountWithdrawals_GetBankAccountWithdrawalById',
};

export const tool: Tool = {
  name: 'retrieve_bankaccounts_withdrawals',
  description:
    'Retrieves a bank account withdrawal.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      withdrawalId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { withdrawalId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.withdrawals.retrieve(withdrawalId, body));
};

export default { metadata, tool, handler };
