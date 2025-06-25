// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.notes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/rentals/{propertyId}/notes',
  operationId: 'ExternalApiRentalNotes_CreateRentalPropertyNote',
};

export const tool: Tool = {
  name: 'create_rentals_notes',
  description:
    'Creates a note.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      propertyId: {
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
  const { propertyId, ...body } = args as any;
  return asTextContentResult(await client.rentals.notes.create(propertyId, body));
};

export default { metadata, tool, handler };
