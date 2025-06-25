// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'workorders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/workorders',
  operationId: 'ExternalApiWorkOrders_GetAllWorkOrders',
};

export const tool: Tool = {
  name: 'list_workorders',
  description:
    'Retrieves a list of work orders.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      amountfrom: {
        type: 'number',
        description:
          'Filters results to any work orders whose total amounts are equal or greater than the specified amount.',
      },
      amountto: {
        type: 'number',
        description:
          'Filters results to any work orders whose total amounts are equal or less than the specified amount.',
      },
      assignedtoid: {
        type: 'integer',
        description:
          'Filters results to any work orders that have been assigned to the specified staff user identifier.',
      },
      duedatefrom: {
        type: 'string',
        description:
          'Filters results to any work orders with a due date on or after the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      duedateto: {
        type: 'string',
        description:
          'Filters results to any work orders with a due date on or before the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      entityid: {
        type: 'integer',
        description:
          'Filters results to any work order associated with the specified entity id value. The value must be of the type specified in the `EntityType` field.',
      },
      entitytype: {
        type: 'string',
        description:
          'Specifies the type of entity that the `EntityId` field refers to. This field is required if the `EntityId` field is populated.',
        enum: ['Rental', 'RentalOwner', 'Association'],
      },
      isbilled: {
        type: 'boolean',
        description: 'Filters results to work orders that have an associated bill.',
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any work orders were updated on or after the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any work orders were updated on or before the specified date. The value must be formatted as YYYY-MM-DD.',
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
          'Filters results to any work orders whose priority matches the specified values. If no priority is specified, tasks with any priority will be returned.',
        items: {
          type: 'string',
          enum: ['Low', 'Normal', 'High'],
        },
      },
      statuses: {
        type: 'array',
        description:
          'Filters results by the status of the task associated with the work order. If no status is specified, work orders with any status will be returned.',
        items: {
          type: 'string',
          enum: ['New', 'InProgress', 'Completed', 'Deferred', 'Closed'],
        },
      },
      taskcategoryid: {
        type: 'integer',
        description: 'Filters results to any work orders with the specified task category identifier.',
      },
      taskids: {
        type: 'array',
        description:
          'Filters results to work orders that have an associated to a task in the specified list.',
        items: {
          type: 'integer',
        },
      },
      title: {
        type: 'string',
        description: 'Filters results to any work orders whose title *contains* the specified value.',
      },
      type: {
        type: 'string',
        description:
          'Filters results to any work order with an associated task with the task type specified.',
        enum: ['ContactRequest', 'ResidentRequest', 'Todo', 'RentalOwnerRequest'],
      },
      unitagreementid: {
        type: 'integer',
        description:
          'Filters results to any work order associated with the unit agreement identifier specified.',
      },
      unitid: {
        type: 'integer',
        description: 'Filters results to any work order associated with the unit identifier.',
      },
      vendorids: {
        type: 'array',
        description:
          'Filters results to any work orders that have been assigned to the specified vendor identifier.',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.workorders.list(body));
};

export default { metadata, tool, handler };
