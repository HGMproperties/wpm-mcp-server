// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.boardmembers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/{associationId}/boardmembers',
  operationId: 'ExternalApiAssociationBoardMembers_CreateBoardMember',
};

export const tool: Tool = {
  name: 'create_associations_boardmembers',
  description:
    'Creates a board member for a given association.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      associationId: {
        type: 'integer',
      },
      AssociationOwnerId: {
        type: 'integer',
        description: "The association owner's unique identifier.",
      },
      BoardPositionType: {
        type: 'string',
        description: 'Indicates the board position held by the association owner.',
        enum: ['President', 'VicePresident', 'Treasurer', 'Secretary', 'BoardMember'],
      },
      EndDate: {
        type: 'string',
        description:
          'End date of the association owners term as a board member. Must be formatted as `YYYY-MM-DD`.',
        format: 'date',
      },
      StartDate: {
        type: 'string',
        description:
          'Start date of the association owners term as a board member. Must be formatted as `YYYY-MM-DD`.',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { associationId, ...body } = args as any;
  return asTextContentResult(await client.associations.boardmembers.create(associationId, body));
};

export default { metadata, tool, handler };
