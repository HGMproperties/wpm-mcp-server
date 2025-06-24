// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.architecturalrequests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId}',
  operationId: 'ExternalApiAssociationArchitecturalRequests_GetArchitecturalRequestById',
};

export const tool: Tool = {
  name: 'retrieve_ownershipaccounts_associations_architecturalrequests',
  description:
    'Retrieves a specific architectural request.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Ownership accounts</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Association owners and tenants</span> - `View`\r\n            \r\n<span class="permissionBlock">Associations > Architectural requests</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      architecturalRequestId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { architecturalRequestId, ...body } = args as any;
  return asTextContentResult(
    await client.associations.ownershipaccounts.architecturalrequests.retrieve(architecturalRequestId),
  );
};

export default { metadata, tool, handler };
