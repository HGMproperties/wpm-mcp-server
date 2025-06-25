// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.contactrequests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/tasks/contactrequests',
  operationId: 'ExternalApiContactRequestTasks_CreateContactRequestTask',
};

export const tool: Tool = {
  name: 'create_tasks_contactrequests',
  description:
    'Creates a contact request.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      AssignedToUserId: {
        type: 'integer',
        description:
          'The unique identifier of the staff user assigned to the request. The user must be a `Staff` user type.',
      },
      ContactDetail: {
        $ref: '#/$defs/contact_detail_save',
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
    $defs: {
      contact_detail_save: {
        type: 'object',
        description: 'The contact details of the person who made the request.',
        properties: {
          FirstName: {
            type: 'string',
            description: 'First name of the contact.',
          },
          Email: {
            type: 'string',
            description: 'Email of the contact.',
          },
          LastName: {
            type: 'string',
            description: 'Last name of the contact.',
          },
          PhoneNumbers: {
            $ref: '#/$defs/contact_detail_save_phone_message',
          },
        },
        required: ['FirstName'],
      },
      contact_detail_save_phone_message: {
        type: 'object',
        description: 'Contact phone numbers.',
        properties: {
          Home: {
            type: 'string',
            description:
              'Home phone number. If provided, the value must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
          Mobile: {
            type: 'string',
            description:
              'Mobile phone number. If provided, the value must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
          Work: {
            type: 'string',
            description:
              'Work phone number. If provided, the value must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tasks.contactrequests.create(body));
};

export default { metadata, tool, handler };
