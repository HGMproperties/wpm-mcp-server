// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.units.images',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/rentals/units/{unitId}/images/{imageId}',
  operationId: 'ExternalApiRentalUnitImages_DeleteRentalUnitImage',
};

export const tool: Tool = {
  name: 'delete_units_rentals_images',
  description:
    'Deletes a unit image.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit` `Delete`',
  inputSchema: {
    type: 'object',
    properties: {
      unitId: {
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
  const response = await client.rentals.units.images.delete(imageId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
