// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.transfers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bankaccounts/{bankAccountId}/transfers',
  operationId: 'ExternalApiBankAccountTransfers_CreateBankAccountTransfer',
};

export const tool: Tool = {
  name: 'create_bankaccounts_transfers',
  description:
    'Creates a bank account transfer.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      AccountingEntity: {
        type: 'object',
        description: 'A rental property, association or company to associate with the transfer.',
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
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { bankAccountId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.transfers.create(bankAccountId, body));
};

export default { metadata, tool, handler };
