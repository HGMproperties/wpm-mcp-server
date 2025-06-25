// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations',
  operationId: 'ExternalApiAssociations_GetAssociations',
};

export const tool: Tool = {
  name: 'list_associations',
  description:
    'Retrieves a list of associations.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ids: {
        type: 'array',
        description: 'Filters results to the specified set of ids.',
        items: {
          type: 'integer',
        },
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any associations that were updated on or after the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any associations that were updated on or before the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      location: {
        type: 'string',
        description: 'Filters results to any association whose city or state *contains* the specified value.',
      },
      offset: {
        type: 'integer',
        description:
          '`offset` indicates the position of the first record to return. The `offset` is zero-based and the default is 0.',
      },
      operatingbankaccountids: {
        type: 'array',
        description:
          'Filters results to any associations associated to any of the specified set of operating bank account ids.',
        items: {
          type: 'integer',
        },
      },
      orderby: {
        type: 'string',
        description:
          '`orderby` indicates the field(s) and direction to sort the results in the response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request Options</a> for more information.',
      },
      status: {
        type: 'string',
        description:
          'Filters results by the status of the association. If no status is specified both `active` and `inactive` associations will be returned.',
        enum: ['Active', 'InActive'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.associations.list(body));
};

export default { metadata, tool, handler };
