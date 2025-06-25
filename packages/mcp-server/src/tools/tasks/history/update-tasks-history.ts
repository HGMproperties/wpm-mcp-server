// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.history',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/tasks/{taskId}/history/{taskHistoryId}',
  operationId: 'ExternalApiTaskHistory_UpdateTaskHistory',
};

export const tool: Tool = {
  name: 'update_tasks_history',
  description:
    'Updates a specific task history record for a task.\r\n            \r\n\r\nThis endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do\'s.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'integer',
      },
      taskHistoryId: {
        type: 'integer',
      },
      Message: {
        type: 'string',
        description: 'A message to include with the task update. The value can not exceed 65500 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { taskHistoryId, ...body } = args as any;
  return asTextContentResult(await client.tasks.history.update(taskHistoryId, body));
};

export default { metadata, tool, handler };
