// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/ownershipaccounts/{ownershipAccountId}/autoallocatedpayments',
  operationId: 'ExternalApiOwnershipAccountAutoAllocatedPayment_CreateOwnershipAccountAutoAllocatedPayment',
};

export const tool: Tool = {
  name: 'autoallocatedpayments_associations_ownershipaccounts',
  description:
    'Creates a payment on the ownership account ledger. Note that the recorded payment will be automatically allocated to the general ledger accounts based on the payment allocation settings. These settings can be found under the Settings > Application Settings > Residents page in your account. If you\'d like to specify the general ledger accounts the payment should apply to, please use the <a href="#operation/ExternalApiOwnershipAccountLedgerPayments_CreateOwnershipAccountLedgerPayment">Create a payment</a> endpoint. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      ownershipAccountId: {
        type: 'integer',
      },
      Date: {
        type: 'string',
        description: 'The date of the transaction. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
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
      TotalAmount: {
        type: 'number',
        description: 'The total amount of the payment being created.',
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
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { ownershipAccountId, ...body } = args as any;
  return asTextContentResult(
    await client.associations.ownershipaccounts.autoallocatedpayments(ownershipAccountId, body),
  );
};

export default { metadata, tool, handler };
