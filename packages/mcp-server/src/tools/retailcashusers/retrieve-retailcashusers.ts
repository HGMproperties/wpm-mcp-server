// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'retailcashusers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/retailcashusers/{userId}/{unitAgreementId}',
  operationId: 'ExternalApiRetailCashRead_GetRetailCashUser',
};

export const tool: Tool = {
  name: 'retrieve_retailcashusers',
  description:
    'Retrieves a retail cash user.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`\r\n            OR\r\n            <span class="permissionBlock"> Associations > Association owners and tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      userId: {
        type: 'integer',
      },
      unitAgreementId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { unitAgreementId, ...body } = args as any;
  return asTextContentResult(await client.retailcashusers.retrieve(unitAgreementId, body));
};

export default { metadata, tool, handler };
