// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/files/{fileId}/downloadrequest',
  operationId: 'ExternalApiFileDownload_GetFileDownloadUrlAsync',
};

export const tool: Tool = {
  name: 'request_download_files',
  description:
    'Downloading a file requires making two API requests. The first request to `/v1/files/{fileId}/downloadrequest` will return a secure URL that can be used to download the file contents. Note the download URL is transient and will expire after 5 minutes. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`',
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
  return asTextContentResult(await client.files.requestDownload(fileId));
};

export default { metadata, tool, handler };
