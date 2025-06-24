// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'generalledger.transactions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/generalledger/transactions',
  operationId: 'ExternalApiGeneralLedgerTransactions_GetAllTransactions',
};

export const tool: Tool = {
  name: 'list_generalledger_transactions',
  description:
    'Retrieves a list of general ledger transactions.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      enddate: {
        type: 'string',
        description:
          'Filters results to any transaction whose date is less than or equal to the specified value.',
        format: 'date',
      },
      glaccountids: {
        type: 'array',
        description:
          'Filters results to transactions whose general ledger account belongs to the specified set of general ledger account ids.',
        items: {
          type: 'integer',
        },
      },
      startdate: {
        type: 'string',
        description:
          'Filters results to any transaction whose date is greater than or equal to the specified value.',
        format: 'date',
      },
      lastupdatedfrom: {
        type: 'string',
        description:
          'Filters results to any transactions that were updated on or after the specified date. The value must be formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
      },
      lastupdatedto: {
        type: 'string',
        description:
          'Filters results to any transactions that were updated on or before the specified date. The value must be formatted as YYYY-MM-DDTHH:MM:SSZ.',
        format: 'date-time',
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
      selectionentityid: {
        type: 'integer',
        description:
          'Filters results to any transaction containing journal lines for an entity associated with the specified entity id value. The id must be of the type specified in SelectionEntityType.',
      },
      selectionentitytype: {
        type: 'string',
        description: 'Specifies the type of entity that SelectionEntityId refers to.',
        enum: ['Rental', 'RentalOwner', 'Association'],
      },
      selectionentityunitid: {
        type: 'integer',
        description:
          'Filters results to any transaction containing journal lines for the unitId specified. Only applicable when the SelectionEntityType is Rentals or Associations.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.generalledger.transactions.list(body));
};

export default { metadata, tool, handler };
