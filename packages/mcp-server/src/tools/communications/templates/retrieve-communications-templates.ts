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
  httpPath: '/v1/communications/templates/{templateId}',
  operationId: 'ExternalApiMailingTemplates_GetMailingTemplatesById',
};

export const tool: Tool = {
  name: 'retrieve_communications_templates',
  description:
    'Retrieves a communication template. A template is a tool in Buildium that allows you to create "mail merge" templates for emails and postal mailings to easily send common messages to residents, rental owners and vendors.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Mailing Templates</span> - `View`\r\n            \r\n<h4>Optional Permissions:</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`\r\n            \r\n<span class="permissionBlock">Rentals > Property Rental owners</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Association owners and tenants</span> - `View`\r\n            \r\n<span class="permissionBlock">Maintenance > Vendors</span> - `View`\r\n            \r\n<span class="permissionBlock">Rentals > Applicants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      templateId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { templateId, ...body } = args as any;
  return asTextContentResult(await client.communications.templates.retrieve(templateId));
};

export default { metadata, tool, handler };
