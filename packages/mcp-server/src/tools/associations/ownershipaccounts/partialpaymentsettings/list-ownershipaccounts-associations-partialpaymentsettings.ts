// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.partialpaymentsettings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/partialpaymentsettings',
  operationId: 'ExternalApiOwnershipAccountsPartialPaymentSettings_GetOwnershipAccountPartialPaymentSettings',
};

export const tool: Tool = {
  name: 'list_ownershipaccounts_associations_partialpaymentsettings',
  description:
    'Retrieves partial payment settings for an ownership account.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > OwnershipAccounts</span> - `View`',
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
  return asTextContentResult(
    await client.associations.ownershipaccounts.partialpaymentsettings.list(ownershipAccountId),
  );
};

export default { metadata, tool, handler };
