// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bills.payments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bills/{billId}/payments/{paymentId}',
  operationId: 'ExternalApiBillPaymentsRead_GetBillPaymentById',
};

export const tool: Tool = {
  name: 'retrieve_bills_payments',
  description:
    'Retrieves specific bill payment.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      billId: {
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
  return asTextContentResult(await client.bills.payments.retrieve(paymentId, body));
};

export default { metadata, tool, handler };
