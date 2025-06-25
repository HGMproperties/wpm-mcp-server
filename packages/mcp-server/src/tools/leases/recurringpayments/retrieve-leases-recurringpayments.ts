// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.recurringpayments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/{leaseId}/recurringpayments/{paymentId}',
  operationId: 'ExternalApiLeaseRecurringPayments_GetRecurringLeasePaymentsById',
};

export const tool: Tool = {
  name: 'retrieve_leases_recurringpayments',
  description:
    'Retrieves a recurring payment.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      paymentId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { paymentId, ...body } = args as any;
  return asTextContentResult(await client.leases.recurringpayments.retrieve(paymentId, body));
};

export default { metadata, tool, handler };
