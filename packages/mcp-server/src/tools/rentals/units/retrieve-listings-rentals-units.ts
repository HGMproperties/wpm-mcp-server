// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.units',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rentals/units/listings',
  operationId: 'ExternalApiListings_GetListingsAsync',
};

export const tool: Tool = {
  name: 'retrieve_listings_rentals_units',
  description:
    'Retrieves all listings.\r\n\r\n\r\n<span class="permissionBlock">Rentals > Listings</span> - `View`\r\n\r\n<span class="permissionBlock">Rentals > Rental properties and units</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      entityid: {
        type: 'integer',
        description:
          'Filters results to only listings that are associated with the specified entity id value. The id must be of the type specified in `EntityType` property.',
      },
      entitytype: {
        type: 'string',
        description: 'Specifies the type of entity that `EntityId` refers to.',
        enum: ['Property', 'RentalOwner'],
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
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.rentals.units.retrieveListings(body));
};

export default { metadata, tool, handler };
