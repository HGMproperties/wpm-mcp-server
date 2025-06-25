// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.reconciliations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}',
  operationId: 'ExternalApiBankAccountReconciliationsRead_GetReconciliationById',
};

export const tool: Tool = {
  name: 'retrieve_bankaccounts_reconciliations',
  description:
    'Retrieves a bank account reconciliation. Reconciliations can only be retrieved for bank accounts that are not linked externally.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      reconciliationId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { reconciliationId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.reconciliations.retrieve(reconciliationId, body));
};

export default { metadata, tool, handler };
