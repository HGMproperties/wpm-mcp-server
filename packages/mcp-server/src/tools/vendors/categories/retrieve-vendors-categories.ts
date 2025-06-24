// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'vendors.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/vendors/categories/{vendorCategoryId}',
  operationId: 'ExternalApiVendorCategories_GetVendorCategoryById',
};

export const tool: Tool = {
  name: 'retrieve_vendors_categories',
  description:
    'Retrieves a specific vendor category.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      vendorCategoryId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { vendorCategoryId, ...body } = args as any;
  return asTextContentResult(await client.vendors.categories.retrieve(vendorCategoryId));
};

export default { metadata, tool, handler };
