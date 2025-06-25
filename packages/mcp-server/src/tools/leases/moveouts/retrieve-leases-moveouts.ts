// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.moveouts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/{leaseId}/moveouts/{tenantId}',
  operationId: 'ExternalApiLeaseMoveOuts_GetLeaseMoveOutDataByTenantId',
};

export const tool: Tool = {
  name: 'retrieve_leases_moveouts',
  description:
    'Retrieves move out data for a single tenant on a given lease.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`\r\n            \r\n<span class="permissionBlock">Rentals > Tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      tenantId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { tenantId, ...body } = args as any;
  return asTextContentResult(await client.leases.moveouts.retrieve(tenantId, body));
};

export default { metadata, tool, handler };
