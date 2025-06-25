// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.reconciliations.balances',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}/balances',
  operationId: 'ExternalApiBankAccountReconciliationsRead_GetReconciliationBalanceById',
};

export const tool: Tool = {
  name: 'list_reconciliations_bankaccounts_balances',
  description:
    'Retrieves a bank account reconciliation\'s balance. Reconciliation balances can only be retrieved for bank accounts that are not linked externally.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`',
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
  return asTextContentResult(await client.bankaccounts.reconciliations.balances.list(reconciliationId, body));
};

export default { metadata, tool, handler };
