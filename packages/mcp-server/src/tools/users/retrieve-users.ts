// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/users/{userId}',
  operationId: 'ExternalApiUsers_GetUserById',
};

export const tool: Tool = {
  name: 'retrieve_users',
  description:
    'Retrieve a specific user.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Administration > Users</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      userId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { userId, ...body } = args as any;
  return asTextContentResult(await client.users.retrieve(userId));
};

export default { metadata, tool, handler };
