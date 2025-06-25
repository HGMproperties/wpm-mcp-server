// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'vendors.credits',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/vendors/{vendorId}/credits/{vendorCreditId}',
  operationId: 'ExternalApiVendorCredits_GetVendorCredit',
};

export const tool: Tool = {
  name: 'retrieve_vendors_credits',
  description:
    'Retrieves a credit.\r\n             \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      vendorId: {
        type: 'integer',
      },
      vendorCreditId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { vendorCreditId, ...body } = args as any;
  return asTextContentResult(await client.vendors.credits.retrieve(vendorCreditId, body));
};

export default { metadata, tool, handler };
