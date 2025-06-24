// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.history.files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/tasks/{taskId}/history/{taskHistoryId}/files/{fileId}/downloadrequest',
  operationId: 'ExternalApiTaskHistoryFileDownloads_GetFileDownloadRequest',
};

export const tool: Tool = {
  name: 'download_request_history_tasks_files',
  description:
    'Downloads a specific file associated to the task history record.\r\n            \r\n\r\nThis endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do\'s.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`',
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
  return asTextContentResult(await client.tasks.history.files.downloadRequest(fileId, body));
};

export default { metadata, tool, handler };
