// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.todorequests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/tasks/todorequests',
  operationId: 'ExternalApiToDoTasks_CreateToDoTask',
};

export const tool: Tool = {
  name: 'create_tasks_todorequests',
  description:
    'Creates a to do task.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      AssignedToUserId: {
        type: 'integer',
        description:
          'The unique identifier of the staff user assigned to the request. The user must be a `Staff` user type.',
      },
      Priority: {
        type: 'string',
        description: 'Request priority.',
        enum: ['Low', 'Normal', 'High'],
      },
      TaskStatus: {
        type: 'string',
        description: 'Request status.',
        enum: ['New', 'InProgress', 'Completed', 'Deferred', 'Closed'],
      },
      Title: {
        type: 'string',
        description: 'Request title. The title can not exceed 127 characters.',
      },
      CategoryId: {
        type: 'integer',
        description: 'The category identifier to assign the request.',
      },
      Description: {
        type: 'string',
        description: 'Request description. The description can not exceed 65500 characters.',
      },
      DueDate: {
        type: 'string',
        description: 'Request due date. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      PropertyId: {
        type: 'integer',
        description:
          'The unique identifier of property associated with the request. The assigned property must be active.',
      },
      SubCategoryId: {
        type: 'integer',
        description: 'The subcategory identifier to assign the request.',
      },
      UnitId: {
        type: 'integer',
        description:
          'The unique identifier of the unit associated with the request. The unit must be associated with the `PropertyId` specified.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tasks.todorequests.create(body));
};

export default { metadata, tool, handler };
