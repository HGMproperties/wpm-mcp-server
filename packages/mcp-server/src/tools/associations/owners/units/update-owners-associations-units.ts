// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.owners.units',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/associations/owners/{ownerId}/units/{unitId}',
  operationId: 'ExternalApiAssociationOwnerUnits_UpdateAssociationOwnerOccupancyStatus',
};

export const tool: Tool = {
  name: 'update_owners_associations_units',
  description:
    'Updates whether a unit is occupied by the association owner.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit` \r\n<span class="permissionBlock">Associations > Ownership Accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ownerId: {
        type: 'integer',
      },
      unitId: {
        type: 'integer',
      },
      IsOccupied: {
        type: 'boolean',
        description: 'Indicates whether the unit is occupied by the association owner.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { unitId, ...body } = args as any;
  return asTextContentResult(await client.associations.owners.units.update(unitId, body));
};

export default { metadata, tool, handler };
