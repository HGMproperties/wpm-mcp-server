// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.images',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/rentals/{propertyId}/images/{imageId}',
  operationId: 'ExternalApiRentalImages_DeleteRentalImage',
};

export const tool: Tool = {
  name: 'delete_rentals_images',
  description:
    'Deletes a rental property image.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit` `Delete`',
  inputSchema: {
    type: 'object',
    properties: {
      propertyId: {
        type: 'integer',
      },
      imageId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { imageId, ...body } = args as any;
  await client.rentals.images.delete(imageId, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
