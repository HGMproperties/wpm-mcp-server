// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.transfers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankaccounts/{bankAccountId}/transfers/{transferId}',
  operationId: 'ExternalApiBankAccountTransfers_GetBankAccountTransferById',
};

export const tool: Tool = {
  name: 'retrieve_bankaccounts_transfers',
  description:
    'Retrieves a bank account transfer.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      transferId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { transferId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.transfers.retrieve(transferId, body));
};

export default { metadata, tool, handler };
