// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.refunds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/refunds/{refundId}',
  operationId: 'ExternalApiOwnershipAccountRefund_GetOwnershipAccountRefundById',
};

export const tool: Tool = {
  name: 'retrieve_ownershipaccounts_associations_refunds',
  description:
    'Retrieves a refund.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
        type: 'integer',
      },
      refundId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { refundId, ...body } = args as any;
  return asTextContentResult(await client.associations.ownershipaccounts.refunds.retrieve(refundId, body));
};

export default { metadata, tool, handler };
