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
  httpPath: '/v1/associations/{associationId}/boardmembers',
  operationId: 'ExternalApiAssociationBoardMembers_GetAllAssociationBoardMembers',
};

export const tool: Tool = {
  name: 'list_associations_boardmembers',
  description:
    'Retrieves all association board members.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      associationId: {
        type: 'integer',
      },
      boardpositiontypes: {
        type: 'array',
        description:
          'Filters results to only records whose board position type is equal to the specified values.',
        items: {
          type: 'string',
          enum: ['President', 'VicePresident', 'Treasurer', 'Secretary', 'BoardMember'],
        },
      },
      createddatetimefrom: {
        type: 'string',
        description:
          'Filters results to only records that were created after this date. Must be formatted as `YYYY-MM-DD`.',
        format: 'date-time',
      },
      createddatetimeto: {
        type: 'string',
        description:
          'Filters results to only records that were created before this date. Must be formatted as `YYYY-MM-DD`.',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      offset: {
        type: 'integer',
        description:
          '`offset` indicates the position of the first record to return. The `offset` is zero-based and the default is 0.',
      },
      orderby: {
        type: 'string',
        description:
          '`orderby` indicates the field(s) and direction to sort the results in the response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request Options</a> for more information.',
      },
      statuses: {
        type: 'array',
        description: 'Filters results to only records whose status is equal to the specified values.',
        items: {
          type: 'string',
          enum: ['Current', 'Former', 'Future'],
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { associationId, ...body } = args as any;
  return asTextContentResult(await client.associations.boardmembers.list(associationId, body));
};

export default { metadata, tool, handler };
