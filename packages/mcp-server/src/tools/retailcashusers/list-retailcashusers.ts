// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'retailcashusers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/retailcashusers',
  operationId: 'ExternalApiRetailCashRead_GetRetailCashUsers',
};

export const tool: Tool = {
  name: 'list_retailcashusers',
  description:
    'Retrieves all retail cash users.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`\r\n            OR\r\n            <span class="permissionBlock"> Associations > Association owners and tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      entityid: {
        type: 'integer',
        description:
          'Filters results to any users associated with the specified entity id value. The value must be of the type specified in the `EntityType` field.',
      },
      entitytype: {
        type: 'string',
        description:
          'Specifies the type of entity that the `EntityId` field refers to. This field is required if the `EntityId` field is provided.',
        enum: ['Rental', 'RentalOwner', 'Association'],
      },
      isaccountcreated: {
        type: 'boolean',
        description: 'Filters results to any users whose retail cash account is created.',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      name: {
        type: 'string',
        description: 'Filters results to any users whose name *contains* the specified value.',
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
      statuses: {
        type: 'array',
        description: 'Filters results to any users whose lease is in one of the provided statuses.',
        items: {
          type: 'string',
          enum: ['Active', 'Past', 'Future'],
        },
      },
      unitaddress: {
        type: 'string',
        description: 'Filters results to any users whose unit address *contains* the specified value.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.retailcashusers.list(body));
};

export default { metadata, tool, handler };
