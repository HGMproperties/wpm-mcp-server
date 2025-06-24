// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.recurringcharges',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/recurringcharges',
  operationId:
    'ExternalApiOwnershipAccountChargeRecurringTransactions_CreateOwnershipAccountsChargeRecurringTransaction',
};

export const tool: Tool = {
  name: 'create_ownershipaccounts_associations_recurringcharges',
  description:
    'Creates a recurring charge transaction that will post automatically on the specified ownership account ledger.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
        type: 'integer',
      },
      Amount: {
        type: 'number',
        description: 'The amount to record when applying the charge to the lease ledger.',
      },
      FirstOccurrenceDate: {
        type: 'string',
        description:
          'The date the charge will first be processed. This value along with the `Frequency` is also used as the basis for the date set on the transactions in future occurrences.',
        format: 'date',
      },
      Frequency: {
        type: 'string',
        description: 'Specifies the frequency at which the recurring charge will be processed.',
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
      GLAccountId: {
        type: 'integer',
        description:
          'The general ledger account unique identifier under which the charge amount will be recorded. The general ledger account can only be an income or liability account.',
      },
      PostDaysInAdvance: {
        type: 'integer',
        description:
          'Specifies the number of days ahead of the transaction date the charge will post on the lease ledger. This setting can be used to add the charge to the ledger ahead of the due date for visibility. For example, if the `FirstOccurrenceDate` is set to 8/10/2022 and this value is set to 5 then the charge will added to the ledger on 8/5/2022, but will have transaction date of 8/10/2022. Note, the value must be between 0 to 45 or set to 60, 75 or 90.',
      },
      Duration: {
        type: 'string',
        description:
          'Specifies the period of time/occurrences the recurring payment will be processed. Note, if the `Frequency` field is set to `OneTime` this field should be set to `NULL` as any submitted value will be ignored.',
        enum: ['UntilEndOfTerm', 'SpecificNumber'],
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the recurring charge. This value cannot exceed 65 characters.',
      },
      NumberOfOccurrences: {
        type: 'integer',
        description:
          'Indicates the number of times the recurring transaction should be processed. This value is required if the `Duration` field is set to `SpecificNumber`. This value can not exceed 100.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { ownershipAccountId, ...body } = args as any;
  return asTextContentResult(
    await client.associations.ownershipaccounts.recurringcharges.create(ownershipAccountId, body),
  );
};

export default { metadata, tool, handler };
