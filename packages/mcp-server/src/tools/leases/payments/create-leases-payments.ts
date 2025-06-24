// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/leases/{leaseId}/payments',
  operationId: 'ExternalApiLeaseLedgerPaymentsWrite_CreatePayment',
};

export const tool: Tool = {
  name: 'create_leases_payments',
  description:
    'Creates a lease ledger payment.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      Date: {
        type: 'string',
        description: 'The date of the transaction. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description:
          'A collection of line items included in the payment. At least one line item is required.',
        items: {
          $ref: '#/$defs/lease_ledger_payment_line',
        },
      },
      PaymentMethod: {
        type: 'string',
        description: 'The payment method used for the transaction.',
        enum: [
          'Check',
          'Cash',
          'MoneyOrder',
          'CashierCheck',
          'DirectDeposit',
          'CreditCard',
          'ElectronicPayment',
        ],
      },
      SendEmailReceipt: {
        type: 'boolean',
        description:
          'An indicator for whether or not to send an email receipt to the payee. If the payee does not have an email address set, no email will be sent.',
      },
      Memo: {
        type: 'string',
        description:
          'A brief note describing the reason for the payment. The value cannot exceed 65 characters.',
      },
      PayeeUserId: {
        type: 'integer',
        description: "The payee's user unique identifier.",
      },
      ReferenceNumber: {
        type: 'string',
        description: 'The reference Number of the transaction. The value cannot exceed 30 characters.',
      },
    },
    $defs: {
      lease_ledger_payment_line: {
        type: 'object',
        description: 'This is an object that represents a line item on a lease ledger payment',
        properties: {
          Amount: {
            type: 'number',
            description: 'Amount of the line item.',
          },
          GLAccountId: {
            type: 'integer',
            description:
              'The general ledger account identifier under which the line item amount will be recorded.',
          },
        },
        required: ['Amount', 'GLAccountId'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.payments.create(leaseId, body));
};

export default { metadata, tool, handler };
