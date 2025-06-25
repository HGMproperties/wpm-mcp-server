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
  httpPath: '/v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}/finalizerequest',
  operationId: 'ExternalApiBankAccountReconciliationFinalize_FinalizeReconciliation',
};

export const tool: Tool = {
  name: 'finalize_bankaccounts_reconciliations',
  description:
    'Finalizes a manual reconciliation. Reconciliations can only be finalized for bank accounts that are not linked externally.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`',
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
  await client.bankaccounts.reconciliations.finalize(reconciliationId, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
