// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'clientleads',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/clientleads/{clientLeadId}',
  operationId: 'ExternalApiClientLeads_GetProspectiveClient',
};

export const tool: Tool = {
  name: 'retrieve_clientleads',
  description:
    'Retrieves a specific client lead\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Administration > All Property Management</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      clientLeadId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { clientLeadId, ...body } = args as any;
  return asTextContentResult(await client.clientleads.retrieve(clientLeadId));
};

export default { metadata, tool, handler };
