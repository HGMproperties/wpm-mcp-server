// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'budgets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/budgets/{budgetId}',
  operationId: 'ExternalApiBudgets_UpdateBudget',
};

export const tool: Tool = {
  name: 'update_budgets',
  description:
    'Updates a budget.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Budgets</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      budgetId: {
        type: 'integer',
      },
      Details: {
        type: 'array',
        description: 'The financial details associated with the budget.',
        items: {
          $ref: '#/$defs/budget_details_save_message',
        },
      },
      Name: {
        type: 'string',
        description: 'Name of the budget.',
      },
    },
    $defs: {
      budget_details_save_message: {
        type: 'object',
        properties: {
          GLAccountId: {
            type: 'integer',
            description: 'The general ledger account identifier to record the budget details under.',
          },
          MonthlyAmounts: {
            type: 'object',
            description: 'The budget detailed as monthly amounts',
            properties: {
              April: {
                type: 'number',
                description: 'The amount for April.',
              },
              August: {
                type: 'number',
                description: 'The amount for August.',
              },
              December: {
                type: 'number',
                description: 'The amount for December.',
              },
              February: {
                type: 'number',
                description: 'The amount for February.',
              },
              January: {
                type: 'number',
                description: 'The amount for January.',
              },
              July: {
                type: 'number',
                description: 'The amount for July.',
              },
              June: {
                type: 'number',
                description: 'The amount for June.',
              },
              March: {
                type: 'number',
                description: 'The amount for March.',
              },
              May: {
                type: 'number',
                description: 'The amount for May.',
              },
              November: {
                type: 'number',
                description: 'The amount for November.',
              },
              October: {
                type: 'number',
                description: 'The amount for October.',
              },
              September: {
                type: 'number',
                description: 'The amount for September.',
              },
            },
            required: [
              'April',
              'August',
              'December',
              'February',
              'January',
              'July',
              'June',
              'March',
              'May',
              'November',
              'October',
              'September',
            ],
          },
        },
        required: ['GLAccountId', 'MonthlyAmounts'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { budgetId, ...body } = args as any;
  return asTextContentResult(await client.budgets.update(budgetId, body));
};

export default { metadata, tool, handler };
