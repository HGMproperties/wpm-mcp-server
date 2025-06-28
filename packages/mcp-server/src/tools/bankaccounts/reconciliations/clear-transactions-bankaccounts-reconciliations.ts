// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.reconciliations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}/cleartransactionsrequest',
  operationId: 'ExternalApiBankAccountReconciliationsWrite_ClearTransactions',
};

export const tool: Tool = {
  name: 'clear_transactions_bankaccounts_reconciliations',
  description:
    'Clears transactions for a reconciliation. Reconciliation transactions can only be cleared for bank accounts that are not linked externally.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      reconciliationId: {
        type: 'integer',
      },
      TransactionIds: {
        type: 'array',
        description: 'The transaction identifiers to clear for the reconciliation',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { reconciliationId, ...body } = args as any;
  const response = await client.bankaccounts.reconciliations
    .clearTransactions(reconciliationId, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
