// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.appliances.servicehistory',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rentals/appliances/{applianceId}/servicehistory/{serviceHistoryId}',
  operationId: 'ExternalApiRentalApplianceServiceHistory_GetRentalApplianceServiceHistoryById',
};

export const tool: Tool = {
  name: 'retrieve_appliances_rentals_servicehistory',
  description:
    'Retrieves a specific service history record for a given appliance.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      applianceId: {
        type: 'integer',
      },
      serviceHistoryId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { serviceHistoryId, ...body } = args as any;
  return asTextContentResult(await client.rentals.appliances.servicehistory.retrieve(serviceHistoryId, body));
};

export default { metadata, tool, handler };
