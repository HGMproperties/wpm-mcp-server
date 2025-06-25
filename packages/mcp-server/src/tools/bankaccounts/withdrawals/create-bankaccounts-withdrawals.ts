// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.withdrawals',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bankaccounts/{bankAccountId}/withdrawals',
  operationId: 'ExternalApiBankAccountWithdrawals_CreateWithdrawalForBankAccount',
};

export const tool: Tool = {
  name: 'create_bankaccounts_withdrawals',
  description:
    'Creates a bank account withdrawal.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      AccountingEntity: {
        $ref: '#/$defs/accounting_entity_save',
      },
      Amount: {
        type: 'number',
        description: 'Withdrawal amount.',
      },
      EntryDate: {
        type: 'string',
        description: 'Date the withdrawal was recorded.',
        format: 'date',
      },
      OffsetGLAccountId: {
        type: 'integer',
        description:
          'Offsetting general ledger account identifier. The offsetting general ledger account acts as a label for this withdrawal. For instance, if you\'re withdrawing money due to a bank fee, you might select the "Bank fees" expense account.',
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the withdrawal, if applicable.',
      },
    },
    $defs: {
      accounting_entity_save: {
        type: 'object',
        description: 'Object to represent an Accounting Entity',
        properties: {
          AccountingEntityType: {
            type: 'string',
            description: 'The type of the accounting entity',
            enum: ['Association', 'Rental', 'Company'],
          },
          Id: {
            type: 'integer',
            description: 'The unique identifier of the accounting entity',
          },
          UnitId: {
            type: 'integer',
            description: 'The unit unique identifier for the accounting entity.',
          },
        },
        required: ['AccountingEntityType', 'Id'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { bankAccountId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.withdrawals.create(bankAccountId, body));
};

export default { metadata, tool, handler };
