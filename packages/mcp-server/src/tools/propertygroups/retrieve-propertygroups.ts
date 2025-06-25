// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'propertygroups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/propertygroups/{propertyGroupId}',
  operationId: 'ExternalApiPropertyGroups_GetPropertyGroupById',
};

export const tool: Tool = {
  name: 'retrieve_propertygroups',
  description:
    'Retrieves a property group.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units or</span> - `View`\r\n            <span class="permissionBlock">Associations > Associations and units</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      propertyGroupId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { propertyGroupId, ...body } = args as any;
  return asTextContentResult(await client.propertygroups.retrieve(propertyGroupId));
};

export default { metadata, tool, handler };
