// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/ownershipaccounts/outstandingbalances',
  operationId: 'ExternalApiOwnershipAccountOutstandingBalances_GetOwnershipAccountOutstandingBalances',
};

export const tool: Tool = {
  name: 'retrieve_outstandingbalances_associations_ownershipaccounts',
  description:
    'Retrieves a list of ownership account outstanding balances.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Outstanding Balances</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      associationid: {
        type: 'integer',
        description: 'Association unique identifier',
      },
      balanceduration: {
        type: 'string',
        description: 'Duration of outstanding balances',
        enum: [
          'TotalBalance',
          'Balance0to30Days',
          'Balance31to60Days',
          'Balance61to90Days',
          'BalanceOver90Days',
        ],
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
      ownershipaccountids: {
        type: 'array',
        description: 'List of ownership account ids',
        items: {
          type: 'integer',
        },
      },
      ownershipaccountstatuses: {
        type: 'array',
        description: 'List of ownership account statuses',
        items: {
          type: 'string',
          enum: ['Active', 'Past', 'Future'],
        },
      },
      pastdueemail: {
        type: 'string',
        description: 'Status of notification of outstanding balances',
        enum: ['NoEmailAddress', 'Sent'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.associations.ownershipaccounts.retrieveOutstandingbalances(body));
};

export default { metadata, tool, handler };
