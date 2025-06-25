// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.quickdeposits',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/bankaccounts/{bankAccountId}/quickdeposits/{quickDepositId}',
  operationId: 'ExternalApiBankAccountQuickDeposits_UpdateQuickDeposit',
};

export const tool: Tool = {
  name: 'update_bankaccounts_quickdeposits',
  description:
    'Updates a quick deposit.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      quickDepositId: {
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
  const { quickDepositId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.quickdeposits.update(quickDepositId, body));
};

export default { metadata, tool, handler };
