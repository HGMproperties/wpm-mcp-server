// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.todorequests',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/tasks/todorequests/{toDoTaskId}',
  operationId: 'ExternalApiToDoTasks_UpdateToDoTask',
};

export const tool: Tool = {
  name: 'update_tasks_todorequests',
  description:
    'Updates a to do task\r\n\r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      toDoTaskId: {
        type: 'integer',
      },
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
      DueDate: {
        type: 'string',
        description: 'Request due date. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      Message: {
        type: 'string',
        description: 'Description of the request update. The message can not exceed 65500 characters.',
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
  const { toDoTaskId, ...body } = args as any;
  return asTextContentResult(await client.tasks.todorequests.update(toDoTaskId, body));
};

export default { metadata, tool, handler };
