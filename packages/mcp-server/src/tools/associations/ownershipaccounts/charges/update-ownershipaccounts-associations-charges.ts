// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.charges',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/charges/{chargeId}',
  operationId: 'ExternalApiOwnershipAccountLedgerCharges_UpdateOwnershipAccountCharge',
};

export const tool: Tool = {
  name: 'update_ownershipaccounts_associations_charges',
  description:
    'Updates a charge.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`\r\n            \r\n',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
        type: 'integer',
      },
      chargeId: {
        type: 'integer',
      },
      Date: {
        type: 'string',
        description: 'Date of the charge. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description: 'A collection of line items included in the charge. At least one line item is required.',
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
                'The general ledger account identifier under which the line item amount will be recorded. The account must be a liability or income type.',
            },
            ReferenceNumber: {
              type: 'string',
              description:
                'Reference number associated with the charge. The value cannot exceed 30 characters.',
            },
          },
          required: ['Amount', 'GLAccountId'],
        },
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the charge. The value cannot exceed 65 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { chargeId, ...body } = args as any;
  return asTextContentResult(await client.associations.ownershipaccounts.charges.update(chargeId, body));
};

export default { metadata, tool, handler };
