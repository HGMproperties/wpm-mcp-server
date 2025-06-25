// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'files.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/files/categories/{fileCategoryId}',
  operationId: 'ExternalApiFileCategories_GetFileCategoryById',
};

export const tool: Tool = {
  name: 'retrieve_files_categories',
  description:
    'Retrieves a specific file category.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      fileCategoryId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { fileCategoryId, ...body } = args as any;
  return asTextContentResult(await client.files.categories.retrieve(fileCategoryId));
};

export default { metadata, tool, handler };
