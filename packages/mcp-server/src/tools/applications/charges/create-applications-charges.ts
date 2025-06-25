// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applications.charges',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/applications/{applicationId}/charges',
  operationId: 'ExternalApiApplicationLedgerCharges_CreateApplicationLedgerCharge',
};

export const tool: Tool = {
  name: 'create_applications_charges',
  description:
    'Creates a charge on a specific application ledger.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      applicationId: {
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
          $ref: '#/$defs/charge_line_save',
        },
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the charge. The value cannot exceed 65 characters.',
      },
    },
    $defs: {
      charge_line_save: {
        type: 'object',
        description: 'This is an object that represents a line item on an application charge',
        properties: {
          Amount: {
            type: 'number',
            description: 'Line item amount.',
          },
          GLAccountId: {
            type: 'integer',
            description:
              'The general ledger account identifier under which the line item amount will be recorded.',
          },
          Memo: {
            type: 'string',
            description:
              'The general ledger account description under which the line item amount will be recorded. The value cannot exceed 245 characters',
          },
          ReferenceNumber: {
            type: 'string',
            description: 'Reference number for the line item. The value cannot exceed 30 characters.',
          },
        },
        required: ['Amount', 'GLAccountId'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applicationId, ...body } = args as any;
  return asTextContentResult(await client.applications.charges.create(applicationId, body));
};

export default { metadata, tool, handler };
