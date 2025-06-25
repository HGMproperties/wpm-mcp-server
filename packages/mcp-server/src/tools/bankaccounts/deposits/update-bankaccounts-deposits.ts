// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.deposits',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/bankaccounts/{bankAccountId}/deposits/{depositId}',
  operationId: 'ExternalApiBankAccountDeposits_UpdateBankAccountDeposit',
};

export const tool: Tool = {
  name: 'update_bankaccounts_deposits',
  description:
    'Updates a deposit.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      depositId: {
        type: 'integer',
      },
      EntryDate: {
        type: 'string',
        description: 'Date the deposit was recorded.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description: 'A collection of line items associated with the deposit.',
        items: {
          $ref: '#/$defs/deposit_line_save',
        },
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the deposit, if applicable.',
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
  const { depositId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.deposits.update(depositId, body));
};

export default { metadata, tool, handler };
