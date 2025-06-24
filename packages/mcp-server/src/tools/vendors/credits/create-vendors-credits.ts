// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'vendors.credits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vendors/{vendorId}/credits',
  operationId: 'ExternalApiVendorCreditsWrite_CreateVendorCredit',
};

export const tool: Tool = {
  name: 'create_vendors_credits',
  description:
    'Creates a credit.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      vendorId: {
        type: 'integer',
      },
      EntryDate: {
        type: 'string',
        description: 'Date the vendor credit was made. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description:
          'A collection of line items associated with the vendor credit. At least one line item is required and cannot exceed 100 line items.',
        items: {
          type: 'object',
          properties: {
            AccountingEntity: {
              $ref: '#/$defs/accounting_entity_save',
            },
            Amount: {
              type: 'number',
              description: 'Amount of the vendor credit line item. Must be between 0.01 and 9999999.99.',
            },
            GLAccountId: {
              type: 'integer',
              description:
                'Unique identifier of the general ledger account associated with the vendor credit. The account cannot be a bank account.',
            },
            Memo: {
              type: 'string',
              description: 'Memo for the vendor credit line item. Cannot exceed 240 characters.',
            },
          },
          required: ['AccountingEntity', 'Amount', 'GLAccountId'],
        },
      },
      Memo: {
        type: 'string',
        description:
          'Memo associated with the vendor credit, if applicable. The value cannot exceed 40 characters.',
      },
      ReferenceNumber: {
        type: 'string',
        description:
          'The invoice or reference number that the vendor assigned to the credit. The value cannot exceed 40 characters.',
      },
    },
    $defs: {
      accounting_entity_save: {
        type: 'object',
        description: 'Object to represent an Accounting Entity',
        properties: {
          AccountingEntityType: {
            type: 'string',
            description: 'The type of the accounting entity',
            enum: ['Association', 'Rental', 'Company'],
          },
          Id: {
            type: 'integer',
            description: 'The unique identifier of the accounting entity',
          },
          UnitId: {
            type: 'integer',
            description: 'The unit unique identifier for the accounting entity.',
          },
        },
        required: ['AccountingEntityType', 'Id'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { vendorId, ...body } = args as any;
  return asTextContentResult(await client.vendors.credits.create(vendorId, body));
};

export default { metadata, tool, handler };
