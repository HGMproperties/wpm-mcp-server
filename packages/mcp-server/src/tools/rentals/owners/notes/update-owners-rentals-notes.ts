// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.owners.notes',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/rentals/owners/{rentalOwnerId}/notes/{noteId}',
  operationId: 'ExternalApiRentalOwnerNotes_UpdateRentalOwnerNote',
};

export const tool: Tool = {
  name: 'update_owners_rentals_notes',
  description:
    'Updates a Rental Owner note.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      rentalOwnerId: {
        type: 'integer',
      },
      noteId: {
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
  const { noteId, ...body } = args as any;
  return asTextContentResult(await client.rentals.owners.notes.update(noteId, body));
};

export default { metadata, tool, handler };
