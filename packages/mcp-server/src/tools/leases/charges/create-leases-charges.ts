// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.charges',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/leases/{leaseId}/charges',
  operationId: 'ExternalApiLeaseLedgerChargesWrite_CreateCharge',
};

export const tool: Tool = {
  name: 'create_leases_charges',
  description:
    'Creates a charge transaction on a specific lease ledger.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`\r\n\r\n<span class="permissionBlock">Accounting > Bills</span> - `View` `Edit` In order to associate the charge to a bill using the BillId property, you must have this permission.',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      BillId: {
        type: 'integer',
        description:
          'Unique identifier of the bill this charge is associated to. If provided, the property of the lease the\r\ncharge is being created in must be in at least one line item of the bill.',
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
          $ref: '#/$defs/lease_charge_line',
        },
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the charge. The value cannot exceed 65 characters.',
      },
    },
    $defs: {
      lease_charge_line: {
        type: 'object',
        description: 'This is an object that represents a line item on a lease charge',
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
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.charges.create(leaseId, body));
};

export default { metadata, tool, handler };
