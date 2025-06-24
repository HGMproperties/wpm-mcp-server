// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bills.payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bills/payments',
  operationId: 'ExternalApiBillPaymentsWrite_CreateMultipleBillPayments',
};

export const tool: Tool = {
  name: 'create_multiple_bills_payments',
  description:
    'Creates a payment for multiple bills with one check.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`\r\n            <span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      BankAccountId: {
        type: 'integer',
        description: 'Unique identifier of the bank account that the payment was made from.',
      },
      BillIds: {
        type: 'array',
        description:
          'Unique identifiers of bills for full payment. Bill ids cannot be present here if they are part of the `PaymentAllocations` collection.',
        items: {
          type: 'integer',
        },
      },
      EntryDate: {
        type: 'string',
        description: 'Date the payment was made.',
        format: 'date',
      },
      PaymentAllocations: {
        type: 'array',
        description:
          'A collection of payment allocations for individual bills. Bill ids cannot be present here if they are fully paid as part of the `BillIds` collection.',
        items: {
          type: 'object',
          properties: {
            BillId: {
              type: 'integer',
              description: 'Unique identifier of the bill.',
            },
            Lines: {
              type: 'array',
              description: 'A collection of payment line items.',
              items: {
                $ref: '#/$defs/bill_payment_line_post_message',
              },
            },
          },
          required: [],
        },
      },
      QueueChecksForPrinting: {
        type: 'boolean',
        description:
          'Indicates whether to queue local check printing. Bank account associated with the bill must have check printing enabled to be true.',
      },
      VendorCreditIds: {
        type: 'array',
        description: 'Unique identifiers of the vendor credits to apply to the payment.',
        items: {
          type: 'integer',
        },
      },
    },
    $defs: {
      bill_payment_line_post_message: {
        type: 'object',
        properties: {
          Amount: {
            type: 'number',
            description: 'The amount that is being paid toward the bill line item.',
          },
          BillLineId: {
            type: 'integer',
            description:
              'The unique identifier of the bill line item toward which the payment is being made.',
          },
        },
        required: ['Amount', 'BillLineId'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bills.payments.createMultiple(body));
};

export default { metadata, tool, handler };
