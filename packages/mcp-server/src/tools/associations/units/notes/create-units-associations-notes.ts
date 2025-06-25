// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.units.notes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/units/{unitId}/notes',
  operationId: 'ExternalApiAssociationUnitNotes_CreateAssociationUnitNote',
};

export const tool: Tool = {
  name: 'create_units_associations_notes',
  description:
    'Creates a new association unit note.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      unitId: {
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
  const { unitId, ...body } = args as any;
  return asTextContentResult(await client.associations.units.notes.create(unitId, body));
};

export default { metadata, tool, handler };
