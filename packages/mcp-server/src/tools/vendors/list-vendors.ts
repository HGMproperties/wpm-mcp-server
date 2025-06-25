// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'vendors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/vendors',
  operationId: 'ExternalApiVendors_GetAllVendors',
};

export const tool: Tool = {
  name: 'list_vendors',
  description:
    'Retrieves a list of vendors.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'Filters results to any vendor whose email *contains* the specified value.',
      },
      insuranceexpiration: {
        type: 'string',
        description: 'Filters results to any vendor whose insurance will expire in the specified date range.',
        enum: ['Expired', 'ThirtyDaysOrLess', 'SixtyDaysOrLess', 'NinetyDaysOrLess', 'None', 'Any'],
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any vendors that were updated on or after the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any vendors that were updated on or before the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      name: {
        type: 'string',
        description: 'Filters results to any vendor whose name *contains* the specified value.',
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
        description:
          'Filters results to any vendor who has a phone number that *contains* the specified value.',
      },
      status: {
        type: 'string',
        description:
          'Filters results by the status of the vendor. If no status is specified both `active` and `inactive` vendors will be returned.',
        enum: ['Inactive', 'Active'],
      },
      website: {
        type: 'string',
        description: 'Filters results to any vendor whose website *contains* the specified value.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.vendors.list(body));
};

export default { metadata, tool, handler };
