// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.transactions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/transactions',
  operationId: 'ExternalApiOwnershipAccountsLedger_GetOwnershipAccountLedger',
};

export const tool: Tool = {
  name: 'list_ownershipaccounts_associations_transactions',
  description:
    'Retrieves all ledger transactions for a specific ownership account.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
        type: 'integer',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
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
      transactiondatefrom: {
        type: 'string',
        description:
          'Filters results to any lease transaction whose start date is greater than or equal to the specified value.',
        format: 'date',
      },
      transactiondateto: {
        type: 'string',
        description:
          'Filters results to any lease transaction whose end date is less than or equal to the specified value.',
        format: 'date',
      },
      transactiontypes: {
        type: 'array',
        description:
          'Filters results to any lease transaction whose lease transaction type matches the specified status. If no type is specified, lease transactions with any type will be returned.',
        items: {
          type: 'string',
          description: 'Indicates the type of transaction',
          enum: [
            'Bill',
            'Check',
            'Charge',
            'Payment',
            'Credit',
            'Refund',
            'ApplyDeposit',
            'ElectronicFundsTransfer',
            'Other',
            'Deposit',
            'GeneralJournalEntry',
            'OwnerContribution',
            'ReversePayment',
            'ReverseElectronicFundsTransfer',
            'VendorCredit',
            'RentalApplicationFeePayment',
            'ReverseRentalApplicationFeePayment',
            'ReverseOwnerContribution',
            'VendorRefund',
            'UnreversedPayment',
            'UnreversedElectronicFundsTransfer',
            'UnreversedOwnerContribution',
            'UnreversedRentalApplicationFeePayment',
            'ReversedEftRefund',
          ],
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { ownershipAccountId, ...body } = args as any;
  return asTextContentResult(
    await client.associations.ownershipaccounts.transactions.list(ownershipAccountId, body),
  );
};

export default { metadata, tool, handler };
