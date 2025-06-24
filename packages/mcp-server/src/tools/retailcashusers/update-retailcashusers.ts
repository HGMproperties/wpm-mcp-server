// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'retailcashusers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/retailcashusers/{userId}/{unitAgreementId}',
  operationId: 'ExternalApiRetailCashWrite_UpdateRetailCashUser',
};

export const tool: Tool = {
  name: 'update_retailcashusers',
  description:
    'Updates a retail cash user.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`\r\n            OR\r\n            <span class="permissionBlock"> Associations > Association owners and tenants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      userId: {
        type: 'integer',
      },
      unitAgreementId: {
        type: 'integer',
      },
      IsEnabled: {
        type: 'boolean',
        description:
          'Whether retail cash is enabled for the user. If no retail cash account exists for the user, enabling will create one for the user. You cannot disable a user who does not have an account yet.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { unitAgreementId, ...body } = args as any;
  return asTextContentResult(await client.retailcashusers.update(unitAgreementId, body));
};

export default { metadata, tool, handler };
