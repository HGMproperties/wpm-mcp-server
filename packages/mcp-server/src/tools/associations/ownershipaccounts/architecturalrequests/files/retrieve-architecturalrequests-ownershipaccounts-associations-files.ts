// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.architecturalrequests.files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId}/files/{fileId}',
  operationId: 'ExternalApiAssociationArchitecturalRequests_GetArchitecturalRequestFileAsync',
};

export const tool: Tool = {
  name: 'retrieve_architecturalrequests_ownershipaccounts_associations_files',
  description:
    'Retrieves an architectural request file.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Ownership accounts</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Association owners and tenants</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Architectural requests</span> - `View`',
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
    await client.associations.ownershipaccounts.architecturalrequests.files.retrieve(fileId, body),
  );
};

export default { metadata, tool, handler };
