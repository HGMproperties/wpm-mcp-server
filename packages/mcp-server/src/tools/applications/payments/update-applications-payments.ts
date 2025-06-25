// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applications.payments',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/applications/{applicationId}/payments/{transactionId}',
  operationId: 'ExternalApiApplicationLedgerPayments_UpdateApplicationLedgerPayment',
};

export const tool: Tool = {
  name: 'update_applications_payments',
  description:
    'Updates an application ledger payment. Each line item must have a unique general ledger account identifier. PaymentMethod, Date, Memo, and the total Amount cannot be changed for payments with a PaymentMethod of `BuildiumEFT`, `BuildiumCC` or `RetailCash`.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      applicationId: {
        type: 'integer',
      },
      transactionId: {
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
          $ref: '#/$defs/payment_line_save',
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
          'BuildiumEFT',
          'BuildiumCC',
          'RetailCash',
        ],
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the payment. The value cannot exceed 65 characters.',
      },
      ReferenceNumber: {
        type: 'string',
        description: 'The reference Number of the transaction. The value cannot exceed 30 characters.',
      },
    },
    $defs: {
      payment_line_save: {
        type: 'object',
        description: 'This is an object that represents a line item on an application ledger payment',
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
  const { transactionId, ...body } = args as any;
  return asTextContentResult(await client.applications.payments.update(transactionId, body));
};

export default { metadata, tool, handler };
