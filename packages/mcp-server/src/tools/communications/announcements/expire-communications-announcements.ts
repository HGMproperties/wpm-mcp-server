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
  httpPath: '/v1/communications/announcements/{announcementId}/expirationrequest',
  operationId: 'ExternalApiAnnouncementsExpiration_ExpireAnnouncement',
};

export const tool: Tool = {
  name: 'expire_communications_announcements',
  description:
    'Removes the announcement from the Resident Center immediately.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      announcementId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { announcementId, ...body } = args as any;
  await client.communications.announcements.expire(announcementId);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
