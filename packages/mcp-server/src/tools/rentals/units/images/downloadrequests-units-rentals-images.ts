// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.units.images',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/rentals/units/{unitId}/images/{imageId}/downloadrequests',
  operationId: 'ExternalApiRentalUnitImageDownloadRequests_GetRentalUnitImageDownloadUrlById',
};

export const tool: Tool = {
  name: 'downloadrequests_units_rentals_images',
  description:
    'Use this endpoint to create a temporary URL that can be used to download a unit image. This URL expires after 5 minutes.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`',
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
  return asTextContentResult(await client.rentals.units.images.downloadrequests(imageId, body));
};

export default { metadata, tool, handler };
