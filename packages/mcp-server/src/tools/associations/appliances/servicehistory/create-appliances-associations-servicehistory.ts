// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.appliances.servicehistory',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/appliances/{applianceId}/servicehistory',
  operationId: 'ExternalApiAssociationApplianceServiceHistory_CreateAssociationApplianceServiceHistory',
};

export const tool: Tool = {
  name: 'create_appliances_associations_servicehistory',
  description:
    'Creates a service history for an appliance.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      applianceId: {
        type: 'integer',
      },
      Date: {
        type: 'string',
        description: 'Date the service was performed. Must be formatted as `YYYY-MM-DD`.',
        format: 'date',
      },
      ServiceType: {
        type: 'string',
        description: 'Specifies the type of service that occured.',
        enum: ['Installed', 'Serviced', 'Uninstalled'],
      },
      Details: {
        type: 'string',
        description:
          'The service history details associated with the appliance. The description cannot exceed 100 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applianceId, ...body } = args as any;
  return asTextContentResult(await client.associations.appliances.servicehistory.create(applianceId, body));
};

export default { metadata, tool, handler };
