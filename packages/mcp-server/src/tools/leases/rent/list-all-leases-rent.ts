// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.rent',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/rent',
  operationId: 'ExternalApiLeaseRent_GetRentPaged',
};

export const tool: Tool = {
  name: 'list_all_leases_rent',
  description:
    'The rent schedule provides details (dollar amount, day of the month, etc) of the recurring charges that are applied to the lease ledger each rent cycle. A lease may have more than one rent schedule associated with it if the rent terms change within the duration of the lease.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      createddatetimefrom: {
        type: 'string',
        description:
          'Filters results to only rents that were created after this date. The value must be in UTC and formatted as `YYYY-MM-DDTHH:MM:SSZ`. The maximum date range is 365 days.',
        format: 'date-time',
      },
      createddatetimeto: {
        type: 'string',
        description:
          'Filters results to only rents that were created before this date.The value must be in UTC and formatted as `YYYY-MM-DDTHH:MM:SSZ`. The maximum date range is 365 days.',
        format: 'date-time',
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any rents that were updated on or after the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ. The maximum date range is 365 days.',
        format: 'date-time',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any rents were updated on or before the specified date.The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ. The maximum date range is 365 days.',
        format: 'date-time',
      },
      leaseids: {
        type: 'array',
        description:
          'Filters results to only include rents whose lease belongs to the specified set of lease ids.',
        items: {
          type: 'integer',
        },
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
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.leases.rent.listAll(body));
};

export default { metadata, tool, handler };
