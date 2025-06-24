// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/outstandingbalances',
  operationId: 'ExternalApiLeaseOutstandingBalances_GetLeaseOutstandingBalances',
};

export const tool: Tool = {
  name: 'list_outstanding_balances_leases',
  description:
    'Retrieves a list of leases that have outstanding balances. Leases with a zero or credit balance will not be returned in the results. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Outstanding Balances</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      balanceduration: {
        type: 'string',
        enum: [
          'TotalBalance',
          'Balance0to30Days',
          'Balance31to60Days',
          'Balance61to90Days',
          'BalanceOver90Days',
        ],
      },
      entityid: {
        type: 'integer',
      },
      entitytype: {
        type: 'string',
        enum: ['Rental', 'RentalOwner'],
      },
      evictionstatus: {
        type: 'string',
        enum: ['NotEvictionPending', 'EvictionPending'],
      },
      leaseids: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
      leasestatuses: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['Active', 'Past', 'Future'],
        },
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      offset: {
        type: 'integer',
        description:
          '`offset` indicates the position of the first record to return. The `offset` is zero-based and the default is 0.',
      },
      orderby: {
        type: 'string',
        description:
          '`orderby` indicates the field(s) and direction to sort the results in the response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request Options</a> for more information.',
      },
      pastdueemail: {
        type: 'string',
        enum: ['NoEmailAddress', 'Sent'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.leases.listOutstandingBalances(body));
};

export default { metadata, tool, handler };
