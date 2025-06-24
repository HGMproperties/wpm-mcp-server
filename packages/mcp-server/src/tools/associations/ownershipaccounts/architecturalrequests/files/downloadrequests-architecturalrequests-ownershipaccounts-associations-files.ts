// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.architecturalrequests.files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId}/files/{fileId}/downloadrequests',
  operationId: 'ExternalApiAssociationArchitecturalRequests_DownloadArchitecturalRequestFileAsync',
};

export const tool: Tool = {
  name: 'downloadrequests_architecturalrequests_ownershipaccounts_associations_files',
  description:
    'Downloads a specific file associated to the architectural request.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Ownership accounts</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Association owners and tenants</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Architectural requests</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      architecturalRequestId: {
        type: 'integer',
      },
      fileId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { fileId, ...body } = args as any;
  return asTextContentResult(
    await client.associations.ownershipaccounts.architecturalrequests.files.downloadrequests(fileId, body),
  );
};

export default { metadata, tool, handler };
