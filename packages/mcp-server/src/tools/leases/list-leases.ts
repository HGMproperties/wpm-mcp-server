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
  httpPath: '/v1/leases',
  operationId: 'ExternalApiLeases_GetLeases',
};

export const tool: Tool = {
  name: 'list_leases',
  description:
    'Retrieves a list of leases.\r\n\r\n\r\n<span class="permissionBlock">Rentals > Leases</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      createddatetimefrom: {
        type: 'string',
        description:
          'Filters results to any lease whose created date and time are greater than or equal to the specified value. The value must be formatted as YYYY-MM-DD HH:MM:SS.',
        format: 'date-time',
      },
      createddatetimeto: {
        type: 'string',
        description:
          'Filters results to any lease whose created date and time are less than or equal to the specified value. The value must be formatted as YYYY-MM-DD HH:MM:SS.',
        format: 'date-time',
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any leases that were updated on or after the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any leases that were updated on or before the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      leasedatefrom: {
        type: 'string',
        description:
          'Filters results to any lease whose start date is greater than or equal to the specified value.',
        format: 'date',
      },
      leasedateto: {
        type: 'string',
        description:
          'Filters results to any lease whose end date is less than or equal to the specified value.',
        format: 'date',
      },
      leasestatuses: {
        type: 'array',
        description:
          'Filters results to any lease whose lease term matches the specified status. If no status is specified, leases with any lease term status will be returned.',
        items: {
          type: 'string',
          description: 'Indicates the status of a lease term.',
          enum: ['Active', 'Past', 'Future'],
        },
      },
      leasetypes: {
        type: 'array',
        description:
          'Filters results to any lease whose lease type matches the specified status. If no type is specified, leases with any type will be returned.',
        items: {
          type: 'string',
          description: 'This enumeration represents the type of lease.',
          enum: ['None', 'Fixed', 'FixedWithRollover', 'AtWill'],
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
      propertyids: {
        type: 'array',
        description: 'Filters results to any lease whose unit belongs to the specified set of property ids.',
        items: {
          type: 'integer',
        },
      },
      rentalownerids: {
        type: 'array',
        description:
          'Filters results to any lease whose unit belongs to a property with a rental owner in the specified set of rental owner ids.',
        items: {
          type: 'integer',
        },
      },
      tenantname: {
        type: 'string',
        description:
          "Filters results to any lease whose current tenants' names *contain* the specified value.",
      },
      unitnumber: {
        type: 'string',
        description: 'Filters results to any lease whose unit number *contains* the specified value.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.leases.list(body));
};

export default { metadata, tool, handler };
