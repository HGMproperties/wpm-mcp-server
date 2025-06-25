// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.notes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/notes',
  operationId: 'ExternalApiOwnershipAccountNotes_CreateAssociationOwnershipAccountNote',
};

export const tool: Tool = {
  name: 'create_ownershipaccounts_associations_notes',
  description:
    'Creates a new ownership account note.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
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
  const { ownershipAccountId, ...body } = args as any;
  return asTextContentResult(
    await client.associations.ownershipaccounts.notes.create(ownershipAccountId, body),
  );
};

export default { metadata, tool, handler };
