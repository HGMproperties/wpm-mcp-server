// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/users',
  operationId: 'ExternalApiUsers_GetAllUsers',
};

export const tool: Tool = {
  name: 'list_users',
  description:
    'Retrieves a list of users.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Administration > Users</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'Filters results to only records whose email *contains* the specified value.',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      name: {
        type: 'string',
        description: 'Filters results to only records whose name *contains* the specified value.',
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
      roleids: {
        type: 'array',
        description: 'Describes the role of the user.',
        items: {
          type: 'integer',
        },
      },
      status: {
        type: 'string',
        description:
          'Filters results by the status of the user. If no status is specified both `active` and `inactive` staff members will be returned.',
        enum: ['Inactive', 'Active'],
      },
      usertypes: {
        type: 'array',
        description: 'Describes the user type of the user.',
        items: {
          type: 'string',
          description: 'This enumeration represents a user type.',
          enum: ['Staff', 'RentalOwner', 'Vendor'],
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.users.list(body));
};

export default { metadata, tool, handler };
