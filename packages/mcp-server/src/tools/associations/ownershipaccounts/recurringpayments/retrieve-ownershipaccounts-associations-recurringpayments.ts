// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.recurringpayments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/recurringpayments/{paymentId}',
  operationId: 'ExternalApiOwnershipAccountRecurringPayments_GetRecurringOwnershipAccountPaymentsById',
};

export const tool: Tool = {
  name: 'retrieve_ownershipaccounts_associations_recurringpayments',
  description:
    'Retrieves a recurring payment.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
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
  return asTextContentResult(
    await client.associations.ownershipaccounts.recurringpayments.retrieve(paymentId, body),
  );
};

export default { metadata, tool, handler };
