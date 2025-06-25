// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.transfers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankaccounts/{bankAccountId}/transfers',
  operationId: 'ExternalApiBankAccountTransfers_GetBankAccountTransfers',
};

export const tool: Tool = {
  name: 'list_bankaccounts_transfers',
  description:
    'Retrieves all bank account transfers.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      enddate: {
        type: 'string',
        description:
          'Filters results to any transfers that were recorded on or before the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      startdate: {
        type: 'string',
        description:
          'Filters results to any transfers that were recorded on or after the specified date. The value must be formatted as YYYY-MM-DD.',
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
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { bankAccountId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.transfers.list(bankAccountId, body));
};

export default { metadata, tool, handler };
