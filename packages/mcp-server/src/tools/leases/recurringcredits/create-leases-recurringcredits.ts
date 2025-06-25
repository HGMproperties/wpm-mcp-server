// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.recurringcredits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/leases/{leaseId}/recurringcredits',
  operationId: 'ExternalApiLeaseRecurringCredits_CreateLeaseCreditRecurringTransaction',
};

export const tool: Tool = {
  name: 'create_leases_recurringcredits',
  description:
    'Creates a recurring credit transaction on the specified lease ledger. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      CreditType: {
        type: 'string',
        description:
          'Indicates how the credit will be applied.\r\n<ul><li>WaiveUnpaid - This credit type allows for reversing one or more charges without losing record of what has changed.</li><li>Exchange - This credit type allows for one of the following: 1) Reimburse a resident for a out-of-pocket expense, 2) Compensate for a service, 3) Write-off a resident balance considered uncollectable.</li><li>PreviouslyDeposited - This credit type allows for issuing a credit against payments that have already been deposited.</li></ul>',
        enum: ['WaiveUnpaid', 'Exchange', 'PreviouslyDeposited'],
      },
      FirstOccurrenceDate: {
        type: 'string',
        description:
          'The date the credit will first be processed. This value along with the `Frequency` is also used as the basis for the date set on the transactions in future occurrences.',
        format: 'date',
      },
      Frequency: {
        type: 'string',
        description: 'Specifies the frequency at which the recurring credit will be processed.',
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
      PostDaysInAdvance: {
        type: 'integer',
        description:
          'Specifies the number of days ahead of the transaction date the credit will post on the lease ledger. This setting can be used to add the credit to the ledger ahead of the due date for visibility. For example, if the `FirstOccurrenceDate` is set to 8/10/2022 and this value is set to 5 then the charge will added to the ledger on 8/5/2022, but will have transaction date of 8/10/2022. Note, the value must be between 0 to 45 or set to 60, 75 or 90.',
      },
      Duration: {
        type: 'string',
        description:
          'Specifies the period of time/occurrences the recurring credit will be processed. Note, if the `Frequency` field is set to `OneTime` this field should be set to `NULL` as any submitted value will be ignored.',
        enum: ['UntilEndOfTerm', 'SpecificNumber'],
      },
      Lines: {
        type: 'array',
        description:
          'Line items describing how the credit is to be allocated when the recurring credit is processed.',
        items: {
          $ref: '#/$defs/recurring_transaction_line_post',
        },
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the recurring credit. This value cannot exceed 65 characters.',
      },
      NumberOfOccurrences: {
        type: 'integer',
        description:
          'Indicates the number of times the recurring credit should be processed. This value is required if the `Duration` field is set to `SpecificNumber`. This value can not exceed 100.',
      },
      OffsettingGLAccountId: {
        type: 'integer',
        description:
          'Sets the offsetting general ledger account identifier for the credit.\r\n\r\nThis value must be provided when the `CreditType` field is set to `Exchange` or `PreviouslyDeposited`.\r\n\r\nWhen the `CreditType` is `Exchange` this must be an *expense* general ledger account type.\r\n\r\nWhen the `CreditType` is `PreviouslyDeposited` this must be an *equity* general ledger account type.',
      },
      PostingRuleGlAccountId: {
        type: 'integer',
        description:
          'Indicates whether to apply a posting rule when processing the transaction that would only record the credit if a prior payment has been made.\r\n\r\n\r\n\r\nSet the field value to the <b>Rent Income</b> general ledger account identifier if the credit should only be recorded when a payment was made and applied to the <b>Rent Income</b> general ledger account.\r\n\r\n\r\n\r\nSet the field value to the <b>Accounts Receivable</b> general ledger account identifier if the credit should only be recorded when a payment was made and applied to *any* general ledger account.\r\n\r\n\r\n\r\nSet the field value to <b>null</b> to always record the credit.',
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
  return asTextContentResult(await client.leases.recurringcredits.create(leaseId, body));
};

export default { metadata, tool, handler };
