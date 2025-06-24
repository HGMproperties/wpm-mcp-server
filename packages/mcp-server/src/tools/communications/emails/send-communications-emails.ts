// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'communications.emails',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/communications/emails',
  operationId: 'ExternalApiEmailsWrite_CreateEmail',
};

export const tool: Tool = {
  name: 'send_communications_emails',
  description:
    'Sends an email to one or more recipients using the specified email template. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communication > Emails</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      ExcludeDelinquentRecipients: {
        type: 'boolean',
        description:
          'Indicates whether to exclude sending emails to association owners that are flagged as delinquent. This only applies to association recipients.',
      },
      IncludeAlternateEmails: {
        type: 'boolean',
        description:
          "Indicates whether to send the email to the recipient's primary and alternate email addresses.",
      },
      IncludeAssociationTenants: {
        type: 'boolean',
        description:
          'Indicates whether to include association tenants. Only applies to association properties.',
      },
      Subject: {
        type: 'string',
        description: 'Email subject.',
      },
      TemplateId: {
        type: 'integer',
        description:
          'Unique identifier of the email template to use for the body of the email. Any tokens present in the template will be replaced based on the recipient(s) of the email.\r\nThe following email templates cannot be used:\r\n<ul><li>1 (Tenant Statement)</li><li>2 (Homeowner Statement)</li><li>3 (Rental Owner Statement)</li><li>123 (Association Tenant Invoice)</li><li>124 (Rental Tenant Invoice)</li></ul>',
      },
      PropertyIds: {
        type: 'array',
        description:
          "A list of association and/or rental property unique identifiers to send the email to. Cannot be populated if 'RecipientIds' is present.",
        items: {
          type: 'integer',
        },
      },
      RecipientIds: {
        type: 'array',
        description:
          "A list of individual unique identifiers to send the email to. Cannot be populated if 'PropertyIds' is present.",
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  await client.communications.emails.send(body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
