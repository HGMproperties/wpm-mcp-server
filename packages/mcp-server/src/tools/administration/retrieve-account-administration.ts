// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'administration',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/administration/account',
  operationId: 'ExternalApiAccountInfo_GetAccountInfo',
};

export const tool: Tool = {
  name: 'retrieve_account_administration',
  description:
    'Retrieves information related to the Buildium account. \r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Administration > Account Information</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.administration.retrieveAccount());
};

export default { metadata, tool, handler };
