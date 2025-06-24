// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.deposits',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankaccounts/{bankAccountId}/deposits/{depositId}',
  operationId: 'ExternalApiBankAccountDeposits_GetBankAccountDepositById',
};

export const tool: Tool = {
  name: 'retrieve_bankaccounts_deposits',
  description:
    'Retrieves a bank account deposit.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`\r\n            \r\n<span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for deposits associated with a Company) </span>',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      depositId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { depositId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.deposits.retrieve(depositId, body));
};

export default { metadata, tool, handler };
