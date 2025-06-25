// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'userroles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/userroles/{userRoleId}',
  operationId: 'ExternalApiUserRoles_GetUserRoleById',
};

export const tool: Tool = {
  name: 'retrieve_userroles',
  description:
    'Retrieve a specific user role.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Administration > User Roles</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      userRoleId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { userRoleId, ...body } = args as any;
  return asTextContentResult(await client.userroles.retrieve(userRoleId));
};

export default { metadata, tool, handler };
