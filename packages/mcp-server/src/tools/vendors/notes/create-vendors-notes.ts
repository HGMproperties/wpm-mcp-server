// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'vendors.notes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vendors/{vendorId}/notes',
  operationId: 'ExternalApiVendorNotes_CreateVendorNote',
};

export const tool: Tool = {
  name: 'create_vendors_notes',
  description:
    'Creates a vendor note.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      vendorId: {
        type: 'integer',
      },
      Note: {
        type: 'string',
        description: 'Note contents. The value cannot exceed 65535 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { vendorId, ...body } = args as any;
  return asTextContentResult(await client.vendors.notes.create(vendorId, body));
};

export default { metadata, tool, handler };
