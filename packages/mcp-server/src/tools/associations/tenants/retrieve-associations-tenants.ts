// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.tenants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/tenants/{tenantId}',
  operationId: 'ExternalApiAssociationTenants_GetAssociationTenantById',
};

export const tool: Tool = {
  name: 'retrieve_associations_tenants',
  description:
    'Retrieves a specific association tenant.\r\n\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`',
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
  return asTextContentResult(await client.associations.tenants.retrieve(tenantId));
};

export default { metadata, tool, handler };
