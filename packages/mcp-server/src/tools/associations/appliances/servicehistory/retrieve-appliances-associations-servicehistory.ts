// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.appliances.servicehistory',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/appliances/{applianceId}/servicehistory/{serviceHistoryId}',
  operationId: 'ExternalApiAssociationApplianceServiceHistory_GetAssociationApplianceServiceHistoryById',
};

export const tool: Tool = {
  name: 'retrieve_appliances_associations_servicehistory',
  description:
    'Retrieves a specific service history record for a given appliance.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`',
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
  return asTextContentResult(
    await client.associations.appliances.servicehistory.retrieve(serviceHistoryId, body),
  );
};

export default { metadata, tool, handler };
