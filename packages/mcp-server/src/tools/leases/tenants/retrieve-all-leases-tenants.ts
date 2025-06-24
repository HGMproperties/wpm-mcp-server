// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.tenants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/tenants',
  operationId: 'ExternalApiRentalTenants_GetAllTenants',
};

export const tool: Tool = {
  name: 'retrieve_all_leases_tenants',
  description:
    'Retrieves a list of tenants.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      buildingstatuses: {
        type: 'array',
        description:
          'Filters results by the status of the rental property the tenants are associated with. If no status is specified tenants in either `active` and `inactive` rental properties will be returned.',
        items: {
          type: 'string',
          description: 'This enumeration represents building statuses.',
          enum: ['Active', 'InActive'],
        },
      },
      email: {
        type: 'string',
        description: 'Filters results to any tenant whose email *contains* the specified value.',
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any rental tenants that were updated on or after the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any rental tenants that were updated on or before the specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      leasetermstatuses: {
        type: 'array',
        description:
          'Filters results to any tenant whose lease term matches the specified status.  If no status is specified tenants with any lease terms status will be returned.',
        items: {
          type: 'string',
          description: 'Indicates the status of a lease term.',
          enum: ['Active', 'Past', 'Future'],
        },
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      name: {
        type: 'string',
        description: 'Filters results to any tenant whose name *contains* the specified value.',
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
        description: 'Filters results to any tenant whose phone number *contains* the specified value.',
      },
      propertyids: {
        type: 'array',
        description:
          'Filters results to tenants whose rental unit belongs to the specified set of property ids.',
        items: {
          type: 'integer',
        },
      },
      rentalownerids: {
        type: 'array',
        description:
          'Filters results to tenants whose rental unit belongs to a property with a rental owner in the specified set of rental owner ids.',
        items: {
          type: 'integer',
        },
      },
      unitids: {
        type: 'array',
        description: 'Filters results to only tenants associated with the specified set of unit ids.',
        items: {
          type: 'integer',
        },
      },
      unitnumber: {
        type: 'string',
        description: 'Filters results to any tenant whose unit number *contains* the specified value.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.leases.tenants.retrieveAll(body));
};

export default { metadata, tool, handler };
