// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.moveouts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/leases/{leaseId}/moveouts',
  operationId: 'ExternalApiLeaseMoveOuts_CreateMoveOutData',
};

export const tool: Tool = {
  name: 'create_leases_moveouts',
  description:
    'Creates move out data for a single tenant on a given lease.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`\r\n            \r\n<span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      MoveOutDate: {
        type: 'string',
        description: 'Date the tenant(s) will move out of the leased unit.',
        format: 'date',
      },
      TenantId: {
        type: 'integer',
        description: 'Tenant unique identifier.',
      },
      NoticeGivenDate: {
        type: 'string',
        description: 'Date the tenant(s) gave their move out notice.',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.moveouts.create(leaseId, body));
};

export default { metadata, tool, handler };
