// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.rent',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/leases/{leaseId}/rent/{rentId}',
  operationId: 'ExternalApiLeaseRent_UpdateRentSchedule',
};

export const tool: Tool = {
  name: 'update_leases_rent',
  description:
    'Updates a rent schedule.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      rentId: {
        type: 'integer',
      },
      BackdateCharges: {
        type: 'boolean',
        description:
          'Indicates if charges that should have posted prior to the date of Rent creation should be posted immediately with the appropriate dates.',
      },
      Charges: {
        type: 'array',
        description: 'List of charges to apply to the lease.',
        items: {
          type: 'object',
          properties: {
            Amount: {
              type: 'number',
              description: 'The amount of the rent charge.',
            },
            GlAccountId: {
              type: 'integer',
              description: 'The general ledger account identifier under which to record the rent charge.',
            },
            NextDueDate: {
              type: 'string',
              description:
                'Indicates the next date the rent charge will be applied. This date will also be used as the start date for the calculating the `Cycle` of when to apply the next charge. The date must be formatted as YYYY-MM-DD.',
              format: 'date',
            },
            Memo: {
              type: 'string',
              description: 'Memo for the rent charge.',
            },
            PostDaysInAdvance: {
              type: 'integer',
              description: 'Number of days in advance of the due date to post the rent charge',
            },
          },
          required: ['Amount', 'GlAccountId', 'NextDueDate'],
        },
      },
      RentCycle: {
        type: 'string',
        description: 'Indicates the cadence of when rent charges will be applied.',
        enum: [
          'Monthly',
          'Weekly',
          'Every2Weeks',
          'Quarterly',
          'Yearly',
          'Every2Months',
          'Daily',
          'Every6Months',
        ],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { rentId, ...body } = args as any;
  return asTextContentResult(await client.leases.rent.update(rentId, body));
};

export default { metadata, tool, handler };
