// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.transfers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/bankaccounts/{bankAccountId}/transfers/{transferId}',
  operationId: 'ExternalApiBankAccountTransfers_UpdateBankAccountTransfer',
};

export const tool: Tool = {
  name: 'update_bankaccounts_transfers',
  description:
    'Updates a bank account transfer.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      transferId: {
        type: 'integer',
      },
      AccountingEntity: {
        $ref: '#/$defs/bank_account_transfer_accounting_entity_save_message',
      },
      EntryDate: {
        type: 'string',
        description: 'The date the transfer was recorded.',
        format: 'date',
      },
      TotalAmount: {
        type: 'number',
        description: 'Total amount to transfer.',
      },
      TransferToBankAccountId: {
        type: 'integer',
        description: 'Bank account identifier the money will be transferred to.',
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the transfer, if applicable.',
      },
    },
    $defs: {
      bank_account_transfer_accounting_entity_save_message: {
        type: 'object',
        properties: {
          AccountingEntityType: {
            type: 'string',
            description: 'The type of accounting entity.',
            enum: ['Association', 'Rental', 'Company'],
          },
          Id: {
            type: 'integer',
            description: 'The accounting entity unique identifier.',
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
  const { transferId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.transfers.update(transferId, body));
};

export default { metadata, tool, handler };
