// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/leases/{leaseId}',
  operationId: 'ExternalApiLeases_UpdateLease',
};

export const tool: Tool = {
  name: 'update_leases',
  description:
    'Update a signed lease.\r\n\r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n\r\n\r\n<span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      IsEvictionPending: {
        type: 'boolean',
        description: 'Indicates whether the lease has an eviction pending.',
      },
      LeaseFromDate: {
        type: 'string',
        description: 'Start date of the lease.',
        format: 'date',
      },
      LeaseType: {
        type: 'string',
        description: 'Describes the type of lease.',
        enum: ['Fixed', 'FixedWithRollover', 'AtWill'],
      },
      UnitId: {
        type: 'integer',
        description: 'Unit unique identifier associated with the lease.',
      },
      AutomaticallyMoveOutTenants: {
        type: 'boolean',
        description:
          'Indicates whether to automatically move out all tenants assigned to the lease and set the lease status to past when the lease ends.',
      },
      LeaseToDate: {
        type: 'string',
        description: 'End date of the lease.',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.update(leaseId, body));
};

export default { metadata, tool, handler };
