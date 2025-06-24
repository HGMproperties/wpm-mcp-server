// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.categories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/tasks/categories',
  operationId: 'ExternalApiTaskCategories_CreateTaskCategory',
};

export const tool: Tool = {
  name: 'create_tasks_categories',
  description:
    'Create a task category.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      Name: {
        type: 'string',
        description: 'Name of the task category.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tasks.categories.create(body));
};

export default { metadata, tool, handler };
