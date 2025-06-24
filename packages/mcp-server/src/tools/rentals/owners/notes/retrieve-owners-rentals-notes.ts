// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.owners.notes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rentals/owners/{rentalOwnerId}/notes/{noteId}',
  operationId: 'ExternalApiRentalOwnerNotes_GetRentalOwnerNoteById',
};

export const tool: Tool = {
  name: 'retrieve_owners_rentals_notes',
  description:
    'Retrieves a rental owner note.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      rentalOwnerId: {
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
  return asTextContentResult(await client.rentals.owners.notes.retrieve(noteId, body));
};

export default { metadata, tool, handler };
