// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.tenants.notes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/tenants/{tenantId}/notes/{noteId}',
  operationId: 'ExternalApiAssociationTenantNotes_GetAssociationTenantNoteById',
};

export const tool: Tool = {
  name: 'retrieve_tenants_associations_notes',
  description:
    'Retrieves an association tenant note.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      tenantId: {
        type: 'integer',
      },
      noteId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { noteId, ...body } = args as any;
  return asTextContentResult(await client.associations.tenants.notes.retrieve(noteId, body));
};

export default { metadata, tool, handler };
