// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/files/{fileId}',
  operationId: 'ExternalApiFiles_GetFileById',
};

export const tool: Tool = {
  name: 'retrieve_files',
  description:
    'Retrieves the file metadata for a specific file. Note this endpoint will only return file metadata. To download files make requests to the <a href="#operation/FileDownloadExternalApi_GetFileDownloadUrlAsync">Download File endpoint.</a>\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      fileId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { fileId, ...body } = args as any;
  return asTextContentResult(await client.files.retrieve(fileId));
};

export default { metadata, tool, handler };
