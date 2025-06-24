// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'communications.announcements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/communications/announcements',
  operationId: 'ExternalApiAnnouncements_GetAllAnnouncements',
};

export const tool: Tool = {
  name: 'list_communications_announcements',
  description:
    'Retrieves all announcements.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      announcementdatefrom: {
        type: 'string',
        description:
          'Filters results to any announcements created on or after the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      announcementdateto: {
        type: 'string',
        description:
          'Filters results to any announcements created on or before the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      entityid: {
        type: 'integer',
        description:
          'Filters results to any announcement associated with the specified entity id value. The value must be of the type specified in the `EntityType` field.',
      },
      entitytype: {
        type: 'string',
        description:
          'Specifies the type of entity that the `EntityId` field refers to. This field is required if the `EntityId` field is provided.',
        enum: ['Rental', 'RentalOwner', 'Association'],
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
      senderid: {
        type: 'integer',
        description: 'Unique identifier of the user that published the announcement.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.communications.announcements.list(body));
};

export default { metadata, tool, handler };
