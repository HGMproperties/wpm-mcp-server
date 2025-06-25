// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'files.sharing',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/files/{fileId}/sharing',
  operationId: 'ExternalApiFileSharing_GetFileShareSettingsById',
};

export const tool: Tool = {
  name: 'retrieve_files_sharing',
  description:
    'Retrieves a file\'s share settings. Note, that the response JSON schema includes share setting fields for all file entity types, however only fields that pertain to the queried file entity type will be populated. For example, if a file of entity type Rental is retrieved only the fields in the Rental section of the response will have values.\r\n            \r\n<h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`',
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
  return asTextContentResult(await client.files.sharing.retrieve(fileId));
};

export default { metadata, tool, handler };
