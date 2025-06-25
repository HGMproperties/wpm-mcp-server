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
  httpPath: '/v1/bills/{billId}/payments',
  operationId: 'ExternalApiBillPaymentsWrite_CreateBillPayment',
};

export const tool: Tool = {
  name: 'create_bills_payments',
  description:
    'Creates a bill payment.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`\r\n            <span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      billId: {
        type: 'integer',
      },
      BankAccountId: {
        type: 'integer',
        description: 'Unique identifier of the bank account that the payment was made from.',
      },
      EntryDate: {
        type: 'string',
        description: 'Date the payment was made.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description: 'A collection of payment line items.',
        items: {
          $ref: '#/$defs/bill_payment_line_post_message',
        },
      },
      CheckNumber: {
        type: 'string',
        description: 'Number of the check used to make the payment. The value cannot exceed 30 characters.',
      },
      Memo: {
        type: 'string',
        description: 'A high-level description of the payment. The value cannot exceed 240 characters.',
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
  const { billId, ...body } = args as any;
  return asTextContentResult(await client.bills.payments.create(billId, body));
};

export default { metadata, tool, handler };
