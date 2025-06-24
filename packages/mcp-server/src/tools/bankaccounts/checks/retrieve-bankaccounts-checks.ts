// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.checks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankaccounts/{bankAccountId}/checks/{checkId}',
  operationId: 'ExternalApiBankAccountChecks_GetCheckForBankAccount',
};

export const tool: Tool = {
  name: 'retrieve_bankaccounts_checks',
  description:
    'Retrieves a bank account check.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`\r\n            \r\n<span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      checkId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { checkId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.checks.retrieve(checkId, body));
};

export default { metadata, tool, handler };
