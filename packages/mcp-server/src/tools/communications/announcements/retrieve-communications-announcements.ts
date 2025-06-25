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
  httpPath: '/v1/communications/announcements/{announcementId}',
  operationId: 'ExternalApiAnnouncements_GetAnnouncementById',
};

export const tool: Tool = {
  name: 'retrieve_communications_announcements',
  description:
    'Retrieves an announcement.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View`',
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
  return asTextContentResult(await client.communications.announcements.retrieve(announcementId));
};

export default { metadata, tool, handler };
