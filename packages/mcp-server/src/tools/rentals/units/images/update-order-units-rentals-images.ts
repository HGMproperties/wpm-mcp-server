// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.units.images',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/rentals/units/{unitId}/images/order',
  operationId: 'ExternalApiRentalUnitImageOrder_ReorderRentalUnitImages',
};

export const tool: Tool = {
  name: 'update_order_units_rentals_images',
  description:
    'Updates the image display order within the Buildium web application and in any associated rental listings.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      unitId: {
        type: 'integer',
      },
      Ids: {
        type: 'array',
        description: 'Unique identifiers for the images. The request must contain the ids of all images.',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { unitId, ...body } = args as any;
  return asTextContentResult(await client.rentals.units.images.updateOrder(unitId, body));
};

export default { metadata, tool, handler };
