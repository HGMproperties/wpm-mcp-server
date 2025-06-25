// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.images',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/rentals/{propertyId}/images/{imageId}/downloadrequests',
  operationId: 'ExternalApiRentalImageDownloadRequests_GetRentalImageDownloadUrlById',
};

export const tool: Tool = {
  name: 'download_requests_rentals_images',
  description:
    'Use this endpoint to create a temporary URL that can be used to download a property image. This URL expires after 5 minutes.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`',
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
  return asTextContentResult(await client.rentals.images.downloadRequests(imageId, body));
};

export default { metadata, tool, handler };
