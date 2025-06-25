// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rentals',
  operationId: 'ExternalApiRentals_GetAllRentals',
};

export const tool: Tool = {
  name: 'list_rentals',
  description:
    'Retrieves a list of rental properties.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any rental properties that were updated on or after the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any rental properties that were updated on or before the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      location: {
        type: 'string',
        description:
          'Filters results to only rental properties whose city or state *contains* the specified value.',
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
      propertyids: {
        type: 'array',
        description: 'Filters results to only rental properties units whose Rental matches the specified Id.',
        items: {
          type: 'integer',
        },
      },
      rentalownerids: {
        type: 'array',
        description:
          'Filters results to only rental properties whose RentalOwnerId matches the specified Id.',
        items: {
          type: 'integer',
        },
      },
      status: {
        type: 'string',
        description:
          'Filters results by the status of the rental property. If no status is specified both `active` and `inactive` rental properties will be returned.',
        enum: ['Active', 'InActive'],
      },
      subtypes: {
        type: 'array',
        description:
          'Filters results by the sub type of the rental property. If no sub type is specified all sub types will be returned.',
        items: {
          type: 'string',
          description: 'This enumeration represents the sub type of a building.',
          enum: [
            'CondoTownhome',
            'MultiFamily',
            'SingleFamily',
            'Industrial',
            'Office',
            'Retail',
            'ShoppingCenter',
            'Storage',
            'ParkingSpace',
          ],
        },
      },
      types: {
        type: 'array',
        description: 'Filters results by the rental type. If no type is provided all types will be returned.',
        items: {
          type: 'string',
          enum: ['Residential', 'Commercial'],
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.rentals.list(body));
};

export default { metadata, tool, handler };
