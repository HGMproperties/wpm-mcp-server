// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'communications.phonelogs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/communications/phonelogs/{phoneLogId}',
  operationId: 'ExternalApiPhoneLogs_GetPhoneLogById',
};

export const tool: Tool = {
  name: 'retrieve_communications_phonelogs',
  description:
    'Retrieves a specific phone log.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      phoneLogId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { phoneLogId, ...body } = args as any;
  return asTextContentResult(await client.communications.phonelogs.retrieve(phoneLogId));
};

export default { metadata, tool, handler };
