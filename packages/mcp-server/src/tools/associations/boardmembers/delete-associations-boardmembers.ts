// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.boardmembers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/associations/{associationId}/boardmembers/{boardMemberId}',
  operationId: 'ExternalApiAssociationBoardMembers_DeleteBoardMember',
};

export const tool: Tool = {
  name: 'delete_associations_boardmembers',
  description:
    'Deletes a board member. Note, this is a hard delete from the database and data can not be restored. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit` `Delete`',
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
  const response = await client.associations.boardmembers.delete(boardMemberId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
