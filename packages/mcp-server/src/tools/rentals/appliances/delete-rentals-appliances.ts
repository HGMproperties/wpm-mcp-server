// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.appliances',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/rentals/appliances/{applianceId}',
  operationId: 'ExternalApiRentalAppliances_DeleteRentalAppliances',
};

export const tool: Tool = {
  name: 'delete_rentals_appliances',
  description:
    'Deletes an appliance.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      applianceId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applianceId, ...body } = args as any;
  const response = await client.rentals.appliances.delete(applianceId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
