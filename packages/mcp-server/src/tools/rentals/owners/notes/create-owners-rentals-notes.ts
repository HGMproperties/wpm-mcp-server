// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.owners.notes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/rentals/owners/{rentalOwnerId}/notes',
  operationId: 'ExternalApiRentalOwnerNotes_CreateRentalOwnerNote',
};

export const tool: Tool = {
  name: 'create_owners_rentals_notes',
  description:
    'Creates a new Rental Owner note.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      rentalOwnerId: {
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
  const { rentalOwnerId, ...body } = args as any;
  return asTextContentResult(await client.rentals.owners.notes.create(rentalOwnerId, body));
};

export default { metadata, tool, handler };
