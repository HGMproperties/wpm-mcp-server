// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.boardmembers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/associations/{associationId}/boardmembers/{boardMemberId}',
  operationId: 'ExternalApiAssociationBoardMembers_UpdateBoardMember',
};

export const tool: Tool = {
  name: 'update_associations_boardmembers',
  description:
    'Updates a board member for a given association.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      associationId: {
        type: 'integer',
      },
      boardMemberId: {
        type: 'integer',
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
  const { boardMemberId, ...body } = args as any;
  return asTextContentResult(await client.associations.boardmembers.update(boardMemberId, body));
};

export default { metadata, tool, handler };
