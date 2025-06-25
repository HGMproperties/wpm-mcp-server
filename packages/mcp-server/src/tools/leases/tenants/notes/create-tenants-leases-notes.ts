// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.tenants.notes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/leases/tenants/{tenantId}/notes',
  operationId: 'ExternalApiTenantNotes_CreateTenantNote',
};

export const tool: Tool = {
  name: 'create_tenants_leases_notes',
  description:
    'Creates a tenant note.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      tenantId: {
        type: 'integer',
      },
      Note: {
        type: 'string',
        description: 'Note contents. The value cannot exceed 65535 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { tenantId, ...body } = args as any;
  return asTextContentResult(await client.leases.tenants.notes.create(tenantId, body));
};

export default { metadata, tool, handler };
