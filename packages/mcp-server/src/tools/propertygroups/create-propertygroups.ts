// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'propertygroups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/propertygroups',
  operationId: 'ExternalApiPropertyGroups_CreatePropertyGroup',
};

export const tool: Tool = {
  name: 'create_propertygroups',
  description:
    'Creates a property group.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units or</span> - `View` `Edit`\r\n            <span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      Name: {
        type: 'string',
        description: 'Property group name. The name can not exceed 127 characters.',
      },
      PropertyIds: {
        type: 'array',
        description:
          'A list of association and/or rental property unique identifiers to assign to the property group. Property groups cannot be created using inactive associations and/or rental properties.',
        items: {
          type: 'integer',
        },
      },
      Description: {
        type: 'string',
        description: 'Description of the property group. The description can not exceed 1000 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.propertygroups.create(body));
};

export default { metadata, tool, handler };
