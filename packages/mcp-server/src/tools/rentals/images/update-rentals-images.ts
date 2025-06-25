// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.images',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/rentals/{propertyId}/images/{imageId}',
  operationId: 'ExternalApiRentalImages_UpdateRentalImage',
};

export const tool: Tool = {
  name: 'update_rentals_images',
  description:
    'Updates a rental property image.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      propertyId: {
        type: 'integer',
      },
      imageId: {
        type: 'integer',
      },
      ShowInListing: {
        type: 'boolean',
        description: 'Indicates whether the image will be shown in listings for this rental.',
      },
      Description: {
        type: 'string',
        description: 'Description of the image. The description cannot exceed 100 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { imageId, ...body } = args as any;
  return asTextContentResult(await client.rentals.images.update(imageId, body));
};

export default { metadata, tool, handler };
