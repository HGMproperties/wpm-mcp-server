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
  httpPath: '/v1/communications/emails/{emailId}/recipients',
  operationId: 'ExternalApiEmailRecipients_GetEmailRecipients',
};

export const tool: Tool = {
  name: 'retrieve_recipients_communications_emails',
  description:
    'Retrieves all email recipients.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Email</span> - `View`\r\n            \r\n<h4>Optional Permissions:</h4>\r\n\r\n            The following permissions are optional, but results with a missing permission will be filtered out.\r\n            <span class="permissionBlock">Maintenance > Vendors</span> - `View` In order to retrieve recipients that are Vendors, you must have this permission.\r\n            <span class="permissionBlock">Administration > Users</span> - `View` In order to see recipients that are Staff, you must have this permission.',
  inputSchema: {
    type: 'object',
    properties: {
      emailId: {
        type: 'integer',
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
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { emailId, ...body } = args as any;
  return asTextContentResult(await client.communications.emails.retrieveRecipients(emailId, body));
};

export default { metadata, tool, handler };
