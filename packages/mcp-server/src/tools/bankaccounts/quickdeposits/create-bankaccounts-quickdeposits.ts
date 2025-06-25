// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.quickdeposits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bankaccounts/{bankAccountId}/quickdeposits',
  operationId: 'ExternalApiBankAccountQuickDeposits_CreateQuickDeposit',
};

export const tool: Tool = {
  name: 'create_bankaccounts_quickdeposits',
  description:
    'Creates a quick deposit.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`',
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
        description: 'Amount to be deposited.',
      },
      EntryDate: {
        type: 'string',
        description: 'Date the quick deposit was recorded.',
        format: 'date',
      },
      OffsetGLAccountId: {
        type: 'integer',
        description:
          'Offsetting general ledger account identifier. The offsetting general ledger account acts as a label for this deposit. For instance, if you\'re depositing money collected from a washing machine, you might select the "Laundry income" account.',
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the quick deposit.',
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
  return asTextContentResult(await client.bankaccounts.quickdeposits.create(bankAccountId, body));
};

export default { metadata, tool, handler };
