// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.notes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/{leaseId}/notes',
  operationId: 'ExternalApiLeaseNotes_GetLeaseNotes',
};

export const tool: Tool = {
  name: 'list_leases_notes',
  description:
    'Retrieves all lease notes.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      lastupdatedbyuserid: {
        type: 'integer',
        description: 'Filters results to only notes that were last updated by the specified user identifier.',
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
      updateddatetimefrom: {
        type: 'string',
        description:
          'Filters results to any note whose updated date and time are greater than or equal to the specified value. The value must be formatted as YYYY-MM-DD HH:MM:SS.',
        format: 'date-time',
      },
      updateddatetimeto: {
        type: 'string',
        description:
          'Filters results to any note whose updated date and time are less than or equal to the specified value. The value must be formatted as YYYY-MM-DD HH:MM:SS.',
        format: 'date-time',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.notes.list(leaseId, body));
};

export default { metadata, tool, handler };
