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
  httpPath: '/v1/rentals/owners/{rentalOwnerId}',
  operationId: 'ExternalApiRentalOwners_GetRentalOwnerById',
};

export const tool: Tool = {
  name: 'retrieve_rentals_owners',
  description:
    'Retrieves a specific rental owner.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      rentalOwnerId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { rentalOwnerId, ...body } = args as any;
  return asTextContentResult(await client.rentals.owners.retrieve(rentalOwnerId));
};

export default { metadata, tool, handler };
