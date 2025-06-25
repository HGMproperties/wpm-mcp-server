// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'administration.residentsettings.partialpaymentsettings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/administration/residentsettings/partialpaymentsettings',
  operationId: 'ExternalApiPartialPaymentGlobalSettings_PatchGlobalPartialPaymentSettings',
};

export const tool: Tool = {
  name: 'update_residentsettings_administration_partialpaymentsettings',
  description:
    'Updates the partial payment settings for residents.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Administration > Application Settings</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      RequirePaymentsInFull: {
        type: 'boolean',
        description: 'Whether or not the ownership account payments are required in full.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await client.administration.residentsettings.partialpaymentsettings.update(body),
  );
};

export default { metadata, tool, handler };
