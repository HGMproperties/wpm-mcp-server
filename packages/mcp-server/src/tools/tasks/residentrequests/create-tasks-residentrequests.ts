// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.residentrequests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/tasks/residentrequests',
  operationId: 'ExternalApiResidentRequestTasks_CreateResource',
};

export const tool: Tool = {
  name: 'create_tasks_residentrequests',
  description:
    'Creates a resident request.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      Priority: {
        type: 'string',
        description: 'Request priority.',
        enum: ['Low', 'Normal', 'High'],
      },
      RequestedByEntityId: {
        type: 'integer',
        description: 'The unique identifier of the resident that submitted the request.',
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
      UnitAgreementId: {
        type: 'integer',
        description: 'The unique identifier of the unit agreement associated with the request.',
      },
      AssignedToUserId: {
        type: 'integer',
        description:
          'The unique identifier of the staff user assigned to the request. The user must be a `Staff` user type. If not provided, assignment rules in the resident center settings (if configured) will be used for assignment.',
      },
      CategoryId: {
        type: 'integer',
        description: 'The category identifier to assign the request.',
      },
      Description: {
        type: 'string',
        description: 'Request description. The description can not exceed 65500 characters.',
      },
      DoesResidentHavePets: {
        type: 'boolean',
        description:
          'Indicates whether the resident has pets. Set this value to null if the resident has not provided a response.',
      },
      DueDate: {
        type: 'string',
        description: 'Request due date. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      IsEntryPermittedByResident: {
        type: 'boolean',
        description:
          'Indicates whether the resident has explicitly granted permission to enter the unit. Set this value to null if the resident has not provided a response.',
      },
      ResidentEntryNotes: {
        type: 'string',
        description:
          'Notes provided by the resident specific to entering the premises. The value cannot exceed 65535 characters.',
      },
      ShareWithBoardMembers: {
        type: 'boolean',
        description:
          'Indicates whether the request is shared with board members (applies to requests for associations only). Defaults to False if not set or for rental requests.',
      },
      ShareWithRentalOwners: {
        type: 'boolean',
        description:
          'Indicates whether the request is shared with rental owners (applies to requests for rentals only). Defaults to False if not set or for association requests.',
      },
      SubCategoryId: {
        type: 'integer',
        description: 'The subcategory identifier to assign the request.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tasks.residentrequests.create(body));
};

export default { metadata, tool, handler };
