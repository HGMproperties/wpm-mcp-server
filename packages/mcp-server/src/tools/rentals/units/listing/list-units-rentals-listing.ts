// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.units.listing',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rentals/units/{unitId}/listing',
  operationId: 'ExternalApiListings_GetListingForUnitAsync',
};

export const tool: Tool = {
  name: 'list_units_rentals_listing',
  description:
    'Retrieves a specific listing.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View`\r\n\r\n<span class="permissionBlock">Rentals > Rental properties and units</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      unitId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { unitId, ...body } = args as any;
  return asTextContentResult(await client.rentals.units.listing.list(unitId));
};

export default { metadata, tool, handler };
