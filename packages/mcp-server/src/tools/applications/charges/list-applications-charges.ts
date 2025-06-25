// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applications.charges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/applications/{applicationId}/charges',
  operationId: 'ExternalApiApplicationLedgerCharges_GetApplicationCharges',
};

export const tool: Tool = {
  name: 'list_applications_charges',
  description:
    'Retrieves all the charges for a specific application.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      applicationId: {
        type: 'integer',
      },
      chargeids: {
        type: 'array',
        description: 'Filters results by charge ids',
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
      transactiondatefrom: {
        type: 'string',
        description:
          'Filters results to any application transaction whose start date is greater than or equal to the specified value.',
        format: 'date',
      },
      transactiondateto: {
        type: 'string',
        description:
          'Filters results to any application transaction whose end date is less than or equal to the specified value.',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applicationId, ...body } = args as any;
  return asTextContentResult(await client.applications.charges.list(applicationId, body));
};

export default { metadata, tool, handler };
