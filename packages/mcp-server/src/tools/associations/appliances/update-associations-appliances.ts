// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.appliances',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/associations/appliances/{applianceId}',
  operationId: 'ExternalApiAssociationAppliances_UpdateAssociationAppliance',
};

export const tool: Tool = {
  name: 'update_associations_appliances',
  description:
    'Updates an association appliance.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      applianceId: {
        type: 'integer',
      },
      Name: {
        type: 'string',
        description: 'The name of the association appliance. The name cannot exceed 100 characters.',
      },
      Description: {
        type: 'string',
        description:
          'The description of the association appliance. The description cannot exceed 500 characters.',
      },
      Make: {
        type: 'string',
        description: 'The make of the association appliance. The make cannot exceed 30 characters.',
      },
      Model: {
        type: 'string',
        description: 'The model of the association appliance. The model cannot exceed 30 characters.',
      },
      UnitId: {
        type: 'integer',
        description:
          'The unit identifier the association appliance belongs to. Must be within the association property the appliance is in.',
      },
      WarrantyEndDate: {
        type: 'string',
        description:
          "The end date for the association appliance's warranty. The warranty's end date cannot be before the installed date, if it exists. Must be formatted as `YYYY-MM-DD`.",
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applianceId, ...body } = args as any;
  return asTextContentResult(await client.associations.appliances.update(applianceId, body));
};

export default { metadata, tool, handler };
