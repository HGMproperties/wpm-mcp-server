// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'communications.templates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/communications/templates',
  operationId: 'ExternalApiMailingTemplates_GetMailingTemplates',
};

export const tool: Tool = {
  name: 'list_communications_templates',
  description:
    'Retrieves all mailing and email templates. A template is a tool in Buildium that allows you to create "mail merge" templates for emails and postal mailings to easily send common messages to residents, rental owners and vendors. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Mailing Templates</span> - `View`\r\n            \r\n<h4>Optional Permissions:</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`\r\n            \r\n<span class="permissionBlock">Rentals > Property Rental owners</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Association owners and tenants</span> - `View`\r\n            \r\n<span class="permissionBlock">Maintenance > Vendors</span> - `View`\r\n            \r\n<span class="permissionBlock">Rentals > Applicants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return asTextContentResult(await client.communications.templates.list(body));
};

export default { metadata, tool, handler };
