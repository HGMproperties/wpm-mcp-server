// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.meterreadings.summary',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rentals/{propertyId}/meterreadings/summary',
  operationId: 'ExternalApiRentalMeterReadingDetails_GetMeterReadingDetailsForRentalAsync',
};

export const tool: Tool = {
  name: 'list_meterreadings_rentals_summary',
  description:
    'Retrieves all meter reading details for a property.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      propertyId: {
        type: 'integer',
      },
      metertype: {
        type: 'string',
        description: 'Filters results to the specified meter type.',
        enum: ['Electric', 'Gas', 'Oil', 'Water', 'Sewer'],
      },
      readingdate: {
        type: 'string',
        description:
          'Filters results to any meter readings whose entry date is equal to the specified value. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { propertyId, ...body } = args as any;
  return asTextContentResult(await client.rentals.meterreadings.summary.list(propertyId, body));
};

export default { metadata, tool, handler };
