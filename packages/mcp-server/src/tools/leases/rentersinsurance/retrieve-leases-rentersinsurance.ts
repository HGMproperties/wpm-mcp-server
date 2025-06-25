// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.rentersinsurance',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/{leaseId}/rentersinsurance/{policyId}',
  operationId: 'ExternalApiRentersInsurance_GetRentersInsurancePolicyById',
};

export const tool: Tool = {
  name: 'retrieve_leases_rentersinsurance',
  description:
    'Retrieves a renters insurance policy.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      policyId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { policyId, ...body } = args as any;
  return asTextContentResult(await client.leases.rentersinsurance.retrieve(policyId, body));
};

export default { metadata, tool, handler };
