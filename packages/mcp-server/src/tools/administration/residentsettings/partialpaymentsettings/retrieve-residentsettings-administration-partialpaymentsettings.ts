// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'administration.residentsettings.partialpaymentsettings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/administration/residentsettings/partialpaymentsettings',
  operationId: 'ExternalApiPartialPaymentGlobalSettings_GetGlobalPartialPaymentSettings',
};

export const tool: Tool = {
  name: 'retrieve_residentsettings_administration_partialpaymentsettings',
  description:
    'Retrieves the partial payment settings for residents.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Administration > Application Settings</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.administration.residentsettings.partialpaymentsettings.retrieve());
};

export default { metadata, tool, handler };
