// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.categories',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/tasks/categories/{taskCategoryId}',
  operationId: 'ExternalApiTaskCategories_UpdateTaskCategory',
};

export const tool: Tool = {
  name: 'update_tasks_categories',
  description:
    'Updates a task category.\r\n\r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      taskCategoryId: {
        type: 'integer',
      },
      Name: {
        type: 'string',
        description: 'Name of the task category.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { taskCategoryId, ...body } = args as any;
  return asTextContentResult(await client.tasks.categories.update(taskCategoryId, body));
};

export default { metadata, tool, handler };
