// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.partialpaymentsettings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/leases/{leaseId}/partialpaymentsettings',
  operationId: 'ExternalApiLeaseUpdatePartialPaymentSettings_PatchLeasePartialPaymentSettings',
};

export const tool: Tool = {
  name: 'update_leases_partialpaymentsettings',
  description:
    'Updates partial payment settings for a lease.\r\n            \r\n\r\n<h4>Required Permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`\r\n            <span class="permissionBlock">Administration > Application Settings</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      RequirePaymentsInFull: {
        type: 'boolean',
        description: 'Whether or not the ownership account payments are required in full.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.partialpaymentsettings.update(leaseId, body));
};

export default { metadata, tool, handler };
