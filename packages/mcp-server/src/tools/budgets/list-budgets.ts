// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'budgets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/budgets',
  operationId: 'ExternalApiBudgets_GetBudgets',
};

export const tool: Tool = {
  name: 'list_budgets',
  description:
    'Retrieves all budgets.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Budgets</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      fiscalyear: {
        type: 'integer',
        description:
          'Filters results to any budgets that end in the given fiscal year. FiscalYear must be a positive number.',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      name: {
        type: 'string',
        description: 'Filters results to any budgets whose name *contains* the specified value.',
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
        description: 'Filters results to any budget associated to any of the specified set of property ids.',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.budgets.list(body));
};

export default { metadata, tool, handler };
