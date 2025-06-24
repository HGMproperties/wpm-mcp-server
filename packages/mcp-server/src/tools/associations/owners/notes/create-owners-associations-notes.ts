// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.owners.notes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/owners/{ownerId}/notes',
  operationId: 'ExternalApiAssociationOwnerNotes_CreateAssociationOwnerNote',
};

export const tool: Tool = {
  name: 'create_owners_associations_notes',
  description:
    'Creates an association owner note.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      ownerId: {
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
  const { ownerId, ...body } = args as any;
  return asTextContentResult(await client.associations.owners.notes.create(ownerId, body));
};

export default { metadata, tool, handler };
