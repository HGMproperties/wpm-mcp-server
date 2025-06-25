// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.units.listingcontacts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rentals/units/listingcontacts/{listingContactId}',
  operationId: 'ExternalApiListingContacts_GetListingContactById',
};

export const tool: Tool = {
  name: 'retrieve_units_rentals_listingcontacts',
  description:
    'Retrieves a specific listing contact.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      listingContactId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { listingContactId, ...body } = args as any;
  return asTextContentResult(await client.rentals.units.listingcontacts.retrieve(listingContactId));
};

export default { metadata, tool, handler };
