// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.appliances',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/appliances',
  operationId: 'ExternalApiAssociationAppliances_CreateAssociationAppliance',
};

export const tool: Tool = {
  name: 'create_associations_appliances',
  description:
    'Creates an association appliance.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      AssociationId: {
        type: 'integer',
        description: 'Association unique identifier that the appliance belongs to.',
      },
      Name: {
        type: 'string',
        description: 'The name of the appliance. The name cannot exceed 100 characters.',
      },
      Description: {
        type: 'string',
        description: 'The description of the appliance. The description cannot exceed 500 characters.',
      },
      InstallDate: {
        type: 'string',
        description: "The install date for the appliance's warranty. Must be formatted as `YYYY-MM-DD`.",
        format: 'date',
      },
      Make: {
        type: 'string',
        description: 'The make of the appliance. The make cannot exceed 30 characters.',
      },
      Model: {
        type: 'string',
        description: 'The model of the appliance. The model cannot exceed 30 characters.',
      },
      UnitId: {
        type: 'integer',
        description: 'Association unit unique identifier that the appliance belongs to.',
      },
      WarrantyEndDate: {
        type: 'string',
        description:
          "The end date for the appliance's warranty. The warranty's end date cannot be before the installed date, if it exists. Must be formatted as `YYYY-MM-DD`.",
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.associations.appliances.create(body));
};

export default { metadata, tool, handler };
