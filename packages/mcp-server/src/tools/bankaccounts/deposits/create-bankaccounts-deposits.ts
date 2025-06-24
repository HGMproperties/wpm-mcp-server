// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.deposits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bankaccounts/{bankAccountId}/deposits',
  operationId: 'ExternalApiBankAccountDeposits_CreateBankAccountDeposit',
};

export const tool: Tool = {
  name: 'create_bankaccounts_deposits',
  description:
    'Creates a deposit.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      EntryDate: {
        type: 'string',
        description: 'Date the deposit was recorded.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description: 'A collection of line items to associate with the deposit.',
        items: {
          $ref: '#/$defs/deposit_line_save',
        },
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the deposit, if applicable.',
      },
      PaymentTransactionIds: {
        type: 'array',
        description:
          'A collection of payment transaction identifiers that were included in this deposit transaction.',
        items: {
          type: 'integer',
        },
      },
    },
    $defs: {
      deposit_line_save: {
        type: 'object',
        properties: {
          AccountingEntity: {
            $ref: '#/$defs/accounting_entity_save',
          },
          Amount: {
            type: 'number',
            description: 'Amount of the line item.',
          },
          GLAccountId: {
            type: 'integer',
            description:
              'The general ledger account identifier under which the line item amount will be recorded.',
          },
          Memo: {
            type: 'string',
            description: 'Memo for the line item.',
          },
          ReferenceNumber: {
            type: 'string',
            description: 'Reference number for the line item.',
          },
        },
        required: [],
      },
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
  return asTextContentResult(await client.bankaccounts.deposits.create(bankAccountId, body));
};

export default { metadata, tool, handler };
