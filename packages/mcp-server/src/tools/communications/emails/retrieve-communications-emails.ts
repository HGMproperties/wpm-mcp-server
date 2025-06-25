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
  httpPath: '/v1/communications/emails/{emailId}',
  operationId: 'ExternalApiEmails_GetEmailById',
};

export const tool: Tool = {
  name: 'retrieve_communications_emails',
  description:
    'Retrieves the content of an email. To retrieve the recipients of the email see the [Retrieve all email recipients](#tag/Communications/operation/ExternalApiEmailRecipients_GetEmailRecipients) endpoint.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Emails</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      emailId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { emailId, ...body } = args as any;
  return asTextContentResult(await client.communications.emails.retrieve(emailId));
};

export default { metadata, tool, handler };
