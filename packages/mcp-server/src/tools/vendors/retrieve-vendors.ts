// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'vendors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/vendors/{vendorId}',
  operationId: 'ExternalApiVendors_GetVendorById',
};

export const tool: Tool = {
  name: 'retrieve_vendors',
  description:
    'Retrieve a specific vendor.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      vendorId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { vendorId, ...body } = args as any;
  return asTextContentResult(await client.vendors.retrieve(vendorId));
};

export default { metadata, tool, handler };
