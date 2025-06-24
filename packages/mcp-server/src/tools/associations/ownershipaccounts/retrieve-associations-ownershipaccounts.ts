// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}',
  operationId: 'ExternalApiOwnershipAccounts_GetOwnershipAccountById',
};

export const tool: Tool = {
  name: 'retrieve_associations_ownershipaccounts',
  description:
    'Retrieves a specific ownership account.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { ownershipAccountId, ...body } = args as any;
  return asTextContentResult(await client.associations.ownershipaccounts.retrieve(ownershipAccountId));
};

export default { metadata, tool, handler };
