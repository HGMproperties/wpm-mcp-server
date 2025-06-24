// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/leases/{leaseId}/reversepayments',
  operationId: 'ExternalApiLeaseLedgerPaymentReversalsWrite_CreateLeaseReversePayment',
};

export const tool: Tool = {
  name: 'create_payment_reversal_leases',
  description:
    'Reverses a lease ledger payment. Note, this action can only be taken on a payment that has been deposited. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`\r\n            \r\n<span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      EntryDate: {
        type: 'string',
        description: 'Date of the transaction.',
        format: 'date',
      },
      PaymentTransactionId: {
        type: 'integer',
        description:
          'Transaction identifier of the payment to reverse. Note, this payment transaction must be deposited.',
      },
      BankFee: {
        type: 'object',
        description: 'Fee assessed by the bank for the reversed payment.',
        properties: {
          GLAccountId: {
            type: 'integer',
            description: 'Expense general ledger account to associate the bank fee.',
          },
          TotalAmount: {
            type: 'number',
            description: 'Total amount of the bank fee.',
          },
        },
        required: ['GLAccountId', 'TotalAmount'],
      },
      NSFCharge: {
        type: 'object',
        description: 'Non-sufficient funds (NSF) charge to the tenant.',
        properties: {
          GLAccountId: {
            type: 'integer',
            description: 'Income general ledger income account to record the charge under.',
          },
          TotalAmount: {
            type: 'number',
            description: 'Total amount to charge the tenant.',
          },
        },
        required: ['GLAccountId', 'TotalAmount'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.createPaymentReversal(leaseId, body));
};

export default { metadata, tool, handler };
