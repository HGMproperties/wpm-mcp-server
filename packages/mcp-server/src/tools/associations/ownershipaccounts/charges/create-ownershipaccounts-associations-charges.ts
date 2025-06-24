// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.charges',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/charges',
  operationId: 'ExternalApiOwnershipAccountLedgerCharges_CreateCharge',
};

export const tool: Tool = {
  name: 'create_ownershipaccounts_associations_charges',
  description:
    'Creates a ledger charge.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`\r\n\r\n<span class="permissionBlock">Accounting > Bills</span> - `View` `Edit` In order to associate the charge to a bill using the BillId property, you must have this permission.',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
        type: 'integer',
      },
      Date: {
        type: 'string',
        description: 'Date of the charge. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description:
          'Collection of line items to be included in the charge. All existing line items will be deleted and replaced with the line items in this request. At least 1 line item is required.',
        items: {
          type: 'object',
          properties: {
            Amount: {
              type: 'number',
              description: 'Line item amount.',
            },
            GlAccountId: {
              type: 'integer',
              description:
                'The general ledger account identifier under which the line item amount will be recorded. The account must be a liability or income type.',
            },
          },
          required: ['Amount', 'GlAccountId'],
        },
      },
      BillId: {
        type: 'integer',
        description:
          'Unique identifier of the bill this charge is associated to. If provided, the property of the\r\nownership account ledger the charge is being created in must be in at least one line item of the bill.',
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the charge. The value cannot exceed 65 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { ownershipAccountId, ...body } = args as any;
  return asTextContentResult(
    await client.associations.ownershipaccounts.charges.create(ownershipAccountId, body),
  );
};

export default { metadata, tool, handler };
