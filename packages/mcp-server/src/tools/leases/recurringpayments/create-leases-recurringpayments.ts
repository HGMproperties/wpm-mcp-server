// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.recurringpayments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/leases/{leaseId}/recurringpayments',
  operationId: 'ExternalApiLeaseRecurringPayments_CreateLeaseRecurringPayment',
};

export const tool: Tool = {
  name: 'create_leases_recurringpayments',
  description:
    'Creates a recurring payment that will post automatically on the specified lease ledger.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      FirstOccurrenceDate: {
        type: 'string',
        description:
          'The date the payment will first be processed. This value along with the `Frequency` is also used as the basis for the date set on the transactions in future occurrences.',
        format: 'date',
      },
      Frequency: {
        type: 'string',
        description: 'Specifies the frequency at which the recurring payment will be processed.',
        enum: [
          'Monthly',
          'Weekly',
          'Every2Weeks',
          'Quarterly',
          'Yearly',
          'Every2Months',
          'Daily',
          'Every6Months',
          'OneTime',
        ],
      },
      PaymentMethod: {
        type: 'string',
        description: 'The payment method for the transaction.',
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
      PostDaysInAdvance: {
        type: 'integer',
        description:
          'Specifies the number of days ahead of the transaction date the payment will post on the lease ledger. This setting can be used to add the payment to the ledger ahead of the due date for visibility. For example, if the `FirstOccurrenceDate` is set to 8/10/2022 and this value is set to 5 then the charge will added to the ledger on 8/5/2022, but will have transaction date of 8/10/2022. Note, the value must be between 0 to 45 or set to 60, 75 or 90.',
      },
      Duration: {
        type: 'string',
        description:
          'Specifies the period of time/occurrences the recurring payment will be processed. Note, if the `Frequency` field is set to `OneTime` this field should be set to `NULL` as any submitted value will be ignored.',
        enum: ['UntilEndOfTerm', 'SpecificNumber'],
      },
      Lines: {
        type: 'array',
        description:
          'Line items describing how the payment is to be allocated when the payment is processed.',
        items: {
          $ref: '#/$defs/recurring_transaction_line_post',
        },
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the recurring payment. This value cannot exceed 65 characters.',
      },
      NumberOfOccurrences: {
        type: 'integer',
        description:
          'Indicates the number of times the recurring payment should be processed. This value is required if the `Duration` field is set to `SpecificNumber`. This value can not exceed 100.',
      },
      PayerUserId: {
        type: 'integer',
        description: 'The unique identifier of the user making the payment.',
      },
    },
    $defs: {
      recurring_transaction_line_post: {
        type: 'object',
        properties: {
          Amount: {
            type: 'number',
            description: 'Line item amount.',
          },
          GLAccountId: {
            type: 'integer',
            description:
              'The general ledger account identifier under which the line item amount will be recorded. The account must be a liability or income type.',
          },
        },
        required: ['Amount', 'GLAccountId'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.recurringpayments.create(leaseId, body));
};

export default { metadata, tool, handler };
