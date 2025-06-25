// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bills',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bills',
  operationId: 'ExternalApiBills_GetBillsAsync',
};

export const tool: Tool = {
  name: 'list_bills',
  description:
    'Retrieves a list of bills.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      approvalstatuses: {
        type: 'array',
        description:
          'Filters the results to bills matching the specified approval statuses. If no approval status is specified, bills with any status will be returned.',
        items: {
          type: 'string',
          enum: ['NotNeeded', 'ApprovalRequired', 'Approved', 'Pending', 'Rejected'],
        },
      },
      entityid: {
        type: 'integer',
        description:
          'Filters results to any bill containing line items associated with the specified entity identifier. This filter is used in conjunction with the `EntityType` field which must be set to the type of entity this identifier references.',
      },
      entitytype: {
        type: 'string',
        description:
          'Specifies the type of entity that `EntityId` refers to. This field is required if `EntityId` is specified.',
        enum: ['Rental', 'RentalOwner', 'Association'],
      },
      frompaiddate: {
        type: 'string',
        description:
          'Filters results to any bill whose paid date is greater than or equal to the specified value.',
        format: 'date',
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
      paidstatus: {
        type: 'string',
        description:
          "Filters results by the bill's paid status. If no status is specified, bills with any status will be returned.",
        enum: ['Paid', 'Unpaid', 'UncollectedMarkups'],
      },
      referencenumber: {
        type: 'string',
        description: 'Filters results to bills whose reference number contains the specified value.',
      },
      topaiddate: {
        type: 'string',
        description:
          'Filters results to any bill whose paid date is less than or equal to the specified value.',
        format: 'date',
      },
      vendorid: {
        type: 'integer',
        description: 'Filters results to bills associated with a specific vendor.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bills.list(body));
};

export default { metadata, tool, handler };
