// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.epaysettings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/{leaseId}/epaysettings',
  operationId: 'ExternalApiLeaseEpaySettings_GetLeaseEpaySettingsById',
};

export const tool: Tool = {
  name: 'retrieve_leases_epaysettings',
  description:
    'Retrieves ePay settings for a lease.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.epaysettings.retrieve(leaseId));
};

export default { metadata, tool, handler };
