// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'vendors.notes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/vendors/{vendorId}/notes/{noteId}',
  operationId: 'ExternalApiVendorNotes_GetVendorNoteByNoteId',
};

export const tool: Tool = {
  name: 'retrieve_vendors_notes',
  description:
    'Retrieves a vendor note.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      vendorId: {
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
  return asTextContentResult(await client.vendors.notes.retrieve(noteId, body));
};

export default { metadata, tool, handler };
