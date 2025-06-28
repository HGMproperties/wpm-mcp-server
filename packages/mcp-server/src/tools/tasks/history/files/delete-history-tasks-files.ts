// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.history.files',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/tasks/{taskId}/history/{taskHistoryId}/files/{fileId}',
  operationId: 'ExternalApiTaskHistoryFiles_DeleteTaskHistoryFile',
};

export const tool: Tool = {
  name: 'delete_history_tasks_files',
  description:
    'Deletes a specific file from a task history record. The file will be permanently deleted from the Buildium platform an can not be recovered.\r\n            \r\n\r\nThis endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do\'s.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit` `Delete`',
  inputSchema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'integer',
      },
      taskHistoryId: {
        type: 'integer',
      },
      fileId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { fileId, ...body } = args as any;
  const response = await client.tasks.history.files.delete(fileId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
