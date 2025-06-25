// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.units',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/units/{unitId}',
  operationId: 'ExternalApiAssociationUnits_GetAssociationUnitById',
};

export const tool: Tool = {
  name: 'retrieve_associations_units',
  description:
    'Retrieve a specific association unit.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      unitId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { unitId, ...body } = args as any;
  return asTextContentResult(await client.associations.units.retrieve(unitId));
};

export default { metadata, tool, handler };
