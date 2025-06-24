// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bills',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bills',
  operationId: 'ExternalApiBills_CreateBill',
};

export const tool: Tool = {
  name: 'create_bills',
  description:
    'Creates a bill.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      Date: {
        type: 'string',
        description:
          'The date that the bill was received. This date typically corresponds with a Bill Received Date, Invoice Date, or Invoice Received Date from an invoice. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      DueDate: {
        type: 'string',
        description:
          'The date that payment is due to the vendor. The due date must be after the value in the `Date` field. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description: 'A collection of line items associated with the bill.',
        items: {
          type: 'object',
          description: 'Bill line item.',
          properties: {
            AccountingEntity: {
              $ref: '#/$defs/accounting_entity_save',
            },
            Amount: {
              type: 'number',
              description: 'Line item amount.',
            },
            GlAccountId: {
              type: 'integer',
              description:
                'The general ledger account identifier under which the line item amount will be recorded. The following general ledger accounts are not valid: Accounts Payable, Accounts Receivable, Undeposited Funds or any general leger account referencing a bank account.',
            },
            Markup: {
              $ref: '#/$defs/bill_markup_save_message',
            },
            Memo: {
              type: 'string',
              description: 'Memo for the line item. The value cannot exceed 240 characters.',
            },
          },
          required: ['AccountingEntity', 'Amount', 'GlAccountId'],
        },
      },
      VendorId: {
        type: 'integer',
        description: 'The unique identifier of the vendor or supplier who sent you an invoice.',
      },
      Memo: {
        type: 'string',
        description: 'A description of what the invoice was for. The value cannot exceed 245 characters.',
      },
      ReferenceNumber: {
        type: 'string',
        description:
          'The reference or invoice number that the vendor assigned to the invoice. The value cannot exceed 40 characters.',
      },
      WorkOrderId: {
        type: 'integer',
        description: 'Unique identifier of the work order associated with this bill.',
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
      bill_markup_save_message: {
        type: 'object',
        description: 'Bill mark up.',
        properties: {
          Amount: {
            type: 'number',
            description:
              'The mark up amount. The value should be relative to the markup `Type`. If the mark up `Type` is `Percent` the value cannot exceed 100.',
          },
          Type: {
            type: 'string',
            description: 'The markup type.',
            enum: ['Percent', 'Amount'],
          },
        },
        required: ['Amount', 'Type'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bills.create(body));
};

export default { metadata, tool, handler };
