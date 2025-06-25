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
  httpPath: '/v1/rentals/units/{unitId}/images/videolinkrequests',
  operationId: 'ExternalApiRentalUnitImageVideoLinkRequests_CreateUnitVideoLinkRequest',
};

export const tool: Tool = {
  name: 'video_link_requests_units_rentals_images',
  description:
    'Creates an image for a rental unit using a video link.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Properties and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      unitId: {
        type: 'integer',
      },
      ShowInListing: {
        type: 'boolean',
        description: 'Indicates whether the video will be shown in the listing.',
      },
      VideoUrl: {
        type: 'string',
        description:
          'The URL of the video. Only Youtube and Vimeo URLs are supported. The URL cannot exceed 255 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { unitId, ...body } = args as any;
  return asTextContentResult(await client.rentals.units.images.videoLinkRequests(unitId, body));
};

export default { metadata, tool, handler };
