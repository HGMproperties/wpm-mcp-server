// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.applieddeposits',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/applieddeposits/{depositId}',
  operationId: 'ExternalApiOwnershipAccountDepositWithholding_UpdateOwnershipAccountDepositWithholding',
};

export const tool: Tool = {
  name: 'update_ownershipaccounts_associations_applieddeposits',
  description:
    'Updates an ownership account deposit withholding.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`\r\n            <span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
        type: 'integer',
      },
      depositId: {
        type: 'integer',
      },
      DepositLiabilityGLAccountId: {
        type: 'integer',
        description:
          'The identifier of the liability general ledger account from which to withhold the funds.',
      },
      EntryDate: {
        type: 'string',
        description: 'Date of the deposit withholding. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description: 'Line items specifying the income accounts the deposit will be applied to.',
        items: {
          type: 'object',
          properties: {
            Amount: {
              type: 'number',
              description: 'Line item amount.',
            },
            GLAccountId: {
              type: 'integer',
              description:
                'General Ledger Account identifier under which the line item amount will be recorded. Must be an Income account.',
            },
          },
          required: ['Amount', 'GLAccountId'],
        },
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the withholding. Memo cannot exceed 65 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { depositId, ...body } = args as any;
  return asTextContentResult(
    await client.associations.ownershipaccounts.applieddeposits.update(depositId, body),
  );
};

export default { metadata, tool, handler };
