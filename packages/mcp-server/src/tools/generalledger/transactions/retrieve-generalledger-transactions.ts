// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'generalledger.transactions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/generalledger/transactions/{transactionId}',
  operationId: 'ExternalApiGeneralLedgerTransactions_GetTransactionById',
};

export const tool: Tool = {
  name: 'retrieve_generalledger_transactions',
  description:
    'Retrieves a specific general ledger transaction.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      transactionId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { transactionId, ...body } = args as any;
  return asTextContentResult(await client.generalledger.transactions.retrieve(transactionId));
};

export default { metadata, tool, handler };
