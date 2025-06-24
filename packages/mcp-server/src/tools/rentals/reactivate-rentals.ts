// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/rentals/{propertyId}/reactivationrequest',
  operationId: 'ExternalApiRentalsActiveStatus_ReactivateRentalProperty',
};

export const tool: Tool = {
  name: 'reactivate_rentals',
  description:
    'Reactivates a rental property and all associated units. Any inactive rental owners assigned to this property will also be reactivated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      propertyId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { propertyId, ...body } = args as any;
  await client.rentals.reactivate(propertyId);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
