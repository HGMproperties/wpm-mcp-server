// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'communications.announcements',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/communications/announcements',
  operationId: 'ExternalApiAnnouncements_CreateAnnouncement',
};

export const tool: Tool = {
  name: 'create_communications_announcements',
  description:
    'Creates and publishes an announcement.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      Body: {
        type: 'string',
        description:
          'The content of the announcement. The value cannot exceed 65535 characters. Note: if your message is over 140 characters, the announcement will not be sent via SMS. Announcement texts are available for US numbers only.',
      },
      IncludeAlternateEmail: {
        type: 'boolean',
        description:
          'Indicates whether to send the announcement to alternate emails in addition to the main email addresses when publishing the announcement.',
      },
      NotifyAssociationTenants: {
        type: 'boolean',
        description:
          'Indicates whether to include notifying the association tenants in addition to the association owners when publishing the announcement. Note this is only pertains to announcements sent to residents of `Association` properties.',
      },
      PropertyIds: {
        type: 'array',
        description:
          'A list of association and/or rental property unique identifiers whose residents should receive the announcement.',
        items: {
          type: 'integer',
        },
      },
      Subject: {
        type: 'string',
        description:
          'The subject of the announcement. Note, this will only show up in announcements sent via email and in the Resident Center. The value cannot exceed 100 characters.',
      },
      ExpirationDate: {
        type: 'string',
        description:
          'Optional date that indicates when the announcement should be removed from the Resident Center. If no date is provided the announcement will appear indefinitely The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.communications.announcements.create(body));
};

export default { metadata, tool, handler };
