// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/{associationId}/reactivationrequest',
  operationId: 'ExternalApiAssociationActiveStatus_ReactivateAssociation',
};

export const tool: Tool = {
  name: 'reactivate_associations',
  description:
    'Reactivates an association along with associated units and ownership accounts. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      associationId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { associationId, ...body } = args as any;
  const response = await client.associations.reactivate(associationId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
