// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.owners',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rentals/owners',
  operationId: 'ExternalApiRentalOwners_GetRentalOwners',
};

export const tool: Tool = {
  name: 'list_rentals_owners',
  description:
    'Retrieves a list of rental owners.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      agreementdaysremaining: {
        type: 'integer',
        description: 'Filters results by the days remaining on their lease agreement.',
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any rental owners that were updated on or after the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any rental owners that were updated on or before the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
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
      ownername: {
        type: 'string',
        description: 'Filters results to any owner whose name *contains* the specified value.',
      },
      phone: {
        type: 'string',
        description:
          'Filters results to any owner who has a phone number that *contains* the specified value.',
      },
      propertyids: {
        type: 'array',
        description: 'Filters results to any lease whose unit belongs to the specified set of property ids.',
        items: {
          type: 'integer',
        },
      },
      status: {
        type: 'string',
        description:
          'Filters results by the status of the user. If no status is specified both `active` and `inactive` users will be returned.',
        enum: ['Inactive', 'Active'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.rentals.owners.list(body));
};

export default { metadata, tool, handler };
