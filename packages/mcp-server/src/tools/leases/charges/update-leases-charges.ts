// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.charges',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/leases/{leaseId}/charges/{chargeId}',
  operationId: 'ExternalApiLeaseLedgerChargesWrite_UpdateLeaseCharge',
};

export const tool: Tool = {
  name: 'update_leases_charges',
  description:
    'Updates a charge.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
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
        description:
          'Collection of line items to be included in the charge. All existing line items will be deleted and replaced with the line items in this request. At least 1 line item is required.',
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
  const { chargeId, ...body } = args as any;
  return asTextContentResult(await client.leases.charges.update(chargeId, body));
};

export default { metadata, tool, handler };
