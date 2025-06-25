// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.tenants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/tenants/{tenantId}',
  operationId: 'ExternalApiRentalTenants_GetTenantById',
};

export const tool: Tool = {
  name: 'retrieve_leases_tenants',
  description:
    'Retrieve a specific tenant.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      tenantId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { tenantId, ...body } = args as any;
  return asTextContentResult(await client.leases.tenants.retrieve(tenantId));
};

export default { metadata, tool, handler };
