// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.owners',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/owners/{ownerId}',
  operationId: 'ExternalApiAssociationOwners_GetAssociationOwnerById',
};

export const tool: Tool = {
  name: 'retrieve_associations_owners',
  description:
    'Retrieve a specific association owner.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ownerId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { ownerId, ...body } = args as any;
  return asTextContentResult(await client.associations.owners.retrieve(ownerId));
};

export default { metadata, tool, handler };
