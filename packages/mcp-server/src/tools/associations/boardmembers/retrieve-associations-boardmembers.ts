// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.boardmembers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/{associationId}/boardmembers/{boardMemberId}',
  operationId: 'ExternalApiAssociationBoardMembers_GetAssociationBoardMemberById',
};

export const tool: Tool = {
  name: 'retrieve_associations_boardmembers',
  description:
    'Retrieves an association board member.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      associationId: {
        type: 'integer',
      },
      boardMemberId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { boardMemberId, ...body } = args as any;
  return asTextContentResult(await client.associations.boardmembers.retrieve(boardMemberId, body));
};

export default { metadata, tool, handler };
