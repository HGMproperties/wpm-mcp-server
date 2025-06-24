// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.epaysettings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rentals/{propertyId}/epaysettings',
  operationId: 'ExternalApiRentalEpaySettings_GetEPaySettingsForRentalProperty',
};

export const tool: Tool = {
  name: 'list_rentals_epaysettings',
  description:
    'Retrieves ePay settings for a rental property.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`',
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
  return asTextContentResult(await client.rentals.epaysettings.list(propertyId));
};

export default { metadata, tool, handler };
