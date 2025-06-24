// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bankaccounts',
  operationId: 'ExternalApiBankAccounts_GetAllBankAccounts',
};

export const tool: Tool = {
  name: 'list_bankaccounts',
  description:
    'Retrieves a list of bank accounts.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      bankaccountstatus: {
        type: 'string',
        description:
          'Filters results by the status of the bank account. If no status is specified, bank accounts with any status will be returned.',
        enum: ['Active', 'InActive'],
      },
      bankname: {
        type: 'string',
        description: 'Filters results to any bank account whose name *contains* the specified value.',
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
      routingnumbers: {
        type: 'array',
        description:
          'Filters results to any bank accounts whose routing number *contains* the specified value.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bankaccounts.list(body));
};

export default { metadata, tool, handler };
