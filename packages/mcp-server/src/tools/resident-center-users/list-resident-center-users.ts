// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'resident_center_users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/residentCenterUsers',
  operationId: 'ExternalApiResidentCenterUsers_GetResidentCenterUsers',
};

export const tool: Tool = {
  name: 'list_resident_center_users',
  description:
    'Retrieves all resident center users for both rentals and associations.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Resident Center Users</span> - `View`\r\n            \r\n<span class="permissionBlock">Rentals > Tenants</span> - `View` is required to retrieve resident center users that are tenants.\r\n            \r\n<span class="permissionBlock">Associations > Association owners and tenants</span> - `View` is required to retrieve resident center users that are association owners.',
  inputSchema: {
    type: 'object',
    properties: {
      isautopayenabled: {
        type: 'boolean',
        description:
          'If true, filters results to any resident center users who have automatic payments scheduled for the future. If false, filters results to any resident center users\r\nwho do not have automatic payments scheduled for the future. If not provided, will not filter results based on automatic payments.',
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
      residentcenteruserstatuses: {
        type: 'array',
        description:
          'Filters results to any resident center user with the specified resident center user statuses.',
        items: {
          type: 'string',
          enum: ['AccountExistsButNoEmailSent', 'PasswordSent', 'EmailFailed', 'SignedIn', 'Blocked'],
        },
      },
      unitagreementids: {
        type: 'array',
        description:
          'Filters results to any resident center user who is associated with the specified lease and/or association ownership account identifiers.',
        items: {
          type: 'integer',
        },
      },
      userids: {
        type: 'array',
        description:
          'Filters results to any resident center user with the specified tenant and/or association owner identifiers.',
        items: {
          type: 'integer',
        },
      },
      usertypes: {
        type: 'array',
        description: 'Filters results to any resident center user with the specified types.',
        items: {
          type: 'string',
          enum: ['Tenant', 'AssociationOwner'],
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.residentCenterUsers.list(body));
};

export default { metadata, tool, handler };
