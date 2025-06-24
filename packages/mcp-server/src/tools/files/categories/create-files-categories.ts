// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'files.categories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/files/categories',
  operationId: 'ExternalApiFileCategories_CreateFileCategory',
};

export const tool: Tool = {
  name: 'create_files_categories',
  description:
    'Creates a file category.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      Name: {
        type: 'string',
        description: 'Name of the file category. The value cannot exceed 100 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.files.categories.create(body));
};

export default { metadata, tool, handler };
