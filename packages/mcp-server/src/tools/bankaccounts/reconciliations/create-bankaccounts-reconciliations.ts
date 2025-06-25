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
  httpPath: '/v1/bankaccounts/{bankAccountId}/reconciliations',
  operationId: 'ExternalApiBankAccountPendingReconciliations_CreatePendingReconciliations',
};

export const tool: Tool = {
  name: 'create_bankaccounts_reconciliations',
  description:
    'Creates a reconciliation. Reconciliations can only be created for bank accounts that are not linked externally.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      EndingBalance: {
        type: 'number',
        description: 'Ending balance of the pending reconciliation.',
      },
      StatementEndingDate: {
        type: 'string',
        description:
          'End date for the reconciliation statement period. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      TotalChecksAndWithdrawals: {
        type: 'number',
        description: 'Sum of all checks and withdrawals for the reconciliation.',
      },
      TotalDepositsAndAdditions: {
        type: 'number',
        description: 'Sum of all deposits and additions for the reconciliation.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { bankAccountId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.reconciliations.create(bankAccountId, body));
};

export default { metadata, tool, handler };
