// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'vendors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/vendors/{vendorId}/transactions',
  operationId: 'ExternalApiVendorTransactions_GetAllVendorTransactions',
};

export const tool: Tool = {
  name: 'retrieve_transactions_vendors',
  description:
    'Retrieves all transactions for a given vendor.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`\r\n\r\n<span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      vendorId: {
        type: 'integer',
      },
      transactiondatefrom: {
        type: 'string',
        description:
          'Filters results to any vendor transaction whose entry date that is greater than or equal to the specified value. The maximum date range is 365 days.',
        format: 'date',
      },
      transactiondateto: {
        type: 'string',
        description:
          'Filters results to any vendor transaction whose entry date is less than or equal to the specified value. The maximum date range is 365 days.',
        format: 'date',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      memo: {
        type: 'string',
        description:
          'Filters results to vendor transaction whose memo contains the specified value. The memo cannot exceed 40 characters.',
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
      referencenumber: {
        type: 'string',
        description:
          'Filters results to vendor transaction whose reference number contains the specified value. The reference number cannot exceed 40 characters.',
      },
      transactiontypes: {
        type: 'array',
        description:
          'Filters results to any vendor transaction whose vendor transaction type matches the specified status. If no type is specified, vendor transactions with any type will be returned.',
        items: {
          type: 'string',
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
  const { vendorId, ...body } = args as any;
  return asTextContentResult(await client.vendors.retrieveTransactions(vendorId, body));
};

export default { metadata, tool, handler };
