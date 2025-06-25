// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.meterreadings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rentals/{propertyId}/meterreadings',
  operationId: 'ExternalApiRentalMeterReadingsRead_GetMeterReadingsForRental',
};

export const tool: Tool = {
  name: 'list_rentals_meterreadings',
  description:
    'Retrieves all meter readings for a rental property.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      propertyId: {
        type: 'integer',
      },
      readingdatefrom: {
        type: 'string',
        description:
          'Filters results to any meter readings whose entry date that is greater than or equal to the specified value. The value must be formatted as YYYY-MM-DD. The maximum date range is 365 days.',
        format: 'date',
      },
      readingdateto: {
        type: 'string',
        description:
          'Filters results to any meter readings whose entry date is less than or equal to the specified value. The value must be formatted as YYYY-MM-DD. The maximum date range is 365 days.',
        format: 'date',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      metertypes: {
        type: 'array',
        description: 'Filters results to the specified meter types.',
        items: {
          type: 'string',
          enum: ['Electric', 'Gas', 'Oil', 'Water', 'Sewer'],
        },
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
  const { propertyId, ...body } = args as any;
  return asTextContentResult(await client.rentals.meterreadings.list(propertyId, body));
};

export default { metadata, tool, handler };
