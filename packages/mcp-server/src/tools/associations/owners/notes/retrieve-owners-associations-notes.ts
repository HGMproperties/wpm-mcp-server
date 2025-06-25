// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.owners.notes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/owners/{ownerId}/notes/{noteId}',
  operationId: 'ExternalApiAssociationOwnerNotes_GetAssociationOwnerNoteByNoteId',
};

export const tool: Tool = {
  name: 'retrieve_owners_associations_notes',
  description:
    'Retrieves an association owner note.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ownerId: {
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
  return asTextContentResult(await client.associations.owners.notes.retrieve(noteId, body));
};

export default { metadata, tool, handler };
