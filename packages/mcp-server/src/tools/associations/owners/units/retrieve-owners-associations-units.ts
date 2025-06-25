// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.owners.units',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/owners/{ownerId}/units/{unitId}',
  operationId: 'ExternalApiAssociationOwnerUnits_GetUnitOccupancyStatusesByIdForAssociationOwner',
};

export const tool: Tool = {
  name: 'retrieve_owners_associations_units',
  description:
    'Retrieves the owner occupancy status for an association unit.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` \r\n<span class="permissionBlock">Associations > Ownership Accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ownerId: {
        type: 'integer',
      },
      unitId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { unitId, ...body } = args as any;
  return asTextContentResult(await client.associations.owners.units.retrieve(unitId, body));
};

export default { metadata, tool, handler };
