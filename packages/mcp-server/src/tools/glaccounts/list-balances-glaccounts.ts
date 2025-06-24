// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'glaccounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/glaccounts/balances',
  operationId: 'ExternalApiGLAccountBalances_GetGlAccountBalances',
};

export const tool: Tool = {
  name: 'list_balances_glaccounts',
  description:
    'Retrieves all general ledger account balances as of a given date. The response includes the total balance of each account along with the subtotals for any accounting entities (company, associations or rental properties) that have transactions assigned to the account.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      accountingbasis: {
        type: 'string',
        description:
          'The methodology in which revenues and expenses are recognized when calculating the balances. Specifying `Cash` calculates balances based on when money changes hands. Specifying `Accrual` calculates balances based on the period in which the transaction originally happened.',
        enum: ['Accrual', 'Cash'],
      },
      asofdate: {
        type: 'string',
        description:
          'Indicates the end date through which the balances will be calculated. This will include all transactions in your account until this specified date.',
        format: 'date',
      },
      aggregatebalancesbyunitid: {
        type: 'boolean',
        description:
          'Indicates whether to aggregate the AccountingEntityBalances by unit identifier in the response. If the value is set to true the AccountingEntityBalances will be aggregated by AccountingEntity.Unit.Id otherwise the response will have the balances aggregated by AccountingEntity.Id.',
      },
      entityid: {
        type: 'integer',
        description:
          'Filters transactions used in calculating the general ledger account balances to only those containing journal lines for with the specified entity id value. The entity id specified must be of the type specified in `EntityType`.',
      },
      entitytype: {
        type: 'string',
        description: 'Specifies the type of entity that `EntityId` field refers to.',
        enum: ['Association', 'Rental', 'RentalOwner'],
      },
      glaccountids: {
        type: 'array',
        description: 'Filters results to the specified set of general ledger account identifiers.',
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
  return asTextContentResult(await client.glaccounts.listBalances(body));
};

export default { metadata, tool, handler };
