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
  httpPath: '/v1/rentals/{propertyId}/inactivationrequest',
  operationId: 'ExternalApiRentalsActiveStatus_InactivateRentalProperty',
};

export const tool: Tool = {
  name: 'inactivate_rentals',
  description:
    'Inactivates a rental property and all associated units. Any associated property\'s owners that have no remaining active properties will be inactivated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`',
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
  const response = await client.rentals.inactivate(propertyId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
