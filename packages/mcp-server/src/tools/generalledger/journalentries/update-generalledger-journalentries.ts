// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'generalledger.journalentries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/generalledger/journalentries/{journalEntryId}',
  operationId: 'ExternalApiGeneralLedgerJournalEntries_UpdateGeneralJournalEntry',
};

export const tool: Tool = {
  name: 'update_generalledger_journalentries',
  description:
    'Updates a general journal entry.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      journalEntryId: {
        type: 'integer',
      },
      AccountingEntity: {
        $ref: '#/$defs/accounting_entity_save',
      },
      Date: {
        type: 'string',
        description: 'Date of the general journal entry. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description:
          'A list of general journal entry lines. At least two lines are required. The total amount of the debit PostingType lines must equal the total of the credit PostingType lines.',
        items: {
          $ref: '#/$defs/journal_entry_line_save',
        },
      },
      Memo: {
        type: 'string',
        description: 'Description of the general journal entry. Must be no longer than 240 characters.',
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
      journal_entry_line_save: {
        type: 'object',
        properties: {
          Amount: {
            type: 'number',
            description: 'Amount of the line item.',
          },
          GLAccountId: {
            type: 'integer',
            description:
              'The general ledger account identifier under which the line item amount will be recorded. Query the General Ledger Account endpoint <a href="#operation/AccountingExternalApi_GetAllGLAccounts">Get All GLAccounts</a> for a listing of available accounts.',
          },
          PostingType: {
            type: 'string',
            description: 'The posting type for the line item.',
            enum: ['Credit', 'Debit'],
          },
          Memo: {
            type: 'string',
            description: 'Memo for the line item.',
          },
        },
        required: ['Amount', 'GLAccountId', 'PostingType'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { journalEntryId, ...body } = args as any;
  return asTextContentResult(await client.generalledger.journalentries.update(journalEntryId, body));
};

export default { metadata, tool, handler };
