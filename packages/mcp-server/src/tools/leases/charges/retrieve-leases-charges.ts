// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.charges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/{leaseId}/charges/{chargeId}',
  operationId: 'ExternalApiLeaseLedgerChargesRead_GetChargeById',
};

export const tool: Tool = {
  name: 'retrieve_leases_charges',
  description:
    'Retrieves a specific lease charge.\r\n\r\n\r\n<h4>Required permissions(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      chargeId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { chargeId, ...body } = args as any;
  return asTextContentResult(await client.leases.charges.retrieve(chargeId, body));
};

export default { metadata, tool, handler };
