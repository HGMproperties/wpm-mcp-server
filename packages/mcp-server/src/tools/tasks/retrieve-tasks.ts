// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/tasks/{taskId}',
  operationId: 'ExternalApiTasks_GetTaskById',
};

export const tool: Tool = {
  name: 'retrieve_tasks',
  description:
    'Retrieves a specific task. This endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do\'s. Note, the response payload only contains fields common across all of the request types. To retrieve the full details of the task query the retrieve endpoint specific to the task type.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { taskId, ...body } = args as any;
  return asTextContentResult(await client.tasks.retrieve(taskId));
};

export default { metadata, tool, handler };
