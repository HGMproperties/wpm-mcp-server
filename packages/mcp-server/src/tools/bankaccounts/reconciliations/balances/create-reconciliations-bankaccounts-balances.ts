// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.reconciliations.balances',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}/balances',
  operationId: 'ExternalApiBankAccountReconciliationsWrite_UpdateReconciliationBalances',
};

export const tool: Tool = {
  name: 'create_reconciliations_bankaccounts_balances',
  description:
    'Updates a bank account reconciliation\'s balance. Reconciliation balances can only be updated for bank accounts that are not linked externally.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      reconciliationId: {
        type: 'integer',
      },
      EndingBalance: {
        type: 'number',
        description: 'Ending balance of the reconciliation statement balance.',
      },
      TotalChecksAndWithdrawals: {
        type: 'number',
        description: 'Total amount of checks and withdrawals of the reconciliation statement balance.',
      },
      TotalDepositsAndAdditions: {
        type: 'number',
        description: 'Total amount of deposits and additions of the reconciliation statement balance.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { reconciliationId, ...body } = args as any;
  return asTextContentResult(
    await client.bankaccounts.reconciliations.balances.create(reconciliationId, body),
  );
};

export default { metadata, tool, handler };
