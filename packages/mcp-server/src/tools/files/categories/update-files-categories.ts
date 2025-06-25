// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'files.categories',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/files/categories/{fileCategoryId}',
  operationId: 'ExternalApiFileCategories_UpdateFileCategory',
};

export const tool: Tool = {
  name: 'update_files_categories',
  description:
    'Updates a file category. Note that file categories where `IsEditable` is `false` can not be updated.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      fileCategoryId: {
        type: 'integer',
      },
      Name: {
        type: 'string',
        description: 'Name of the file category. The value cannot exceed 100 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { fileCategoryId, ...body } = args as any;
  return asTextContentResult(await client.files.categories.update(fileCategoryId, body));
};

export default { metadata, tool, handler };
