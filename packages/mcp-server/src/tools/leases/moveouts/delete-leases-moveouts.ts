// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.moveouts',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/leases/{leaseId}/moveouts/{tenantId}',
  operationId: 'ExternalApiLeaseMoveOuts_UndoTenantMoveout',
};

export const tool: Tool = {
  name: 'delete_leases_moveouts',
  description:
    'Deletes move out data for a tenant on a given lease.\r\n            \r\n\r\n<h4>Required Permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`\r\n            \r\n<span class="permissionBlock">Rentals > Tenants</span> - `View`',
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
  const response = await client.leases.moveouts.delete(tenantId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
