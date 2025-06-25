// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.owners',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/owners',
  operationId: 'ExternalApiAssociationOwners_GetAllAssociationOwners',
};

export const tool: Tool = {
  name: 'list_associations_owners',
  description:
    'Retrieves a list of association owners.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      associationids: {
        type: 'array',
        description:
          'Filters results to only records that belong to the specified set of association identifiers.',
        items: {
          type: 'integer',
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
      email: {
        type: 'string',
        description: 'Filters results to only records whose email *contains* the specified value.',
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any association owners that were updated on or after the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any association owners that were updated on or before the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      name: {
        type: 'string',
        description: 'Filters results to only records whose name *contains* the specified value.',
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
      phone: {
        type: 'string',
        description: 'Filters results to only records whose phone number *contains* the specified value.',
      },
      statuses: {
        type: 'array',
        description: 'Filters results to only records whose status is equal to the specified value.',
        items: {
          type: 'string',
          description: 'Indicates the status of a lease term.',
          enum: ['Active', 'Past', 'Future'],
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.associations.owners.list(body));
};

export default { metadata, tool, handler };
