// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.partialpaymentsettings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/partialpaymentsettings',
  operationId: 'ExternalApiOwnershipAccountUpdatePartialPaymentSettings_PatchOwnershipAccountPartialPayment',
};

export const tool: Tool = {
  name: 'patch_all_ownershipaccounts_associations_partialpaymentsettings',
  description:
    'Updates partial payment settings for an ownership account.\r\n            \r\n\r\n<h4>Required Permission(s):</h4><span class="permissionBlock">Associations > Ownership Accounts</span> - `View` `Edit`\r\n            <span class="permissionBlock">Administration > Application Settings</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
        type: 'integer',
      },
      RequirePaymentsInFull: {
        type: 'boolean',
        description: 'Whether or not the ownership account payments are required in full.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { ownershipAccountId, ...body } = args as any;
  return asTextContentResult(
    await client.associations.ownershipaccounts.partialpaymentsettings.patchAll(ownershipAccountId, body),
  );
};

export default { metadata, tool, handler };
