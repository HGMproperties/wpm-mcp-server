// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'communications.emails',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/communications/emails',
  operationId: 'ExternalApiEmails_GetEmails',
};

export const tool: Tool = {
  name: 'list_communications_emails',
  description:
    'Retrieves all emails.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communication > Emails</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      sentdatetimefrom: {
        type: 'string',
        description:
          'Filters results to any emails whose sent date and time are greater than or equal to the specified value. The value must be formatted as YYYY-MM-DDTHH:MM:SSZ. The maximum date range is 90 days.',
        format: 'date-time',
      },
      sentdatetimeto: {
        type: 'string',
        description:
          'Filters results to any emails whose sent date and time are less than or equal to the specified value. The value must be formatted as YYYY-MM-DDTHH:MM:SSZ. The maximum date range is 90 days.',
        format: 'date-time',
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
      recipientnameoremail: {
        type: 'string',
        description:
          'Filters results to any email with a recipient whose name or email address *contains* the specified value.',
      },
      senderuserid: {
        type: 'integer',
        description: 'Filters results to only emails that were sent by the specified user identifier.',
      },
      subject: {
        type: 'string',
        description: 'Filters results to any email whose subject *contains* the specified value.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.communications.emails.list(body));
};

export default { metadata, tool, handler };
