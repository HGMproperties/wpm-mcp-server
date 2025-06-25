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
  httpPath: '/v1/associations/owners/{ownerId}/units',
  operationId: 'ExternalApiAssociationOwnerUnits_GetUnitOccupancyStatusesForAssociationOwner',
};

export const tool: Tool = {
  name: 'list_owners_associations_units',
  description:
    'Retrieves the occupancy status for all of the units owned by the association owner. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` \r\n<span class="permissionBlock">Associations > Ownership Accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ownerId: {
        type: 'integer',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      offset: {
        type: 'integer',
        description:
          '`offset` indicates the position of the first record to return. The `offset` is zero-based and the default is 0.',
      },
      orderby: {
        type: 'string',
        description:
          '`orderby` indicates the field(s) and direction to sort the results in the response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request Options</a> for more information.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { ownerId, ...body } = args as any;
  return asTextContentResult(await client.associations.owners.units.list(ownerId, body));
};

export default { metadata, tool, handler };
