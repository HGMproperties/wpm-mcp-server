// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.checks',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/bankaccounts/{bankAccountId}/checks/{checkId}',
  operationId: 'ExternalApiBankAccountChecks_UpdateCheckForBankAccount',
};

export const tool: Tool = {
  name: 'update_bankaccounts_checks',
  description:
    'Updates a check.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      checkId: {
        type: 'integer',
      },
      EntryDate: {
        type: 'string',
        description: 'Date the check was recorded.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description: 'A collection of line items to associate with the check.',
        items: {
          $ref: '#/$defs/check_line_save',
        },
      },
      Payee: {
        $ref: '#/$defs/check_payee_save',
      },
      CheckNumber: {
        type: 'string',
        description: 'Check number.',
      },
      Memo: {
        type: 'string',
        description: 'Memo associated with the check, if applicable.',
      },
    },
    $defs: {
      check_line_save: {
        type: 'object',
        properties: {
          AccountingEntity: {
            type: 'object',
            description: 'Accounting entity associated with the line item.',
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
        required: ['AccountingEntity', 'Amount', 'GLAccountId'],
      },
      check_payee_save: {
        type: 'object',
        properties: {
          Id: {
            type: 'integer',
            description: 'The payee user identifier.',
          },
          Type: {
            type: 'string',
            description: 'The payee entity type.',
            enum: ['Vendor', 'RentalOwner'],
          },
        },
        required: ['Id', 'Type'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { checkId, ...body } = args as any;
  return asTextContentResult(await client.bankaccounts.checks.update(checkId, body));
};

export default { metadata, tool, handler };
