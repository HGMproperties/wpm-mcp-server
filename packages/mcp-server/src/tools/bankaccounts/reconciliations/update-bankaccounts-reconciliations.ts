// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.reconciliations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}',
  operationId: 'ExternalApiBankAccountReconciliationsWrite_UpdateReconciliation',
};

export const tool: Tool = {
  name: 'update_bankaccounts_reconciliations',
  description:
    'Updates a reconciliation. Reconciliations can only be updated for bank accounts that are not linked externally.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      reconciliationId: {
        type: 'integer',
      },
      StatementEndingDate: {
        type: 'string',
        description: 'Date the reconciliation statement ended. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { reconciliationId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.reconciliations.update(reconciliationId, body));
};

export default { metadata, tool, handler };
