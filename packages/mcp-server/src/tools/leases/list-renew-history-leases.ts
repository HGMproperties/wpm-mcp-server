// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/renewalhistory',
  operationId: 'ExternalApiLeaseRenewalsRead_GetLeaseRenewalHistory',
};

export const tool: Tool = {
  name: 'list_renew_history_leases',
  description:
    'Retrieves all lease renewal history\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      createddatetimefrom: {
        type: 'string',
        description:
          'Filters results to only lease renewals that were created after this date.  The value must be in UTC and formatted as `YYYY-MM-DDTHH:MM:SSZ`. The maximum date range is 365 days.',
        format: 'date-time',
      },
      createddatetimeto: {
        type: 'string',
        description:
          'Filters results to only lease renewals that were created before this date.The value must be in UTC and formatted as `YYYY-MM-DDTHH:MM:SSZ`. The maximum date range is 365 days.',
        format: 'date-time',
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any lease renewals that were updated on or after the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ. The maximum date range is 365 days.',
        format: 'date-time',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any lease renewals were updated on or before the specified date.The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ. The maximum date range is 365 days.',
        format: 'date-time',
      },
      leaseids: {
        type: 'array',
        description:
          'Filters results to only include lease renewals whose renewals belongs to the specified set of lease ids.',
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
  return asTextContentResult(await client.leases.listRenewHistory(body));
};

export default { metadata, tool, handler };
