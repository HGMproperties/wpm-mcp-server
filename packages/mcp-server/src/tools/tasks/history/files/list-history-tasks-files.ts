// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.history.files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/tasks/{taskId}/history/{taskHistoryId}/files',
  operationId: 'ExternalApiTaskHistoryFiles_GetAllTaskHistoryFiles',
};

export const tool: Tool = {
  name: 'list_history_tasks_files',
  description:
    'Retrieves the metadata for all files associated with a task history record.\r\n            \r\n\r\nThis endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do\'s.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'integer',
      },
      taskHistoryId: {
        type: 'integer',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      offset: {
        type: 'integer',
        description:
          '`offset` indicates the position of the first record to return. The `offset` is zero-based and the default is 0.',
      },
      orderby: {
        type: 'string',
        description:
          '`orderby` indicates the field(s) and direction to sort the results in the response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request Options</a> for more information.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { taskHistoryId, ...body } = args as any;
  return asTextContentResult(await client.tasks.history.files.list(taskHistoryId, body));
};

export default { metadata, tool, handler };
