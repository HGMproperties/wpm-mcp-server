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
  httpPath: '/v1/associations/ownershipaccounts',
  operationId: 'ExternalApiOwnershipAccounts_GetAllOwnershipAccounts',
};

export const tool: Tool = {
  name: 'list_associations_ownershipaccounts',
  description:
    'Retrieves a list of ownership accounts.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      associationids: {
        type: 'array',
        description:
          'Filters results to any ownership accounts who belong to the specified set of association ids.',
        items: {
          type: 'integer',
        },
      },
      datefrom: {
        type: 'string',
        description:
          'Filters results to any ownership account whose start date is greater than or equal to the specified value.',
        format: 'date',
      },
      dateto: {
        type: 'string',
        description:
          'Filters results to any ownership account whose start date is less than or equal to the specified value.',
        format: 'date',
      },
      delinquencystatuses: {
        type: 'array',
        description:
          'Filters results by the delinquency status of the ownership account. If no status is specified, ownership accounts of any delinquency status will be returned.',
        items: {
          type: 'string',
          enum: ['NoDelinquency', 'InCollections', 'InForeclosure', 'Foreclosed'],
        },
      },
      ids: {
        type: 'array',
        description: 'Filters results to the specified set of ids.',
        items: {
          type: 'integer',
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
      status: {
        type: 'array',
        description:
          'Filters results by the status of the association. If no status is specified, `active`, `past` and `future` associations will be returned.',
        items: {
          type: 'string',
          description: 'Indicates the status of a lease term.',
          enum: ['Active', 'Past', 'Future'],
        },
      },
      unitorowner: {
        type: 'string',
        description: 'Filters results to any association whose unit or owner *contains* the specified value.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.associations.ownershipaccounts.list(body));
};

export default { metadata, tool, handler };
