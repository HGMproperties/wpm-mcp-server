// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.todorequests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/tasks/todorequests',
  operationId: 'ExternalApiToDoTasks_GetToDoTasks',
};

export const tool: Tool = {
  name: 'list_tasks_todorequests',
  description:
    'Retrieves a list of to do tasks.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      assignedtoid: {
        type: 'integer',
        description:
          'Filters results to any tasks that have been assigned to the specified staff user identifier.',
      },
      duedatefrom: {
        type: 'string',
        description:
          'Filters results to any tasks with a due date on or after the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      duedateto: {
        type: 'string',
        description:
          'Filters results to any tasks with a due date on or before the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      entityid: {
        type: 'integer',
        description:
          'Filters results to any task associated with the specified entity id value. The value must be of the type specified in the `EntityType` field.',
      },
      entitytype: {
        type: 'string',
        description:
          'Specifies the type of entity that the `EntityId` field refers to. This field is required if the `EntityId` field is populated.',
        enum: ['Rental', 'RentalOwner', 'Association'],
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any tasks were updated on or after the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any tasks were updated on or before the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
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
      priorities: {
        type: 'array',
        description:
          'Filters results to any tasks whose priority matches the specified values. If no priority is specified, tasks with any priority will be returned.',
        items: {
          type: 'string',
          enum: ['Low', 'Normal', 'High'],
        },
      },
      statuses: {
        type: 'array',
        description:
          'Filters results by the status of the task. If no status is specified, tasks with any status will be returned.',
        items: {
          type: 'string',
          enum: ['New', 'InProgress', 'Completed', 'Deferred', 'Closed'],
        },
      },
      taskcategoryid: {
        type: 'integer',
        description: 'Filters results to any tasks with the specified category identifier.',
      },
      tasktitle: {
        type: 'string',
        description: 'Filters results to any task whose title *contains* the specified value.',
      },
      unitid: {
        type: 'integer',
        description: 'Filters results to any task associated with the unit identifier.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tasks.todorequests.list(body));
};

export default { metadata, tool, handler };
