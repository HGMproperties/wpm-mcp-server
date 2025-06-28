// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.units.listing',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/rentals/units/{unitId}/listing',
  operationId: 'ExternalApiListings_DelistUnit',
};

export const tool: Tool = {
  name: 'delete_all_units_rentals_listing',
  description:
    'Deleting a listing will immediately remove it from your Buildium public website. The listing will also be removed\r\nfrom any syndicated sites within 24-48 hours.\r\n\r\nListings manually created on craigslist using the Buildium\r\nguided tool will not be removed. The listing must be removed using craigslist\'s tools provided in your craigslist account.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View` `Edit` `Delete`',
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
  const response = await client.rentals.units.listing.deleteAll(unitId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
