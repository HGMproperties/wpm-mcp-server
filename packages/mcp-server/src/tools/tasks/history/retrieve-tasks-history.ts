// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/tasks/{taskId}/history/{taskHistoryId}',
  operationId: 'ExternalApiTaskHistory_GetTaskHistoryById',
};

export const tool: Tool = {
  name: 'retrieve_tasks_history',
  description:
    'Retrieves a specific task history record for a task.\r\n            \r\n\r\nThis endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do\'s.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'integer',
      },
      taskHistoryId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { taskHistoryId, ...body } = args as any;
  return asTextContentResult(await client.tasks.history.retrieve(taskHistoryId, body));
};

export default { metadata, tool, handler };
