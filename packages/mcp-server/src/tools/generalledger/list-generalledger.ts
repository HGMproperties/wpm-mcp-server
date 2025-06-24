// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'generalledger',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/generalledger',
  operationId: 'ExternalApiGeneralLedger_GetGeneralLedgerEntries',
};

export const tool: Tool = {
  name: 'list_generalledger',
  description:
    'Retrieves all general ledger entries\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      accountingbasis: {
        type: 'string',
        description:
          'The methodology in which revenues and expenses are recognized when calculating the balances. Specifying `Cash` calculates balances based on when money changes hands. Specifying `Accrual` calculates balances based on the period in which the transaction originally happened.',
        enum: ['Accrual', 'Cash'],
      },
      enddate: {
        type: 'string',
        description:
          'Filters results to any entries whose end date is less than or equal to the specified value.',
        format: 'date',
      },
      glaccountids: {
        type: 'array',
        description:
          'Filters results to entries whose general ledger account belongs to the specified set of general ledger account ids.',
        items: {
          type: 'integer',
        },
      },
      startdate: {
        type: 'string',
        description:
          'Filters results to any entries whose start date is greater than or equal to the specified value.',
        format: 'date',
      },
      entityid: {
        type: 'integer',
        description:
          'Filters results to any general ledger entry containing line items associated with the specified entity identifier. This filter is used in conjunction with the `EntityType` field which must be set to the type of entity this identifier references.',
      },
      entitytype: {
        type: 'string',
        description: 'Specifies the type of entity that `EntityId` field refers to.',
        enum: ['Company', 'Rental', 'RentalOwner', 'Association'],
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
  return asTextContentResult(await client.generalledger.list(body));
};

export default { metadata, tool, handler };
