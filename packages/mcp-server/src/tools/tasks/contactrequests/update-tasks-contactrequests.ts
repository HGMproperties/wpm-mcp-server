// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.contactrequests',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/tasks/contactrequests/{contactRequestTaskId}',
  operationId: 'ExternalApiContactRequestTasks_UpdateContactRequestTask',
};

export const tool: Tool = {
  name: 'update_tasks_contactrequests',
  description:
    'Updates a contact request.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      contactRequestTaskId: {
        type: 'integer',
      },
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
  const { contactRequestTaskId, ...body } = args as any;
  return asTextContentResult(await client.tasks.contactrequests.update(contactRequestTaskId, body));
};

export default { metadata, tool, handler };
